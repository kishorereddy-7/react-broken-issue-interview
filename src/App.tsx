import React from "react";
import { Dashboard } from "./pages/Dashboard";

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <div className="app-header">
        <h1>Incident Dashboard</h1>
      </div>
      <main className="app-content">
        <Dashboard />
      </main>
    </div>
  );
};
