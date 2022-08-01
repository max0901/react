const initialState = [
  {
    id: 1,
    title: "[경영관리본부] 경영관리팀 팀장 모집",
    career: "경력",
    day: "2022-05-13 ~ 2022-06-12",
  },
  {
    id: 2,
    title: "[플랫폼사업본부] 마켓팅팀 신입/경력사원 모집",
    career: "신입/경력",
    day: "2022 2022-05-12 ~ 2022-06-19",
  },
  {
    id: 3,
    title: "사장 모집",
    career: "20년 이상 경력",
    day: "2022-05-13 ~ 2022-08-22",
  },
];
export const REMOVE = "REMOVE";
export const ADD = "ADD";
const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          career: action.career,
          day: action.day,
        },
      ];
    case REMOVE:
      state.filter((v) => v.id !== action.id);
    default:
      return state;
  }
};
export default list;
