# number-one

三角洲行动干员资料网站，采用 Django + Vue 3 + Vite 构建。

## 本地运行

### 后端

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
```

### 前端

```powershell
cd frontend
pnpm install
pnpm run dev
```

前台页面：`http://127.0.0.1:8000/`  
管理后台：`http://127.0.0.1:8000/admin/`

## 主要功能

- Vue 独立首页、干员选择页和反馈页
- Django SimpleUI 中文管理后台
- 反馈 API：`POST /api/contacts/`
- SQLite `contact` 表保存反馈数据
