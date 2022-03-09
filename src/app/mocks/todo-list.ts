import { Todo } from '~types';

export const TODO_LIST: Todo[] = [
  {
    id: 'j2hjkfd45sklm',
    text: 'Evaluate the addition and deletion of user IDs.',
    status: 'pending',
    severity: 'minor',
    deadline: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 'j2hjkfd24sklm',
    text: 'Identify the implementation team.',
    status: 'in progress',
    severity: 'critical',
    deadline: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 'j2hjkfd84sklm',
    text: 'Batch schedule download/process.',
    status: 'completed',
    severity: 'normal',
    deadline: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 'j2hjknd44sklm',
    text: 'Define users and workflow',
    status: 'cancelled',
    severity: 'minor',
    deadline: new Date().toLocaleDateString('en-CA'),
  },
];
