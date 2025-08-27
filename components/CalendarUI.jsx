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
  
  // Sample expense data for demonstration
  const expenseDays = [3, 7, 12, 15, 18, 22, 25, 28];
  
  return (
    <div className="calendar-ui">
      <div className="calendar-header">
        <div className="month-year">
          <h3>{monthNames[currentMonth]} {currentYear}</h3>
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
              className={`day ${day ? 'has-day' : ''} ${expenseDays.includes(day) ? 'has-expense' : ''}`}
            >
              {day && (
                <>
                  <span className="day-number">{day}</span>
                  {expenseDays.includes(day) && (
                    <div className="expense-indicator">
                      <span className="expense-dot"></span>
                      <span className="expense-amount">$45</span>
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
          <span className="total-label">Total Expenses:</span>
          <span className="total-amount">$360</span>
        </div>
      </div>
    </div>
  );
}
