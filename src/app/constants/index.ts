import { TSelectOptions, TSeverityView, TStatusesView } from '~types';

export const TODO_STATUSES_VIEW: TStatusesView = {
  pending: {
    backgroundColor: 'rgba(242, 153, 74, 0.2)',
    color: '#F2994A',
  },
  inProgress: {
    backgroundColor: 'rgba(86, 204, 242, 0.2)',
    color: '#56CCF2',
  },
  completed: {
    backgroundColor: 'rgba(39, 174, 96, 0.2)',
    color: '#27AE60',
  },
  cancelled: {
    backgroundColor: 'rgba(235, 87, 87, 0.2)',
    color: '#EB5757',
  },
};

export const TODO_SEVERITY_VIEW: TSeverityView = {
  minor: {
    borderColor: '#219653',
  },
  normal: {
    borderColor: '#F2C94C',
  },
  critical: {
    borderColor: '#EB5757',
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
