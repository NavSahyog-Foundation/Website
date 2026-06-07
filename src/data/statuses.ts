export interface PondStatus {
  key: string;
  label: string;
  color: string;
  /** Legend description shown after the label (lower-case, no leading dash). */
  desc: string;
}

/**
 * Jal Vriddhi pond lifecycle statuses — the single source of truth for both the
 * page legend and the ProgramDashboard map/config, so the swatch colours can't
 * drift between them.
 */
export const jalVriddhiStatuses: PondStatus[] = [
  { key: 'planned',  label: 'Planned',  color: '#d97706', desc: 'site identified with the village; work yet to begin.' },
  { key: 'dug',      label: 'Dug',      color: '#2563eb', desc: 'pond excavated; awaiting first monsoon recharge.' },
  { key: 'active',   label: 'Active',   color: '#059669', desc: 'holding water and recharging the local table.' },
  { key: 'inactive', label: 'Inactive', color: '#64748b', desc: 'currently dry or out of service.' },
];
