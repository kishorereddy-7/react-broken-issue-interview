import React from "react";
import { useIncidentsStore } from "../../state/incidentsStore";
import { SEVERITY_OPTIONS } from "../../shared/constants/common";
import { IncidentItem } from "../IncidentItem";
import type { IncidentDto } from "../../api/incidents";
import styles from "./style.module.css";

type Props = {
  groupedIncidents: {
    [key: string]: IncidentDto[];
  };
};

export const KanbanBoard: React.FC<Props> = ({ groupedIncidents }) => {
  const selectIncident = useIncidentsStore((s) => s.selectIncident);

  return (
    <div className={styles.kanban}>
      {Object.entries(groupedIncidents).map(([severity, incidents]) => {
        const option = SEVERITY_OPTIONS.find((o) => o.value === severity);
        return (
          <div
            key={severity}
            className={styles.column}
            style={
              {
                "--severity-color": option?.color ?? "#999",
              } as React.CSSProperties
            }
          >
            <div className={styles.columnHeader}>
              <h3>{option?.label}</h3>
              <span className={styles.count}>{incidents.length}</span>
            </div>
            <ul className={styles.columnContent}>
              {incidents.length === 0 ? (
                <li>No incidents to display.</li>
              ) : (
                incidents?.map((incident) => (
                  <IncidentItem
                    key={incident.id}
                    incident={incident}
                    onClick={() => selectIncident(incident)}
                  />
                ))
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
