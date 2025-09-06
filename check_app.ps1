# ================================
# Script: Check All Installed Applications Size
# ================================

# Hàm tính dung lượng thư mục
function Get-FolderSize($path) {
    if (Test-Path $path) {
        $size = (Get-ChildItem -Path $path -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
        return [math]::Round($size / 1GB, 2)
    } else {
        return 0
    }
}

# Các thư mục chứa ứng dụng phổ biến
$paths = @(
    "$env:ProgramFiles",
    "$env:ProgramFiles (x86)",
    "$env:LOCALAPPDATA\Programs",
    "$env:LOCALAPPDATA\Microsoft",
    "$env:APPDATA",
    "$env:USERPROFILE\scoop\apps"
)

$results = @()

foreach ($basePath in $paths) {
    if (Test-Path $basePath) {
        # Mỗi subfolder coi như 1 app
        Get-ChildItem -Path $basePath -Directory -ErrorAction SilentlyContinue | ForEach-Object {
            $size = Get-FolderSize $_.FullName
            if ($size -gt 0) {
                $results += [PSCustomObject]@{
                    Application = $_.Name
                    Path        = $_.FullName
                    SizeGB      = $size
                }
            }
        }
    }
}

# Xuất kết quả theo dung lượng giảm dần
$results | Sort-Object -Property SizeGB -Descending | Format-Table -AutoSize
