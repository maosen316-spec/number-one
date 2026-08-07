# 项目协作说明

## 项目概览

这是一个 Django + Vue 3 的企业官网项目：

- Django 6.1 负责后端、数据库和管理后台。
- `django-simpleui` 已启用，管理后台位于 `/admin/`，界面语言为简体中文。
- Vue 3 + Vite 前端位于 `frontend/`。
- Vue 的生产构建输出到 `frontend/dist/`，Django 根路径 `/` 渲染该构建结果。
- Django 使用 SQLite 数据库文件 `db.sqlite3`。
- Python 虚拟环境位于 `.venv/`。

## 目录约定

```text
config/       Django 项目配置、URL、ASGI/WSGI
main/         Django 主应用
frontend/     Vue 3 + Vite 前端
manage.py     Django 管理命令入口
.venv/        Python 虚拟环境（不要提交）
db.sqlite3    本地开发数据库（除非明确要求，不要删除）
```

## 常用命令

在项目根目录执行 Django 命令：

```powershell
.\.venv\Scripts\python.exe manage.py check
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
```

在 `frontend/` 目录执行 Vue 命令。若当前终端没有 Node.js，请先加入工作区提供的 Node 路径：

```powershell
$env:Path="C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;$env:Path"
C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd install
C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd run dev
C:\Users\15217\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd run build
```

## 开发规则

1. 修改 Django 模型后，创建并执行迁移：
   `.\.venv\Scripts\python.exe manage.py makemigrations`，然后运行 `migrate`。
2. 修改 Vue 前端后，至少执行一次 `pnpm run build`，确保生产构建通过。
3. 保留 `/admin/` 管理后台路由；前台根路径由 Vue 构建结果提供。
4. 不要提交 `.venv/`、`frontend/node_modules/`、`frontend/dist/`、缓存或日志文件。
5. 不要在代码中提交新的密码、密钥或其他敏感信息。
6. 完成变更后运行 Django `check`，并在涉及前端时运行 Vue 构建验证。

## 当前访问地址

- Django/Vue 集成前台：`http://127.0.0.1:8000/`
- Django SimpleUI 后台：`http://127.0.0.1:8000/admin/`
- Vue Vite 开发服务器（开发时）：`http://127.0.0.1:5173/`
