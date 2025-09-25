// 视频控制功能
const heroVideo = document.getElementById('heroVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const videoLoading = document.getElementById('videoLoading');

console.log('视频元素:', heroVideo);
console.log('播放按钮:', playPauseBtn);
console.log('静音按钮:', muteBtn);

// 测试按钮是否可点击
if (playPauseBtn) {
    console.log('播放按钮样式:', window.getComputedStyle(playPauseBtn));
    console.log('播放按钮位置:', playPauseBtn.getBoundingClientRect());
}

if (heroVideo && playPauseBtn && muteBtn) {
    // 视频加载状态处理
    heroVideo.addEventListener('loadstart', () => {
        if (videoLoading) videoLoading.style.display = 'block';
    });
    
    heroVideo.addEventListener('canplay', () => {
        if (videoLoading) videoLoading.style.display = 'none';
    });
    
    heroVideo.addEventListener('error', () => {
        if (videoLoading) {
            videoLoading.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>视频加载失败</p>';
        }
    });

    // 播放/暂停控制
    playPauseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('播放/暂停按钮被点击');
        console.log('视频当前状态 - paused:', heroVideo.paused);
        
        if (heroVideo.paused) {
            heroVideo.play().then(() => {
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                console.log('视频开始播放');
            }).catch(err => {
                console.log('播放失败:', err);
            });
        } else {
            heroVideo.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            console.log('视频暂停');
        }
    });

    // 静音控制
    muteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('静音按钮被点击');
        if (heroVideo.muted) {
            heroVideo.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            console.log('声音开启');
        } else {
            heroVideo.muted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            console.log('声音关闭');
        }
    });

    // 视频状态变化时更新按钮图标
    heroVideo.addEventListener('play', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });

    heroVideo.addEventListener('pause', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // 视频加载完成后自动播放
    heroVideo.addEventListener('loadeddata', () => {
        heroVideo.play().catch(e => {
            console.log('自动播放被阻止:', e);
        });
    });
} else {
    console.error('无法找到视频控制元素');
}

// 移动端导航菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 平滑滚动到指定部分
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(30, 60, 114, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
        navbar.style.backdropFilter = 'none';
    }
});

// 滚动时高亮当前导航项
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 添加滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // 根据不同的动画类添加对应的动画效果
            if (element.classList.contains('animate-left')) {
                element.classList.add('fade-in-left');
            } else if (element.classList.contains('animate-right')) {
                element.classList.add('fade-in-right');
            } else if (element.classList.contains('animate-scale')) {
                element.classList.add('scale-in');
            } else if (element.classList.contains('animate-up')) {
                element.classList.add('slide-in-up');
            } else {
                element.classList.add('fade-in-up');
            }
            
            // 移除初始隐藏状态
            element.classList.remove('animate-on-scroll');
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// 精选内容标签切换
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有活动状态
        tabBtns.forEach(b => b.classList.remove('active'));
        // 添加当前按钮的活动状态
        btn.classList.add('active');
        
        const tab = btn.getAttribute('data-tab');
        
        // 隐藏所有标签页内容
        document.querySelectorAll('.gallery-grid').forEach(grid => {
            grid.style.display = 'none';
        });
        
        // 显示对应的标签页内容
        const targetTab = document.getElementById(tab + '-tab');
        if (targetTab) {
            targetTab.style.display = 'grid';
        }
    });
});

// 照片展示功能
document.querySelectorAll('.gallery-item, .gaming-item, .mentor-photo').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const video = this.querySelector('video');
        
        if (img) {
            // 创建模态框
            const modal = document.createElement('div');
            modal.className = 'photo-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // 关闭模态框
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                    document.body.style.overflow = 'auto';
                }
            });
        } else if (video) {
            // 创建视频模态框
            const modal = document.createElement('div');
            modal.className = 'photo-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <video controls autoplay>
                        <source src="${video.querySelector('source').src}" type="video/mp4">
                        您的浏览器不支持视频播放。
                    </video>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // 关闭模态框
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});

