export default function CalendarUI() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  // Sample expense data for demonstration with different amounts
  const expenseData = {
    3: { amount: 45, category: "Food" },
    7: { amount: 120, category: "Transport" },
    12: { amount: 85, category: "Entertainment" },
    15: { amount: 200, category: "Shopping" },
    18: { amount: 60, category: "Food" },
    22: { amount: 150, category: "Bills" },
    25: { amount: 75, category: "Entertainment" },
    28: { amount: 90, category: "Food" }
  };
  
  const totalExpenses = Object.values(expenseData).reduce((sum, expense) => sum + expense.amount, 0);
  
  return (
    <div className="calendar-ui">
      <div className="calendar-header">
        <div className="month-year">
          <h3>{monthNames[currentMonth]} {currentYear}</h3>
          <p className="subtitle">Expected Monthly Spending: ${totalExpenses}</p>
        </div>
        <div className="calendar-controls">
          <button className="nav-btn">‹</button>
          <button className="nav-btn">›</button>
        </div>
      </div>
      
      <div className="calendar-grid">
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        
        <div className="days">
          {days.map((day, index) => (
            <div 
              key={index} 
              className={`day ${day ? 'has-day' : ''} ${expenseData[day] ? 'has-expense' : ''} ${day === currentDate.getDate() ? 'today' : ''}`}
            >
              {day && (
                <>
                  <span className="day-number">{day}</span>
                  {expenseData[day] && (
                    <div className="expense-indicator">
                      <div className="expense-dot"></div>
                      <span className="expense-amount">${expenseData[day].amount}</span>
                      <span className="expense-category">{expenseData[day].category}</span>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="calendar-footer">
        <div className="expense-summary">
          <div className="summary-item">
            <span className="label">Total Expenses:</span>
            <span className="amount">${totalExpenses}</span>
          </div>
          <div className="summary-item">
            <span className="label">Days with Expenses:</span>
            <span className="count">{Object.keys(expenseData).length}</span>
          </div>
        </div>
        
        <div className="legend">
          <div className="legend-item">
            <div className="legend-dot"></div>
            <span>Expense Day</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot today"></div>
            <span>Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}
