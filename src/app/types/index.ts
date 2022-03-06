export type Todo = {
  text: string;
  status: string;
  severity: string;
  deadline: string;
  id: string;
};
export type TStatusesView = {
  pending: {
    backgroundColor: string;
    color: string;
  };
  inProgress: {
    backgroundColor: string;
    color: string;
  };
  completed: {
    backgroundColor: string;
    color: string;
  };
  cancelled: {
    backgroundColor: string;
    color: string;
  };
};

export type TSeverityView = {
  minor: {
    borderColor: string;
  };
  normal: {
    borderColor: string;
  };
  critical: {
    borderColor: string;
  };
};

export type TSelectOptions = {
  value: string;
  label: string;
};

export type TErrorMessage = {
  [key: string]: {
    [key: string]: string;
  };
};
