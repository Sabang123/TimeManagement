import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";

function CalendarPage() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Format date to YYYY-MM-DD (same as task.date)
  const formatDate = (date) => date.toISOString().split("T")[0];

  const tasksForSelectedDate = tasks.filter(
    (task) => task.date === formatDate(selectedDate)
  );

  return (
    <div className="calendar-page">
      <h2>📅 Task Calendar</h2>
      <p>View your scheduled tasks by date</p>

      <div className="calendar-container">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={({ date }) => {
            const dateStr = formatDate(date);
            return tasks.some((task) => task.date === dateStr)
              ? "highlight-date"
              : "";
          }}
        />
      </div>

      <div className="task-list-on-calendar">
        <h3>Tasks on {formatDate(selectedDate)}:</h3>
        {tasksForSelectedDate.length > 0 ? (
          <ul>
            {tasksForSelectedDate.map((task, i) => (
              <li key={i}>
                <strong>{task.title}</strong> — {task.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks for this date.</p>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
