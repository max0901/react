import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState, useRef } from "react";
import { ADD } from "../redux/list";

const AddForm = () => {
  const state = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [career, setCareer] = useState("");
  const [day, setDay] = useState("");
  const TitleF = useRef(null);
  const onAdd = useCallback(() => {
    dispatch({
      type: ADD,
      id: state[state.length - 1].id + 1,
      title: title,
      career: career,
      day: day,
    });
    setTitle("");
    setCareer("");
    setDay("");
    TitleF.current.focus();
    console.log(state);
  }, [dispatch, title, career, day, state]);
  const changeT = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );
  const changeC = useCallback(
    (e) => {
      setCareer(e.target.value);
    },
    [setCareer]
  );
  const changeD = useCallback(
    (e) => {
      setDay(e.target.value);
    },
    [setDay]
  );
  return (
    <div id="content_inner">
      <div id="inner_form">
        <div id="text">
          <p>채용공고 글쓰기</p>
          <p>
            온라인 지원서 수정 및 지원 현황을 확인하세요
            <br />
            <span>
              온라인 지원서 작성시 기재했던 정보와 동일한 정보를 입력해주세요
            </span>
          </p>
        </div>
        <form action="">
          <p>제목</p>
          <input
            type="text"
            value={title}
            onChange={changeT}
            ref={TitleF}
            placeholder="제목을 입력해주세요"
          />
          <p>채용 구분</p>
          <input
            type="text"
            value={career}
            onChange={changeC}
            placeholder="채용기준을 입력해주세요"
          />
          <p>기간</p>
          <input
            type="text"
            value={day}
            onChange={changeD}
            placeholder="채용기간을 입력해주세요"
          />
        </form>

        <button onClick={onAdd}>제출</button>
      </div>
    </div>
  );
};
export default AddForm;
