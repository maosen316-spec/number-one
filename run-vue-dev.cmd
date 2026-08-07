@echo off
set "PATH=C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
cd /d "%~dp0frontend"
start "Vue Dev Server" /b "C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd" dev --host 127.0.0.1 --port 5173
