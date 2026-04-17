export type Severity = "critical" | "high" | "medium" | "low";

export type IncidentDto = {
  id: string;
  title: string;
  severity: Severity;
  timestamp: string; // ISO string
  description?: string;
  filteredOut?: boolean; // for debugging filtering logic
};

const SEVERITIES: Severity[] = ["critical", "high", "medium", "low"];

function randomSeverity(): Severity {
  return SEVERITIES[Math.floor(Math.random() * SEVERITIES.length)];
}

function generateIncidents(count: number): IncidentDto[] {
  const now = Date.now();
  const incidents: IncidentDto[] = [];

  for (let i = 0; i < count; i++) {
    const offset = Math.floor(Math.random() * 1000 * 60 * 60 * 72); // up to 72h
    incidents.push({
      id: String(i + 1),
      title: `Incident #${i + 1}`,
      severity: randomSeverity(),
      timestamp: new Date(now - offset).toISOString(),
      description:
        Math.random() > 0.7
          ? `Additional context for incident ${i + 1}`
          : undefined,
      filteredOut: false,
    });
  }

  // Randomise order each time
  incidents.sort(() => Math.random() - 0.5);

  return incidents;
}

export async function fetchIncidents(): Promise<IncidentDto[]> {
  // simulate network
  await new Promise((resolve) => setTimeout(resolve, 200));

  // 5% random error
  if (Math.random() < 0.05) {
    throw new Error("Random backend failure");
  }

  return generateIncidents(300);
}
