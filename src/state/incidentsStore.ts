import { create } from "zustand";
import { fetchIncidents, type IncidentDto } from "../api/incidents";

type SeverityFilter = "" | "critical" | "high" | "medium" | "low";

export type IncidentState = {
  incidents: IncidentDto[] | null;
  loading: boolean;
  error: string | null;
  severityFilter: SeverityFilter;
  search: string;
  selectedIncident: IncidentDto | null;
  loadIncidents: () => Promise<void>;
  setSeverityFilter: (value: SeverityFilter) => void;
  setSearch: (value: string) => void;
  selectIncident: (incident: IncidentDto | null) => void;
  setIncidents: (incidents: IncidentDto[]) => void;
};

export const useIncidentsStore = create<IncidentState>((set, get) => ({
  incidents: null,
  loading: false,
  error: null,
  severityFilter: "",
  search: "",
  selectedIncident: null,
  async loadIncidents() {
    set({ loading: true, error: null });
    try {
      const data = await fetchIncidents();
      set({ incidents: data, loading: false });
    } catch (e: any) {
      set({ error: e?.message ?? "Unknown error" });
    }
  },
  setSeverityFilter(value) {
    set({ severityFilter: value });
  },
  setSearch(value) {
    set({ search: value });
  },
  selectIncident(incident) {
    set({ selectedIncident: incident });
  },
  setIncidents(incidents: IncidentDto[]) {
    set({ incidents });
  },
}));
