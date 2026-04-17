import React from "react";
import { useIncidentsStore } from "../../state/incidentsStore";
import { Modal } from "../../shared/components/modal/Modal";
import styles from "./style.module.css";

export const IncidentModal: React.FC = () => {
  const selectedIncident = useIncidentsStore((s) => s.selectedIncident);
  const selectIncident = useIncidentsStore((s) => s.selectIncident);

  const handleClose = () => {
    selectIncident(null);
  };

  return (
    <Modal
      isOpen={!!selectedIncident}
      onClose={handleClose}
      title={selectedIncident?.title || ""}
      description={selectedIncident?.description}
    >
      {selectedIncident && (
        <article className={styles.incidentDetails}>
          <div className={styles.incidentDetailRow}>
            <span className={styles.incidentDetailLabel}>ID:</span>
            <span className={styles.incidentDetailValue}>
              {selectedIncident.id}
            </span>
          </div>

          <div className={styles.incidentDetailRow}>
            <span className={styles.incidentDetailLabel}>Severity:</span>
            <span className={`badge badge-${selectedIncident.severity}`}>
              {selectedIncident.severity.toUpperCase()}
            </span>
          </div>

          <div className={styles.incidentDetailRow}>
            <span className={styles.incidentDetailLabel}>Timestamp:</span>
            <span className={styles.incidentDetailValue}>
              {new Date(selectedIncident.timestamp).toLocaleString()}
            </span>
          </div>

          {selectedIncident.description && (
            <div className={styles.incidentDetailRow}>
              <span className={styles.incidentDetailLabel}>Description:</span>
              <span className={styles.incidentDetailValue}>
                {selectedIncident.description}
              </span>
            </div>
          )}
        </article>
      )}
    </Modal>
  );
};
