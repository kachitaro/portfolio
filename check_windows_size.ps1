# check_windows_size.ps1
function Get-FolderSizeGB($path) {
    if (Test-Path $path) {
        return ((Get-ChildItem -Path $path -Recurse -ErrorAction SilentlyContinue | 
            Measure-Object Length -Sum).Sum / 1GB)
    } else {
        return 0
    }
}

Write-Host "====== Checking Windows Size ======" -ForegroundColor Green

$totalC = (Get-PSDrive C).Used/1GB

# Một số thư mục Windows chính
$windowsSize = Get-FolderSizeGB "C:\Windows"
$programFiles = Get-FolderSizeGB "C:\Program Files"
$programFilesX86 = Get-FolderSizeGB "C:\Program Files (x86)"
$users = Get-FolderSizeGB "C:\Users"

# Bản Windows đang chạy
$winVer = (Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion").ProductName

# Ước tính baseline clean install
$baseline = if ($winVer -like "*Windows 11*") { 25 } else { 18 } # GB
$extra = $totalC - $baseline

Write-Host "Windows Version  : $winVer"
Write-Host ("C: Used          : {0:N2} GB" -f $totalC)
Write-Host ("C:\Windows       : {0:N2} GB" -f $windowsSize)
Write-Host ("C:\Program Files : {0:N2} GB" -f $programFiles)
Write-Host ("C:\Program Files (x86): {0:N2} GB" -f $programFilesX86)
Write-Host ("C:\Users         : {0:N2} GB" -f $users)
Write-Host ""
Write-Host ("Baseline (clean install) : {0:N2} GB" -f $baseline)
Write-Host ("Your system is using     : {0:N2} GB" -f $totalC)
Write-Host ("Extra over baseline      : {0:N2} GB" -f $extra)
