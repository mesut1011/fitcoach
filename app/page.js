'use client';
import { useState } from 'react';

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isCoach, setIsCoach] = useState(false);

  const handleSendCode = () => {
    alert('验证码已发送');
  };

  const handleLogin = () => {
    // 跳转到对应端
    if (isCoach) {
      window.location.href = '/coach';
    } else {
      window.location.href = '/student/dashboard';
    }
  };

  return (
    <div className="home-page">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        
        .home-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 24px;
          font-weight: bold;
        }
        
        .login-btn {
          background: white;
          color: #764ba2;
          border: none;
          padding: 10px 24px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        
        .hero {
          text-align: center;
          padding: 60px 20px;
        }
        
        .hero h1 {
          font-size: 32px;
          margin-bottom: 16px;
        }
        
        .hero p {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 30px;
        }
        
        .cta-btn {
          background: white;
          color: #764ba2;
          border: none;
          padding: 16px 48px;
          border-radius: 30px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
        }
        
        .features {
          padding: 40px 20px;
          background: rgba(255,255,255,0.1);
        }
        
        .features h2 {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .feature-item {
          background: rgba(255,255,255,0.2);
          padding: 20px;
          border-radius: 12px;
          text-align: center;
        }
        
        .feature-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }
        
        .pricing {
          padding: 40px 20px;
        }
        
        .pricing h2 {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 15px;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .price-card {
          background: white;
          color: #333;
          padding: 20px 15px;
          border-radius: 12px;
          text-align: center;
        }
        
        .price-card.featured {
          background: #ffd700;
          transform: scale(1.05);
        }
        
        .price-name {
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .price-value {
          font-size: 24px;
          font-weight: bold;
          color: #764ba2;
        }
        
        .price-unit {
          font-size: 12px;
          color: #666;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .modal {
          background: white;
          color: #333;
          padding: 30px;
          border-radius: 16px;
          width: 90%;
          max-width: 350px;
        }
        
        .modal h3 {
          margin-bottom: 20px;
          text-align: center;
        }
        
        .input-group {
          margin-bottom: 15px;
        }
        
        .input-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
        }
        
        .code-row {
          display: flex;
          gap: 10px;
        }
        
        .code-row input {
          flex: 1;
        }
        
        .code-btn {
          padding: 12px 16px;
          background: #764ba2;
          color: white;
          border: none;
          border-radius: 8px;
          white-space: nowrap;
        }
        
        .role-switch {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .role-btn {
          flex: 1;
          padding: 10px;
          border: 1px solid #764ba2;
          background: white;
          color: #764ba2;
          border-radius: 8px;
          cursor: pointer;
        }
        
        .role-btn.active {
          background: #764ba2;
          color: white;
        }
        
        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        
        .footer {
          text-align: center;
          padding: 30px;
          opacity: 0.7;
          font-size: 14px;
        }
      `}</style>
      
      <header className="header">
        <div className="logo">🏋️ FitCoach</div>
        <button className="login-btn" onClick={() => setShowLogin(true)}>
          登录
        </button>
      </header>
      
      <section className="hero">
        <h1>真人1对1瘦身监督</h1>
        <p>专业教练全程陪伴，让减肥不再孤单</p>
        <button className="cta-btn" onClick={() => setShowLogin(true)}>
          立即开始
        </button>
      </section>
      
      <section className="features">
        <h2>核心服务</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">📋</div>
            <div>定制计划</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⏰</div>
            <div>每日打卡</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <div>教练沟通</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <div>数据追踪</div>
          </div>
        </div>
      </section>
      
      <section className="pricing">
        <h2>套餐价格</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-name">基础版</div>
            <div className="price-value">¥299</div>
            <div className="price-unit">/月</div>
          </div>
          <div className="price-card featured">
            <div className="price-name">标准版</div>
            <div className="price-value">¥599</div>
            <div className="price-unit">/月</div>
          </div>
          <div className="price-card">
            <div className="price-name">尊享版</div>
            <div className="price-value">¥999</div>
            <div className="price-unit">/月</div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        © 2024 FitCoach 瘦身监督平台
      </footer>
      
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>登录 / 注册</h3>
            
            <div className="role-switch">
              <button 
                className={`role-btn ${!isCoach ? 'active' : ''}`}
                onClick={() => setIsCoach(false)}
              >
                我是学员
              </button>
              <button 
                className={`role-btn ${isCoach ? 'active' : ''}`}
                onClick={() => setIsCoach(true)}
              >
                我是教练
              </button>
            </div>
            
            <div className="input-group">
              <input 
                type="tel" 
                placeholder="手机号" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            
            <div className="input-group">
              <div className="code-row">
                <input 
                  type="text" 
                  placeholder="验证码" 
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
                <button className="code-btn" onClick={handleSendCode}>
                  获取验证码
                </button>
              </div>
            </div>
            
            <button className="submit-btn" onClick={handleLogin}>
              登录
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
