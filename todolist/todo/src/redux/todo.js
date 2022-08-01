const initialState = [
  {
    id: 1,
    title: "1장",
    main: "시작이다",
  },
  {
    id: 2,
    title: "2장",
    main: "중간이다",
  },
];

export const INSERT = "INSERT";
export const DELETE = "DELETE";
const todo = (state = initialState, action) => {
  switch (action.type) {
    case INSERT:
      return [
        ...state,
        { id: action.id, title: action.title, main: action.main },
      ];
    case DELETE:
      return state.filter((v) => v.id !== action.id);
    default:
      return state;
  }
};
export default todo;
