/* ─── Modal.tsx ──────────────────────────────────────────────────────────── */

import { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../../interfaces/modal.interface";
import { CloseIcon } from "../../ui-library/icons/closeIcons/CloseIcon";
import styles from "./style.module.css";

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  description,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDialogElement>) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab") return;
    },
    [onClose, dialogRef],
  );

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <dialog
        ref={dialogRef}
        open
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-desc" : undefined}
        className={styles.dialog}
        onKeyDown={handleKeyDown}
      >
        <header className={styles.header}>
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>

          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
            tabIndex={0}
          >
            <CloseIcon />
          </button>
        </header>

        {description && (
          <p id="modal-desc" className={styles.description}>
            {description}
          </p>
        )}

        <section className={styles.body}>{children}</section>

        <footer className={styles.footer}>
          <button
            type="button"
            className={styles.footerCloseBtn}
            onClick={onClose}
            tabIndex={0}
          >
            Close
          </button>
        </footer>
      </dialog>
    </div>,
    document.body,
  );
}
