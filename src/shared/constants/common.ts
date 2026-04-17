import type { Severity } from "../../api/incidents";
import type { SeverityOption } from "../interfaces/common.interface";

export enum SeverityLevel {
  CRITICAL = "critical",
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export enum IncidentViewMode {
  KANBAN = "kanban",
  LIST = "list",
}

export const SEVERITY_OPTIONS: SeverityOption[] = [
  { value: "", label: "All" },
  { value: SeverityLevel.CRITICAL, label: "Critical", color: "red" },
  { value: SeverityLevel.HIGH, label: "High", color: "orange" },
  { value: SeverityLevel.MEDIUM, label: "Medium", color: "yellow" },
  { value: SeverityLevel.LOW, label: "Low", color: "green" },
];
