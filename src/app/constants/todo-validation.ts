export const MIN_TODO_TEXT_LENGTH = 3;

export const todoValidation = {
  text: {
    required: 'Todo text is required',
    minlength: `Todo text should be at least ${MIN_TODO_TEXT_LENGTH} symbols`,
  },
  status: {
    required: 'Todo status should be defined',
  },
  severity: {
    required: 'Todo severity should be defined',
  },
  deadline: {
    required: 'Please choose todo deadline',
  },
};
