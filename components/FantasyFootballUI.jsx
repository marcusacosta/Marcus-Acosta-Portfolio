export default function FantasyFootballUI() {
  const tradeAnalysis = {
    teamA: {
      name: "Team Thunder",
      giving: ["Tyreek Hill", "Travis Kelce"],
      receiving: ["Cooper Kupp", "Mark Andrews"],
      projectedPoints: "+12.4"
    },
    teamB: {
      name: "Team Lightning",
      giving: ["Cooper Kupp", "Mark Andrews"],
      receiving: ["Tyreek Hill", "Travis Kelce"],
      projectedPoints: "-8.2"
    }
  };

  const fairnessScore = 78;
  const recommendation = "Slightly favors Team Thunder";

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

      <div className="trade-overview">
        <h3 className="section-title">Trade Analysis</h3>
        <div className="teams-comparison">
          <div className="team-side">
            <div className="team-header">
              <h4 className="team-name">{tradeAnalysis.teamA.name}</h4>
              <div className={`projected-change positive`}>
                {tradeAnalysis.teamA.projectedPoints} pts/week
              </div>
            </div>
            <div className="players-section">
              <div className="giving">
                <span className="section-label">Giving:</span>
                {tradeAnalysis.teamA.giving.map((player, index) => (
                  <span key={index} className="player-chip giving-chip">{player}</span>
                ))}
              </div>
              <div className="receiving">
                <span className="section-label">Receiving:</span>
                {tradeAnalysis.teamA.receiving.map((player, index) => (
                  <span key={index} className="player-chip receiving-chip">{player}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="vs-divider">
            <span className="vs-text">VS</span>
          </div>

          <div className="team-side">
            <div className="team-header">
              <h4 className="team-name">{tradeAnalysis.teamB.name}</h4>
              <div className={`projected-change negative`}>
                {tradeAnalysis.teamB.projectedPoints} pts/week
              </div>
            </div>
            <div className="players-section">
              <div className="giving">
                <span className="section-label">Giving:</span>
                {tradeAnalysis.teamB.giving.map((player, index) => (
                  <span key={index} className="player-chip giving-chip">{player}</span>
                ))}
              </div>
              <div className="receiving">
                <span className="section-label">Receiving:</span>
                {tradeAnalysis.teamB.receiving.map((player, index) => (
                  <span key={index} className="player-chip receiving-chip">{player}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fairness-analysis">
        <div className="fairness-score">
          <div className="score-circle">
            <span className="score-number">{fairnessScore}</span>
            <span className="score-label">Fairness</span>
          </div>
          <div className="score-description">
            <span className="verdict">{recommendation}</span>
            <p className="verdict-explanation">
              Based on projected points and team needs analysis
            </p>
          </div>
        </div>
      </div>

      <div className="insights-footer">
        <div className="insight-item">
          <span className="insight-number">2.4M</span>
          <span className="insight-label">Trades Analyzed</span>
        </div>
        <div className="insight-item">
          <span className="insight-number">94%</span>
          <span className="insight-label">Accuracy Rate</span>
        </div>
        <div className="insight-item">
          <span className="insight-number">Live</span>
          <span className="insight-label">NFL Data</span>
        </div>
      </div>
    </div>
  );
}