export default function TicketmasterUI() {
  const events = [
    {
      name: "Taylor Swift | The Eras Tour",
      venue: "SoFi Stadium",
      date: "Dec 15, 2024",
      originalPrice: "$299",
      currentPrice: "$189",
      savings: "$110"
    },
    {
      name: "Drake & SZA",
      venue: "Madison Square Garden",
      date: "Jan 22, 2025",
      originalPrice: "$199",
      currentPrice: "$149",
      savings: "$50"
    }
  ];

  return (
    <div className="ticketmaster-ui">
      <div className="tm-header">
        <div className="tm-logo">
          <span className="tm-text">Ticketmaster</span>
        </div>
        <div className="price-alert-badge">
          <span className="alert-icon">🔔</span>
          <span className="alert-text">Price Alert</span>
        </div>
      </div>
      
      <div className="search-section">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for events, venues, or artists..."
            className="search-input"
            readOnly
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      
      <div className="alerts-section">
        <h3 className="section-title">Active Price Alerts</h3>
        <div className="alerts-list">
          {events.map((event, index) => (
            <div key={index} className="alert-card">
              <div className="event-info">
                <h4 className="event-name">{event.name}</h4>
                <p className="event-details">
                  <span className="venue">{event.venue}</span>
                  <span className="date">{event.date}</span>
                </p>
              </div>
              
              <div className="price-info">
                <div className="price-comparison">
                  <span className="original-price">{event.originalPrice}</span>
                  <span className="current-price">{event.currentPrice}</span>
                </div>
                <div className="savings-badge">
                  Save {event.savings}
                </div>
              </div>
              
              <div className="alert-status">
                <span className="status-dot active"></span>
                <span className="status-text">Monitoring</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">24</span>
          <span className="stat-label">Active Alerts</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">$1,240</span>
          <span className="stat-label">Total Saved</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">156</span>
          <span className="stat-label">Alerts Sent</span>
        </div>
      </div>
    </div>
  );
}
