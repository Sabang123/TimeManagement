import React from "react";
import TaskManager from "./TaskManager";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <TaskManager />
    </div>
  );
}

export default Dashboard;