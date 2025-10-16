import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Add Task
  const addTask = () => {
    if (!title.trim() || !date || !time) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask = { title, date, time };
    setTasks([...tasks, newTask]);

    // Clear input fields
    setTitle("");
    setDate("");
    setTime("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>

      <form className="task-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="button" onClick={addTask}>
          Add Task
        </button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="no-tasks">No tasks yet.</li>
        ) : (
          tasks.map((task, i) => (
            <li key={i} className="task-item">
              <div>
                <strong>{task.title}</strong> <br />
                <small>
                  {task.date} — {task.time}
                </small>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteTask(i)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskManager;
