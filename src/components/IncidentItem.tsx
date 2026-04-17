import React from "react";
import type { Severity } from "../api/incidents";
import { SeverityLevel } from "../shared/constants/common";

export type IncidentListItem = {
  id: string;
  title: string;
  severity: Severity;
  timestamp: string;
};

type Props = {
  incident: IncidentListItem;
  onClick?: () => void;
};

function severityClass(severity: Severity): string {
  switch (severity) {
    case SeverityLevel.CRITICAL:
      return "badge badge-critical";
    case SeverityLevel.HIGH:
      return "badge badge-high";
    case SeverityLevel.MEDIUM:
      return "badge badge-medium";
    case SeverityLevel.LOW:
    default:
      return "badge badge-low";
  }
}

export const IncidentItem: React.FC<Props> = ({ incident, onClick }) => {
  return (
    <li className="incident-item" onClick={onClick}>
      <div>
        <strong>{incident.title}</strong>
      </div>
      <div>
        <span className={severityClass(incident.severity)}>
          {incident.severity.toUpperCase()}
        </span>{" "}
        <span>{new Date(incident.timestamp).toLocaleString()}</span>
      </div>
    </li>
  );
};
