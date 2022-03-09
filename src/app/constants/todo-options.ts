import { Todo, TSelectOptions, TSeverityView, TStatusesView } from '~types';
import { SEVERITY_COLORS, STATUSES_COLORS } from './common';

export const TODO_STATUSES_VIEW: TStatusesView = {
  pending: {
    backgroundColor: `rgba(${STATUSES_COLORS.PENDING}, 0.2)`,
    color: `rgb(${STATUSES_COLORS.PENDING})`,
  },
  inProgress: {
    backgroundColor: `rgba(${STATUSES_COLORS.IN_PROGRESS}, 0.2)`,
    color: `rgb(${STATUSES_COLORS.IN_PROGRESS})`,
  },
  completed: {
    backgroundColor: `rgba(${STATUSES_COLORS.COMPLETED}, 0.2)`,
    color: `rgb(${STATUSES_COLORS.COMPLETED})`,
  },
  cancelled: {
    backgroundColor: `rgba(${STATUSES_COLORS.CANCELLED}, 0.2)`,
    color: `rgb(${STATUSES_COLORS.CANCELLED})`,
  },
};

export const TODO_SEVERITY_VIEW: TSeverityView = {
  minor: {
    borderColor: SEVERITY_COLORS.MINOR,
  },
  normal: {
    borderColor: SEVERITY_COLORS.NORMAL,
  },
  critical: {
    borderColor: SEVERITY_COLORS.CRITICAL,
  },
};

export const TODO_STATUSES_OPTIONS: TSelectOptions[] = [
  {
    value: 'pending',
    label: 'Pending',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
  {
    value: 'cancelled',
    label: 'Cancelled',
  },
];

export const TODO_SEVERITY_OPTIONS: TSelectOptions[] = [
  {
    value: 'minor',
    label: 'Minor',
  },
  {
    value: 'normal',
    label: 'Normal',
  },
  {
    value: 'critical',
    label: 'Critical',
  },
];

export const EMPTY_TODO: Todo = {
  id: '',
  text: '',
  severity: 'normal',
  status: 'pending',
  deadline: '',
};
