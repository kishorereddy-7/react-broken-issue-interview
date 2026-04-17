import React, { useEffect, startTransition, useState } from "react";
import { useIncidentsStore } from "../state/incidentsStore";
import { KanbanBoard } from "./kanbanBoard";
import { IncidentListView } from "./incidentListView/IncidentListView";
import { IncidentDto } from "../api/incidents";
import { SEVERITY_OPTIONS, IncidentViewMode } from "../shared/constants/common";
import styles from "./IncidentList.module.css";

type GroupedIncidents = {
  [key: string]: IncidentDto[];
};

export const IncidentList: React.FC = () => {
  const [viewMode, setViewMode] = useState<IncidentViewMode>(
    IncidentViewMode.KANBAN,
  );
  const [groupedIncidents, setGroupedIncidents] = useState<GroupedIncidents>(
    {},
  );
  const incidents = useIncidentsStore((s) => s.incidents) as IncidentDto[];
  const selectIncident = useIncidentsStore((s) => s.selectIncident);
  const selectedSeverityFilter = useIncidentsStore((s) => s.severityFilter);
  const selectedSearch = useIncidentsStore((s) => s.search);
  const setIncidents = useIncidentsStore((s) => s.setIncidents);

  useEffect(() => {
    startTransition(() => {
      if (!incidents) {
        setGroupedIncidents({});
        return;
      }

      const groups: GroupedIncidents = {};

      SEVERITY_OPTIONS.forEach((option) => {
        if (
          option.value &&
          (!selectedSeverityFilter || selectedSeverityFilter === option.value)
        )
          groups[option.value] = [];
      });

      incidents.forEach((incident) => {
        if (!incident.filteredOut && groups[incident.severity]) {
          groups[incident.severity]?.push(incident);
        }
      });

      setGroupedIncidents(groups);
    });
  }, [incidents]);

  useEffect(() => {
    if (!incidents) return;

    const updatedIncidents = incidents.map((incident) => {
      const isFiltered =
        (selectedSeverityFilter &&
          incident.severity !== selectedSeverityFilter) ||
        (selectedSearch && !incident.title.includes(selectedSearch)) ||
        false;

      return { ...incident, filteredOut: isFiltered };
    });

    setIncidents(updatedIncidents);
  }, [selectedSeverityFilter, selectedSearch, setIncidents]);

  return (
    <div className={styles.container}>
      <div className={styles.toggleButtons}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="viewMode"
            value={IncidentViewMode.KANBAN}
            checked={viewMode === IncidentViewMode.KANBAN}
            onChange={(e) => setViewMode(e.target.value as IncidentViewMode)}
          />
          Kanban
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="viewMode"
            value={IncidentViewMode.LIST}
            checked={viewMode === IncidentViewMode.LIST}
            onChange={(e) => setViewMode(e.target.value as IncidentViewMode)}
          />
          List
        </label>
      </div>

      {!incidents ? (
        <div>
          <p>No incidents to display.</p>
        </div>
      ) : viewMode === IncidentViewMode.KANBAN ? (
        <KanbanBoard groupedIncidents={groupedIncidents} />
      ) : (
        <IncidentListView incidents={incidents} onSelect={selectIncident} />
      )}
    </div>
  );
};
