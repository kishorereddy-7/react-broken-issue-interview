/* ─── CloseIcon.tsx ──────────────────────────────────────────────────────── */

interface CloseIconProps {
  size?: number;
}

/**
 * Lightweight inline SVG X icon.
 * aria-hidden — the parent button carries the accessible label.
 */
export function CloseIcon({ size = 14 }: CloseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
