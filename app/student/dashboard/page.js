'use client';

export default function StudentDashboard() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <style>{`
        .tab-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          display: flex;
          padding: 10px 0;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }
        .tab-item {
          flex: 1;
          text-align: center;
          padding: 8px;
          font-size: 12px;
          color: #666;
        }
        .tab-item.active { color: #764ba2; }
        .tab-icon { font-size: 20px; margin-bottom: 4px; }
        .content { padding: 20px; padding-bottom: 80px; }
        .card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .checkin-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
        }
        .stats-row {
          display: flex;
          gap: 15px;
        }
        .stat-item {
          flex: 1;
          text-align: center;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 8px;
        }
        .stat-value { font-size: 24px; font-weight: bold; color: #764ba2; }
        .stat-label { font-size: 12px; color: #666; margin-top: 4px; }
      `}</style>
      
      <div className="content">
        <h2 style={{ marginBottom: 20 }}>你好，学员 👋</h2>
        
        <div className="card">
          <button className="checkin-btn" onClick={() => alert('打卡功能开发中')}>
            📝 今日打卡
          </button>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: 15 }}>我的数据</h3>
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-value">65kg</div>
              <div className="stat-label">当前体重</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">7天</div>
              <div className="stat-label">连续打卡</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">-3kg</div>
              <div className="stat-label">累计减重</div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: 10 }}>今日计划</h3>
          <p style={{ color: '#666' }}>🍽️ 早餐：燕麦 + 鸡蛋</p>
          <p style={{ color: '#666' }}>🏃 运动：慢跑30分钟</p>
        </div>
      </div>
      
      <div className="tab-bar">
        <div className="tab-item active">
          <div className="tab-icon">🏠</div>
          <div>首页</div>
        </div>
        <div className="tab-item">
          <div className="tab-icon">📝</div>
          <div>打卡</div>
        </div>
        <div className="tab-item">
          <div className="tab-icon">📋</div>
          <div>计划</div>
        </div>
        <div className="tab-item">
          <div className="tab-icon">💬</div>
          <div>教练</div>
        </div>
        <div className="tab-item">
          <div className="tab-icon">👤</div>
          <div>我的</div>
        </div>
      </div>
    </div>
  );
}
