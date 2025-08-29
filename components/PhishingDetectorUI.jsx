import { useState } from 'react';

export default function PhishingDetectorUI() {
  const [url, setUrl] = useState('https://secure-banking-login.com');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(true);
  
  const securityFeatures = [
    { name: "SSL Certificate", status: "Valid", icon: "🔒", color: "green" },
    { name: "Domain Age", status: "2 years", icon: "📅", color: "blue" },
    { name: "Reputation Score", status: "85/100", icon: "⭐", color: "gold" },
    { name: "Threat Level", status: "Low Risk", icon: "🛡️", color: "green" }
  ];

  const recentScans = [
    { url: "amazon.com", result: "Safe", timestamp: "2 min ago" },
    { url: "paypal-secure.net", result: "Suspicious", timestamp: "5 min ago" },
    { url: "google.com", result: "Safe", timestamp: "10 min ago" }
  ];

  return (
    <div className="phishing-detector-ui">
      <div className="pd-header">
        <div className="pd-logo">
          <div className="shield-icon">🛡️</div>
          <span className="pd-title">SecureLink Scanner</span>
        </div>
        <div className="pd-status">
          <span className="status-indicator active"></span>
          <span className="status-text">Active Protection</span>
        </div>
      </div>

      <div className="scan-section">
        <h3 className="section-title">URL Security Scanner</h3>
        <div className="url-input-container">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="url-input"
            placeholder="Enter URL to scan for security threats..."
          />
          <button className="scan-button">
            {isAnalyzing ? '🔍 Scanning...' : '🔍 Scan URL'}
          </button>
        </div>
      </div>

      {analysisComplete && (
        <div className="analysis-results">
          <div className="result-header">
            <h4 className="result-title">Security Analysis Results</h4>
            <div className="scan-timestamp">Last scanned: Just now</div>
          </div>
          
          <div className="security-score">
            <div className="score-circle">
              <span className="score-number">85</span>
              <span className="score-label">Security Score</span>
            </div>
            <div className="score-description">
              <span className="verdict safe">SAFE TO VISIT</span>
              <p className="verdict-explanation">
                This URL appears to be legitimate with proper security measures in place.
              </p>
            </div>
          </div>

          <div className="security-features">
            <h5>Security Features</h5>
            <div className="features-grid">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <div className="feature-details">
                    <span className="feature-name">{feature.name}</span>
                    <span className={`feature-status ${feature.color}`}>{feature.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="recent-scans">
        <h5>Recent Scans</h5>
        <div className="scans-list">
          {recentScans.map((scan, index) => (
            <div key={index} className="scan-item">
              <div className="scan-url">{scan.url}</div>
              <div className={`scan-result ${scan.result.toLowerCase()}`}>
                {scan.result}
              </div>
              <div className="scan-time">{scan.timestamp}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-footer">
        <div className="stat-item">
          <span className="stat-number">1,247</span>
          <span className="stat-label">URLs Scanned</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98.2%</span>
          <span className="stat-label">Accuracy Rate</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Protection</span>
        </div>
      </div>
    </div>
  );
}
