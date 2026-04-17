import React, { useEffect } from "react";
import { useIncidentsStore } from "../state/incidentsStore";
import { IncidentList } from "../components/IncidentList";
import { Filters } from "../components/Filters";
import { IncidentModal } from "../components/incidentModal/IncidentModal";

export const Dashboard: React.FC = () => {
  const load = useIncidentsStore((s) => s.loadIncidents);
  const loading = useIncidentsStore((s) => s.loading);
  const error = useIncidentsStore((s) => s.error);

  useEffect(() => {
    load();
  }, []);

  const renderIncidents = () => {
    if (loading) {
      return <div role="status">Loading incidents…</div>;
    }

    if (error) {
      return <div role="alert">Error: {error}</div>;
    }

    return <IncidentList />;
  };

  return (
    <main className="dashboard-layout">
      <aside className="sidebar">
        <h2>Filters</h2>
        <Filters />
      </aside>
      <section className="content">{renderIncidents()}</section>
      <IncidentModal />
    </main>
  );
};
