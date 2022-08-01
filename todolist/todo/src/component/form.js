import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INSERT } from "../redux/todo";

const From = () => {
  const [title, setTitle] = useState("");
  const [main, setMain] = useState("");
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const TitleF = useRef(null);
  const onadd = useCallback(() => {
    console.log(state);
    dispatch({
      type: INSERT,
      id: state[state.length - 1].id + 1,
      title: title,
      main: main,
    });
    setMain("");
    setTitle("");
    TitleF.current.focus();
  }, [dispatch, state, title, main]);
  const changeT = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );
  const changeM = useCallback(
    (e) => {
      setMain(e.target.value);
    },
    [setMain]
  );
  const Reset = useCallback(() => {
    setMain("");
    setTitle("");
    TitleF.current.focus();
  });
  return (
    <div>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={changeT}
        ref={TitleF}
      />
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        value={main}
        onChange={changeM}
      />
      <button onClick={onadd}>추가</button>
      <button onClick={Reset}>초기화</button>
    </div>
  );
};
export default From;
