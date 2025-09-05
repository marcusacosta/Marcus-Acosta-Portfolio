export default function FantasyFootballUI() {
  const tradeData = {
    player1: {
      name: "Tyreek Hill",
      position: "WR",
      team: "MIA",
      score: 18.7,
      jerseyNumber: "10"
    },
    player2: {
      name: "Cooper Kupp",
      position: "WR", 
      team: "LAR",
      score: 15.3,
      jerseyNumber: "10"
    }
  };

  const verdict = "Hill wins by 3.4 points";
  const fairnessScore = 78;

  return (
    <div className="fantasy-football-ui">
      <div className="ff-header">
        <div className="ff-logo">
          <span className="ff-icon">🏈</span>
          <span className="ff-title">Trade Analyzer</span>
        </div>
        <div className="analysis-status">
          <span className="status-dot analyzing"></span>
          <span className="status-text">Analysis Complete</span>
        </div>
      </div>

      <div className="trade-comparison">
        <div className="player-card">
          <div className="player-avatar">
            <div className="avatar-circle">
              <FootballPlayer1 />
            </div>
            <div className="score-badge positive">
              {tradeData.player1.score}
            </div>
          </div>
          <div className="player-info">
            <h3 className="player-name">{tradeData.player1.name}</h3>
            <div className="player-details">
              <span className="position">{tradeData.player1.position}</span>
              <span className="team">{tradeData.player1.team}</span>
            </div>
          </div>
        </div>

        <div className="vs-section">
          <div className="vs-circle">
            <span className="vs-text">VS</span>
          </div>
          <div className="trade-arrow">↔</div>
        </div>

        <div className="player-card">
          <div className="player-avatar">
            <div className="avatar-circle">
              <FootballPlayer2 />
            </div>
            <div className="score-badge negative">
              {tradeData.player2.score}
            </div>
          </div>
          <div className="player-info">
            <h3 className="player-name">{tradeData.player2.name}</h3>
            <div className="player-details">
              <span className="position">{tradeData.player2.position}</span>
              <span className="team">{tradeData.player2.team}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="verdict-section">
        <div className="verdict-card">
          <div className="verdict-title">Trade Verdict</div>
          <div className="verdict-text">{verdict}</div>
          <div className="fairness-indicator">
            <span className="fairness-label">Fairness Score:</span>
            <span className="fairness-value">{fairnessScore}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom Football Player SVG Components
const FootballPlayer1 = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="30" cy="20" r="12" fill="#D4A574" stroke="#B8956A" strokeWidth="1"/>
    
    {/* Helmet */}
    <ellipse cx="30" cy="18" rx="13" ry="10" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="1"/>
    <ellipse cx="30" cy="18" rx="11" ry="8" fill="#3B82F6"/>
    
    {/* Face mask */}
    <path d="M20 20 Q30 15 40 20" stroke="#374151" strokeWidth="2" fill="none"/>
    <path d="M20 22 Q30 17 40 22" stroke="#374151" strokeWidth="2" fill="none"/>
    <path d="M20 24 Q30 19 40 24" stroke="#374151" strokeWidth="2" fill="none"/>
    
    {/* Eyes */}
    <circle cx="26" cy="19" r="1.5" fill="#1F2937"/>
    <circle cx="34" cy="19" r="1.5" fill="#1F2937"/>
    
    {/* Jersey */}
    <rect x="22" y="30" width="16" height="20" rx="2" fill="#DC2626" stroke="#B91C1C" strokeWidth="1"/>
    
    {/* Jersey number */}
    <text x="30" y="42" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">10</text>
    
    {/* Arms */}
    <rect x="18" y="32" width="4" height="12" rx="2" fill="#D4A574"/>
    <rect x="38" y="32" width="4" height="12" rx="2" fill="#D4A574"/>
    
    {/* Legs */}
    <rect x="25" y="48" width="3" height="8" rx="1.5" fill="#1E40AF"/>
    <rect x="32" y="48" width="3" height="8" rx="1.5" fill="#1E40AF"/>
    
    {/* Football */}
    <ellipse cx="45" cy="45" rx="3" ry="2" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
    <path d="M42 45 Q45 43 48 45" stroke="#654321" strokeWidth="1" fill="none"/>
  </svg>
);

const FootballPlayer2 = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="30" cy="20" r="12" fill="#D4A574" stroke="#B8956A" strokeWidth="1"/>
    
    {/* Helmet */}
    <ellipse cx="30" cy="18" rx="13" ry="10" fill="#7C2D12" stroke="#5C1D0A" strokeWidth="1"/>
    <ellipse cx="30" cy="18" rx="11" ry="8" fill="#DC2626"/>
    
    {/* Face mask */}
    <path d="M20 20 Q30 15 40 20" stroke="#374151" strokeWidth="2" fill="none"/>
    <path d="M20 22 Q30 17 40 22" stroke="#374151" strokeWidth="2" fill="none"/>
    <path d="M20 24 Q30 19 40 24" stroke="#374151" strokeWidth="2" fill="none"/>
    
    {/* Eyes */}
    <circle cx="26" cy="19" r="1.5" fill="#1F2937"/>
    <circle cx="34" cy="19" r="1.5" fill="#1F2937"/>
    
    {/* Jersey */}
    <rect x="22" y="30" width="16" height="20" rx="2" fill="#1E40AF" stroke="#1D4ED8" strokeWidth="1"/>
    
    {/* Jersey number */}
    <text x="30" y="42" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">10</text>
    
    {/* Arms */}
    <rect x="18" y="32" width="4" height="12" rx="2" fill="#D4A574"/>
    <rect x="38" y="32" width="4" height="12" rx="2" fill="#D4A574"/>
    
    {/* Legs */}
    <rect x="25" y="48" width="3" height="8" rx="1.5" fill="#7C2D12"/>
    <rect x="32" y="48" width="3" height="8" rx="1.5" fill="#7C2D12"/>
    
    {/* Football */}
    <ellipse cx="15" cy="45" rx="3" ry="2" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
    <path d="M12 45 Q15 43 18 45" stroke="#654321" strokeWidth="1" fill="none"/>
  </svg>
);