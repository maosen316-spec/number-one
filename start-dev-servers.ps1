$projectDir = $PSScriptRoot
$pythonExe = Join-Path $projectDir '.venv\Scripts\python.exe'
$nodeBin = 'C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin'
$pnpmCmd = 'C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd'

if (-not (Test-Path -LiteralPath $pythonExe)) {
    exit 1
}

$djangoListener = Get-NetTCPConnection -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue
if (-not $djangoListener) {
    $djangoCommand = 'start "" /b "' + $pythonExe + '" manage.py runserver 127.0.0.1:8000'
    cmd.exe /c $djangoCommand
}

$vueListener = Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue
if (-not $vueListener) {
    $vueRunner = Join-Path $projectDir 'run-vue-dev.cmd'
    $vueCommand = 'start "" /b "' + $vueRunner + '"'
    cmd.exe /c $vueCommand
}
