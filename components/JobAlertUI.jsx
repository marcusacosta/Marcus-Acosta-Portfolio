export default function JobAlertUI() {
  const jobAlerts = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120k - $160k",
      posted: "2 hours ago",
      match: "95%"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$90k - $130k",
      posted: "4 hours ago",
      match: "88%"
    }
  ];

  const userPreferences = {
    keywords: ["JavaScript", "React", "Node.js"],
    location: "San Francisco Bay Area",
    salaryMin: "$100k",
    experience: "3+ years"
  };

  return (
    <div className="job-alert-ui">
      <div className="ja-header">
        <div className="ja-logo">
          <span className="ja-icon">💼</span>
          <span className="ja-title">JobAlert</span>
        </div>
        <div className="notification-status">
          <span className="status-dot active"></span>
          <span className="status-text">3 New Alerts</span>
        </div>
      </div>

      <div className="alert-preferences">
        <h3 className="section-title">Your Alert Preferences</h3>
        <div className="preferences-grid">
          <div className="pref-item">
            <span className="pref-label">Keywords:</span>
            <div className="pref-tags">
              {userPreferences.keywords.map((keyword, index) => (
                <span key={index} className="pref-tag">{keyword}</span>
              ))}
            </div>
          </div>
          <div className="pref-item">
            <span className="pref-label">Location:</span>
            <span className="pref-value">{userPreferences.location}</span>
          </div>
          <div className="pref-item">
            <span className="pref-label">Min Salary:</span>
            <span className="pref-value">{userPreferences.salaryMin}</span>
          </div>
        </div>
      </div>

      <div className="job-alerts-section">
        <h3 className="section-title">Recent Job Matches</h3>
        <div className="alerts-list">
          {jobAlerts.map((job, index) => (
            <div key={index} className="job-alert-card">
              <div className="job-header">
                <div className="job-info">
                  <h4 className="job-title">{job.title}</h4>
                  <p className="job-company">{job.company} • {job.location}</p>
                </div>
                <div className="match-score">
                  <span className="match-percentage">{job.match}</span>
                  <span className="match-label">Match</span>
                </div>
              </div>
              
              <div className="job-details">
                <div className="job-salary">{job.salary}</div>
                <div className="job-posted">Posted {job.posted}</div>
              </div>
              
              <div className="alert-actions">
                <button className="action-btn primary">View Job</button>
                <button className="action-btn secondary">Save</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-footer">
        <div className="stat-item">
          <span className="stat-number">47</span>
          <span className="stat-label">Active Alerts</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">156</span>
          <span className="stat-label">Jobs Matched</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Monitoring</span>
        </div>
      </div>
    </div>
  );
}