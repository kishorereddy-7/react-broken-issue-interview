import { describe, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { IncidentList } from "../src/components/IncidentList";
import { IncidentModal } from "../src/components/incidentModal/IncidentModal";
import { useIncidentsStore } from "../src/state/incidentsStore";
import type { IncidentDto } from "../src/api/incidents";

describe("Core incident dashboard behavior", () => {
  const selectIncidentMock = vi.fn();
  const setIncidentsMock = vi.fn();

  beforeEach(() => {
    selectIncidentMock.mockReset();
    setIncidentsMock.mockReset();

    useIncidentsStore.setState({
      incidents: null,
      selectedIncident: null,
      severityFilter: "",
      search: "",
      selectIncident: selectIncidentMock,
      setIncidents: setIncidentsMock,
    });
  });

  it("renders incident list items from store", () => {
    const incidents: IncidentDto[] = [
      {
        id: "1",
        title: "Database outage",
        severity: "critical",
        timestamp: "2024-04-17T10:00:00Z",
        filteredOut: false,
      },
      {
        id: "2",
        title: "UI bug",
        severity: "low",
        timestamp: "2024-04-17T11:00:00Z",
        filteredOut: false,
      },
    ];

    useIncidentsStore.setState({ incidents });
    render(React.createElement(IncidentList));

    expect(screen.getByText("Database outage")).toBeInTheDocument();
    expect(screen.getByText("UI bug")).toBeInTheDocument();
  });

  it("selects the full incident object when an item is clicked", () => {
    const incident: IncidentDto = {
      id: "1",
      title: "Database outage",
      severity: "critical",
      timestamp: "2024-04-17T10:00:00Z",
      filteredOut: false,
    };

    useIncidentsStore.setState({ incidents: [incident] });
    render(React.createElement(IncidentList));

    fireEvent.click(screen.getByText("Database outage"));
    expect(selectIncidentMock).toHaveBeenCalledWith(incident);
  });

  it("displays the selected incident details in the modal", () => {
    const incident: IncidentDto = {
      id: "123",
      title: "Connection failed",
      severity: "high",
      timestamp: "2024-04-17T10:30:00Z",
      description: "Connection timeout after 30s",
    };

    useIncidentsStore.setState({ selectedIncident: incident });
    render(React.createElement(IncidentModal));

    expect(screen.getByText("Connection failed")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
    const badge = screen.getByText("HIGH");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("badge");
    expect(badge).toHaveClass("badge-high");
    expect(
      screen.getAllByText(/Connection timeout after 30s/).length,
    ).toBeGreaterThan(0);
  });

  it("closes the modal when the close button is clicked", () => {
    const incident: IncidentDto = {
      id: "1",
      title: "Test Incident",
      severity: "high",
      timestamp: "2024-04-17T10:00:00Z",
      description: "Details here",
    };

    useIncidentsStore.setState({ selectedIncident: incident });
    render(React.createElement(IncidentModal));

    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));
    expect(selectIncidentMock).toHaveBeenCalledWith(null);
  });
});
