export const reducer = function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "DELETE":
      return state - 1;
    default:
      return state;
  }
};
