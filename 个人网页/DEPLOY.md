# 部署指南 🚀

## GitHub Pages 部署

### 方法一：通过GitHub网页界面

1. **创建新仓库**
   - 访问 [GitHub](https://github.com)
   - 点击 "New repository"
   - 仓库名：`starry-homepage` 或 `你的用户名.github.io`
   - 选择 Public（开源）
   - 勾选 "Add a README file"
   - 点击 "Create repository"

2. **上传文件**
   - 点击 "uploading an existing file"
   - 拖拽所有项目文件到页面
   - 提交信息：`Initial commit: starry主页`
   - 点击 "Commit changes"

3. **启用GitHub Pages**
   - 进入仓库的 Settings 页面
   - 左侧菜单找到 "Pages"
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - Folder 选择 "/ (root)"
   - 点击 "Save"

4. **访问网站**
   - 等待几分钟部署完成
   - 访问：`https://你的用户名.github.io/仓库名`

### 方法二：通过Git命令行

1. **初始化Git仓库**
```bash
git init
```

2. **添加所有文件**
```bash
git add .
```

3. **提交更改**
```bash
git commit -m "Initial commit: starry主页"
```

4. **添加远程仓库**
```bash
git remote add origin https://github.com/你的用户名/仓库名.git
```

5. **推送到GitHub**
```bash
git branch -M main
git push -u origin main
```

6. **启用GitHub Pages**
   - 按照方法一的步骤3操作

## 其他部署平台

### Netlify
1. 访问 [Netlify](https://netlify.com)
2. 注册/登录账号
3. 点击 "New site from Git"
4. 连接GitHub仓库
5. 部署设置保持默认
6. 点击 "Deploy site"

### Vercel
1. 访问 [Vercel](https://vercel.com)
2. 注册/登录账号
3. 点击 "New Project"
4. 导入GitHub仓库
5. 框架选择 "Other"
6. 点击 "Deploy"

### 腾讯云静态网站托管
1. 访问 [腾讯云控制台](https://console.cloud.tencent.com)
2. 搜索 "静态网站托管"
3. 创建托管服务
4. 上传项目文件
5. 配置自定义域名（可选）

## 自定义域名

### 1. 购买域名
- 阿里云、腾讯云、GoDaddy等
- 选择.com、.cn等后缀

### 2. 配置DNS
- 添加CNAME记录
- 指向GitHub Pages地址

### 3. 在GitHub Pages中设置
- 仓库 Settings → Pages
- 在 Custom domain 中输入域名
- 勾选 "Enforce HTTPS"

## 性能优化建议

### 1. 图片优化
- 使用WebP格式
- 压缩图片大小
- 添加lazy loading

### 2. 代码优化
- 压缩CSS和JS文件
- 使用CDN加速
- 启用Gzip压缩

### 3. SEO优化
- 添加meta标签
- 优化页面标题
- 添加sitemap.xml

## 常见问题

### Q: 网站无法访问？
A: 检查GitHub Pages是否启用，等待几分钟部署完成

### Q: 图片不显示？
A: 检查图片路径是否正确，确保文件已上传

### Q: 样式不生效？
A: 检查CSS文件路径，清除浏览器缓存

### Q: 如何更新网站？
A: 修改本地文件后，重新提交到GitHub即可自动更新

## 技术支持

如有问题，请：
1. 查看GitHub Issues
2. 提交新的Issue
3. 联系维护者

---

祝部署顺利！🎉
