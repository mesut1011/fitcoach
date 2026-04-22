'use client';

export default function CoachDashboard() {
  const students = [
    { name: '张三', days: 15, weight: '-2.5kg' },
    { name: '李四', days: 7, weight: '-1.2kg' },
    { name: '王五', days: 3, weight: '-0.5kg' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <style>{`
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
        }
        .content { padding: 20px; }
        .card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 15px;
        }
        .student-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }
        .student-item:last-child { border-bottom: none; }
        .student-name { font-weight: 600; }
        .student-info { font-size: 12px; color: #666; }
        .student-result { color: #4CAF50; font-weight: 600; }
      `}</style>
      
      <div className="header">
        <h1>教练工作台</h1>
        <p style={{ marginTop: 5, opacity: 0.8 }}>今日待处理：3人</p>
      </div>
      
      <div className="content">
        <div className="card">
          <h3 style={{ marginBottom: 15 }}>📊 本月收入</h3>
          <div style={{ fontSize: 32, fontWeight: 'bold', color: '#764ba2' }}>
            ¥3,598
          </div>
          <p style={{ fontSize: 12, color: '#666', marginTop: 5 }}>
            已服务 6 位学员
          </p>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: 15 }}>我的学员</h3>
          {students.map((s, i) => (
            <div className="student-item" key={i}>
              <div>
                <div className="student-name">{s.name}</div>
                <div className="student-info">已打卡 {s.days} 天</div>
              </div>
              <div className="student-result">{s.weight}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
