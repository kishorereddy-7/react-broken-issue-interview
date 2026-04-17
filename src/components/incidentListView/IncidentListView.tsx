import React from "react";
import { IncidentItem } from "../IncidentItem";
import type { IncidentDto } from "../../api/incidents";
import styles from "../IncidentList.module.css";

type FilteredIncident = IncidentDto & {
  filteredOut?: boolean;
};

type Props = {
  incidents?: FilteredIncident[];
  onSelect: (incident: IncidentDto) => void;
};

export const IncidentListView: React.FC<Props> = ({ incidents, onSelect }) => (
  <ul className={styles.listContainer}>
    {!incidents || incidents.length === 0 ? (
      <li className={styles.noIncidents}>No incidents to display.</li>
    ) : (
      incidents?.map((incident) =>
        !incident.filteredOut && (
          <IncidentItem
            key={incident.id}
            incident={incident}
            onClick={() => onSelect(incident)}
          />
        ),
      )
    )}
  </ul>
);