// 体重图表绘制
function drawWeightChart() {
    const canvas = document.getElementById('weightChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 根据图片数据的体重记录（8月28日-9月22日）
    const weightData = [
        {date: '8/28', weight: 84.5},
        {date: '8/29', weight: 84.3},
        {date: '8/30', weight: 83.3},
        {date: '8/31', weight: 82.9},
        {date: '9/1', weight: 82.7},
        {date: '9/2', weight: 83.5},
        {date: '9/3', weight: 82.7},
        {date: '9/4', weight: 82.0},
        {date: '9/5', weight: 81.8},
        {date: '9/6', weight: 82.4},
        {date: '9/10', weight: 81.6},
        {date: '9/11', weight: 80.9},
        {date: '9/12', weight: 80.1},
        {date: '9/13', weight: 80.0},
        {date: '9/16', weight: 80.0},
        {date: '9/18', weight: 79.4},
        {date: '9/19', weight: 79.0},
        {date: '9/20', weight: 78.8},
        {date: '9/22', weight: 78.7}
    ];
    
    const weights = weightData.map(item => item.weight);
    const minWeight = Math.min(...weights);
    const maxWeight = Math.max(...weights);
    const range = maxWeight - minWeight;
    
    // 清空画布
    ctx.clearRect(0, 0, width, height);
    
    // 设置样式
    ctx.strokeStyle = '#1e3c72';
    ctx.fillStyle = 'rgba(30, 60, 114, 0.1)';
    ctx.lineWidth = 3;
    
    // 绘制折线图
    ctx.beginPath();
    weightData.forEach((item, index) => {
        const x = (index / (weightData.length - 1)) * (width - 80) + 40;
        const y = height - 60 - ((item.weight - minWeight) / range) * (height - 120);
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    
    // 填充区域
    ctx.lineTo(width - 40, height - 60);
    ctx.lineTo(40, height - 60);
    ctx.closePath();
    ctx.fill();
    
    // 绘制数据点
    ctx.fillStyle = '#1e3c72';
    weightData.forEach((item, index) => {
        const x = (index / (weightData.length - 1)) * (width - 80) + 40;
        const y = height - 60 - ((item.weight - minWeight) / range) * (height - 120);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // 添加X轴标签（日期）
    ctx.fillStyle = '#666';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    weightData.forEach((item, index) => {
        const x = (index / (weightData.length - 1)) * (width - 80) + 40;
        ctx.fillText(item.date, x, height - 20);
    });
    
    // 添加Y轴标签（体重）
    ctx.textAlign = 'right';
    ctx.font = '10px Arial';
    for (let i = 0; i <= 5; i++) {
        const weight = minWeight + (range * i / 5);
        const y = height - 60 - (i / 5) * (height - 120);
        ctx.fillText(weight.toFixed(1), 35, y + 3);
    }
    
    // 添加标题
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('体重变化趋势 (kg)', width / 2, 20);
}

// 页面加载完成后绘制图表
window.addEventListener('load', () => {
    setTimeout(drawWeightChart, 500);
});

// 联系表单处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // 简单的表单验证
        if (!name || !email || !message) {
            alert('请填写所有必填字段');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('请输入有效的邮箱地址');
            return;
        }
        
        // 模拟发送邮件
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('消息发送成功！我会尽快回复您。');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// 邮箱验证函数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 打字机效果
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 为英雄标题添加打字机效果
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// 数字计数动画
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
}

// 当统计部分进入视口时开始计数动画
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// 添加页面加载动画
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // 延迟显示内容
    setTimeout(() => {
        document.querySelectorAll('.fade-in-up').forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
});

// 返回顶部按钮
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #1e3c72;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

document.body.appendChild(backToTopBtn);

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

// 返回顶部功能
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 添加悬停效果
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.background = '#ffd700';
    backToTopBtn.style.color = '#1e3c72';
    backToTopBtn.style.transform = 'translateY(-3px)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.background = '#1e3c72';
    backToTopBtn.style.color = 'white';
    backToTopBtn.style.transform = 'translateY(0)';
});

// 添加键盘导航支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // 关闭移动端菜单
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 性能优化：节流滚动事件
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 应用节流到滚动事件
const throttledScrollHandler = throttle(() => {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(30, 60, 114, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
        navbar.style.backdropFilter = 'none';
    }
    
    // 返回顶部按钮显示/隐藏
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
}, 10);

window.addEventListener('scroll', throttledScrollHandler);

