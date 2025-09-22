# starry主页 ✨

一个现代化、响应式的个人生活记录网站，采用玻璃拟态设计和动态背景效果。

## 🌟 项目特色

- **玻璃拟态设计**：采用毛玻璃效果和半透明元素
- **动态背景**：多层径向渐变和微妙动画效果
- **响应式布局**：完美适配桌面端和移动端
- **滚动动画**：元素进入视口时的渐显动画
- **现代化UI**：渐变文字、阴影效果、圆角设计

## 📱 功能模块

- **首页视频**：个人生活视频展示
- **课程表**：本周课程安排，支持多时段显示
- **减肥记录**：体重数据统计和趋势图表
- **精选内容**：照片和视频展示，支持标签切换
- **梦拓展示**：梦拓学长相关照片
- **游戏MVP**：游戏截图展示
- **疯狂星期四**：微信收款码展示
- **社交媒体**：抖音、小红书链接

## 🛠️ 技术栈

- **HTML5**：语义化标签和现代结构
- **CSS3**：Flexbox、Grid、动画、渐变
- **JavaScript**：滚动动画、图片模态框、图表绘制
- **Canvas**：体重趋势图表
- **Font Awesome**：图标库

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/你的用户名/starry-homepage.git
cd starry-homepage
```

### 2. 本地预览
直接在浏览器中打开 `index.html` 文件

### 3. 自定义内容

#### 替换图片和视频
将你的媒体文件放入对应文件夹：
```
images/
├── logo-cat-plane.jpg    # 网站logo
├── gallery1-4.jpg        # 精选照片
├── mentor1-2.jpg         # 梦拓照片
├── gaming1.jpg           # 游戏截图
└── qr-code.jpg           # 微信收款码

videos/
├── life-intro.mp4        # 首页视频
└── gallery1.mp4          # 精选视频
```

#### 修改个人信息
编辑 `index.html` 中的以下内容：
- 网站标题和导航
- 课程表数据
- 体重数据
- 社交媒体链接

#### 自定义样式
修改 `styles.css` 中的：
- 颜色主题
- 动画效果
- 布局样式

## 📦 部署到GitHub Pages

### 1. 创建GitHub仓库
1. 在GitHub上创建新仓库
2. 仓库名建议：`starry-homepage` 或 `你的用户名.github.io`

### 2. 上传代码
```bash
git init
git add .
git commit -m "Initial commit: starry主页"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 3. 启用GitHub Pages
1. 进入仓库的 Settings 页面
2. 找到 Pages 选项
3. 选择 Source 为 "Deploy from a branch"
4. 选择 main 分支
5. 点击 Save

### 4. 访问网站
几分钟后，你的网站将在 `https://你的用户名.github.io/仓库名` 访问

## 🎨 设计说明

### 色彩方案
- **主色调**：蓝紫渐变 (#667eea → #764ba2)
- **辅助色**：粉色、橙色、青色渐变
- **背景**：多层径向渐变 + 动态纹理

### 动画效果
- **滚动动画**：fadeInUp、fadeInLeft、fadeInRight、scaleIn
- **悬停效果**：缩放、阴影变化
- **背景动画**：微妙的位移和旋转

### 响应式断点
- **桌面端**：> 768px
- **平板端**：768px - 1024px
- **移动端**：< 768px

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 抖音：[@你的抖音号](https://www.douyin.com/user/62088362935)
- 小红书：[@你的小红书号](https://www.xiaohongshu.com/user/profile/623ac2cf00000000100058df)

## 🙏 致谢

特别感谢：
- Claude Sonnet 4 & GPT-4 的AI协助
- 华东师范大学官网的设计灵感
- 所有开源项目的支持

---

⭐ 如果这个项目对你有帮助，请给个Star支持一下！