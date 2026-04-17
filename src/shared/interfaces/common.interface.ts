import type { Severity } from "../../api/incidents";

export interface SeverityOption {
  value: Severity | "";
  label: string;
  color?: string;
}
