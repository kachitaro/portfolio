# Set Execution Policy: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Helper functions
function Write-Start { param ([string]$msg) ; Write-Host ("====== " + $msg) -ForegroundColor Green }
function Write-Done { Write-Host "====== Done" -ForegroundColor Blue; Write-Host }

# Disable UAC prompt (Never Notify)
Start-Process -Wait powershell -Verb RunAs -ArgumentList `
    "Set-ItemProperty -Path REGISTRY::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System -Name ConsentPromptBehaviorAdmin -Value 0"

# Install Scoop (user-level first, bắt buộc để khởi tạo scoop)
Write-Start -msg "Installing Scoop ..."
if (Get-Command scoop -ErrorAction SilentlyContinue) {
    Write-Warning "Scoop already installed"
} else {
    iwr -useb get.scoop.sh | iex
}
Write-Done

# Configure Scoop buckets (admin mode)
Write-Start -msg "Configuring Scoop buckets ..."
Start-Process -Wait powershell -Verb RunAs -ArgumentList `
    "scoop bucket add extras; scoop bucket add nerd-fonts; scoop bucket add java; scoop bucket add main; scoop bucket add nonportable; scoop update"
Write-Done

# Install all packages (system-level)
Write-Start -msg "Installing all packages (system-level) ..."
$allPackages = @(
    "main/nvm",
    "main/yarn",
    "main/python",
    "main/pwsh",
    "java/temurin17-jdk",
    "extras/wezterm",
    "extras/vscode",
    "extras/flutter",
    "extras/android-studio",
    "extras/gradle",
    "nerd-fonts/JetBrainsMono"
    "vcredist-aio",
    "docker"
) -join " "

Start-Process -Wait powershell -Verb RunAs -ArgumentList "scoop install $allPackages"
Write-Done

# Set up NVM and install Node.js LTS (user-level)
Write-Start -msg "Setting up NVM and installing Node.js LTS ..."
Start-Process -Wait powershell -ArgumentList @"
    nvm install 22
    nvm use 22
    nvm alias default 22
"@
Write-Done

# Install React Native CLI and Windows support (npm global needs admin too)
Write-Start -msg "Installing React Native CLI and Windows support ..."
Start-Process -Wait powershell -Verb RunAs -ArgumentList `
    "npm install -g react-native-cli react-native-windows-init"
Write-Done

# Install React Native Windows dependencies (official Microsoft script, run as admin)
Write-Start -msg "Installing React Native Windows dependencies ..."
Start-Process -Wait powershell -Verb RunAs -ArgumentList `
    "Set-ExecutionPolicy Unrestricted -Scope Process -Force; iex (New-Object System.Net.WebClient).DownloadString('https://aka.ms/rnw-vs2022-deps.ps1')"
Write-Done

# Enable Virtualization & Docker requirements
Write-Start -msg "Enabling virtualization features for Docker ..."
Start-Process -Wait powershell -verb runas -ArgumentList @"
    echo y | Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All -NoRestart
    echo y | Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform -All -NoRestart
    echo y | Enable-WindowsOptionalFeature -Online -FeatureName Containers -All -NoRestart
"@
Write-Done

Write-Start -msg "Installing WSL..."
    If (!(wsl -l -v)){
        wsl --install
        wsl --update
        wsl --install --no-launch --web-download -d Ubuntu
    } else {
        Write-Warning "WSL already installed"
    }
Write-Done

Write-Host "✅ Setup completed." -ForegroundColor Green
Write-Host "⚠️ Please restart your system to finalize Docker, Android SDK, and virtualization features." -ForegroundColor Red
