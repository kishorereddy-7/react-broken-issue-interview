import React, { useEffect } from "react";
import { useIncidentsStore } from "../state/incidentsStore";
import { SEVERITY_OPTIONS } from "../shared/constants/common";

export const Filters: React.FC = () => {
  const setSeverityFilter = useIncidentsStore((s) => s.setSeverityFilter);
  const setSearch = useIncidentsStore((s) => s.setSearch);
  const selectedSearch = useIncidentsStore((s) => s.search);
  const selectedSeverityFilter = useIncidentsStore((s) => s.severityFilter);

  return (
    <div className="filter">
      <div>
        Severity
        <select
          value={selectedSeverityFilter}
          onChange={(e) => setSeverityFilter(e.target.value as any)}
        >
          {SEVERITY_OPTIONS.map((option) => (
            <option key={option.value || "all"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        Search
        <input
          type="search"
          value={selectedSearch}
          placeholder="Title contains…"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
