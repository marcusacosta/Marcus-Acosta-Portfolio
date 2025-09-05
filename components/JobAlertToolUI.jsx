export default function JobAlertToolUI() {
  const alerts = [
    {
      id: 1,
      company: "TechCorp",
      position: "Software Engineering Intern",
      location: "San Francisco, CA",
      time: "2 min ago",
      unread: true
    },
    {
      id: 2,
      company: "DataFlow Inc",
      position: "Backend Developer Intern",
      location: "Seattle, WA",
      time: "15 min ago",
      unread: true
    },
    {
      id: 3,
      company: "CloudTech",
      position: "Full Stack Intern",
      location: "Austin, TX",
      time: "1 hour ago",
      unread: false
    }
  ];

  return (
    <div className="job-alert-tool-ui">
      <div className="phone-frame">
        <div className="phone-header">
          <div className="status-bar">
            <span className="time">9:41</span>
            <div className="battery">
              <div className="battery-level"></div>
            </div>
          </div>
          <div className="header-content">
            <div className="back-arrow">‹</div>
            <div className="header-title">Job Alerts</div>
            <div className="settings">⚙</div>
          </div>
        </div>
        
        <div className="messages-container">
          <div className="message-bubble incoming">
            <div className="message-text">
              🎉 New internship posted!
            </div>
            <div className="message-time">9:38 AM</div>
          </div>
          
          <div className="message-bubble incoming">
            <div className="message-text">
              <strong>TechCorp</strong><br/>
              Software Engineering Intern<br/>
              📍 San Francisco, CA<br/>
              <span className="apply-link">Apply now →</span>
            </div>
            <div className="message-time">9:38 AM</div>
          </div>
          
          <div className="message-bubble incoming">
            <div className="message-text">
              <strong>DataFlow Inc</strong><br/>
              Backend Developer Intern<br/>
              📍 Seattle, WA<br/>
              <span className="apply-link">Apply now →</span>
            </div>
            <div className="message-time">9:25 AM</div>
          </div>
          
          <div className="message-bubble outgoing">
            <div className="message-text">
              Thanks! I'll check these out
            </div>
            <div className="message-time">9:26 AM</div>
          </div>
        </div>
        
        <div className="input-area">
          <div className="input-field">
            <span className="input-placeholder">Type a message...</span>
            <div className="send-button">↑</div>
          </div>
        </div>
      </div>
    </div>
  );
}
