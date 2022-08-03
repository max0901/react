const initialState = [
  {
    id: 1,
    email: "maxsdf@naver.com",
    date: "2022-10-21",
    content: "asdfsdf",
  },
  {
    id: 2,
    email: "maxsdf@naver.com",
    date: "2022-10-22",
    content: "asdfsdf",
  },
  {
    id: 3,
    email: "maxsdf@naver.com",
    date: "2022-10-29",
    content: "asdfsdf",
  },
  {
    id: 4,
    email: "maxsdf@naver.com",
    date: "2022-10-23",
    content: "asdfsdf",
  },
];
export const ADD = "ADD";
export const REMOVE = "REMOVE";
const toy = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          email: action.email,
          date: action.date,
          content: action.content,
        },
      ];
    case REMOVE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
export default toy;
