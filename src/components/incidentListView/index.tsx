import React from "react";
import { IncidentItem } from "../IncidentItem";
import type { IncidentDto } from "../api/incidents";
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
    {incidents
      ?.filter((incident) => !incident.filteredOut)
      .map((incident) => (
        <IncidentItem
          key={incident.id}
          incident={incident}
          onClick={() => onSelect(incident)}
        />
      ))}
  </ul>
);
