export default function JobAlertUI() {
  const messages = [
    {
      id: 1,
      text: "🚨 New Job Alert!\n\nSenior Software Engineer\nTechCorp - San Francisco, CA\n$120k - $160k\n\nApply: techcorp.com/jobs/12345",
      time: "2:34 PM",
      isDelivered: true
    },
    {
      id: 2,
      text: "💼 Job Match Found!\n\nFull Stack Developer\nStartupXYZ - Remote\n$90k - $130k\n95% match with your preferences\n\nApply: startupxyz.com/careers",
      time: "1:15 PM",
      isDelivered: true
    },
    {
      id: 3,
      text: "⚡ Hot Job Alert!\n\nReact Developer\nInnovateTech - Seattle, WA\n$110k - $140k\nPosted 5 minutes ago\n\nQuick apply: innovatetech.com/react-dev",
      time: "12:45 PM",
      isDelivered: true
    }
  ];

  return (
    <div className="job-alert-sms-ui">
      <div className="sms-header">
        <div className="header-left">
          <span className="back-arrow">‹</span>
          <div className="contact-info">
            <div className="contact-avatar">📱</div>
            <div className="contact-details">
              <span className="contact-name">JobAlert SMS</span>
              <span className="contact-status">Active now</span>
            </div>
          </div>
        </div>
        <div className="header-right">
          <span className="info-icon">ⓘ</span>
        </div>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message-bubble">
            <div className="message-content">
              {message.text.split('\n').map((line, index) => (
                <div key={index} className="message-line">
                  {line}
                </div>
              ))}
            </div>
            <div className="message-footer">
              <span className="message-time">{message.time}</span>
              {message.isDelivered && (
                <span className="delivery-status">Delivered</span>
              )}
            </div>
          </div>
        ))}
        
        <div className="typing-indicator">
          <div className="typing-bubble">
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="message-input-container">
        <div className="input-wrapper">
          <span className="camera-icon">📷</span>
          <input 
            type="text" 
            placeholder="Text Message" 
            className="message-input"
            readOnly
          />
          <span className="send-icon">↑</span>
        </div>
      </div>
    </div>
  );
}