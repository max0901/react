import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/toy";
const BlogForm = () => {
  const state = useSelector((state) => state.toy);
  const dispatch = useDispatch();
  const [write, setWrite] = useState("");
  const ChangeW = useCallback(
    (e) => {
      setWrite(e.target.value);
    },
    [write]
  );
  const AddWrite = useCallback(() => {
    dispatch({
      type: ADD,
      id: state[state.length - 1].id + 1,
      content: write,
      date: state.date,
      email: state.email,
    });
    setWrite("");
    console.log(state);
  }, [state, dispatch, write]);
  return (
    <section id="main_post_list">
      {/* <!-- container --> */}
      <p id="myblog_mine">
        ☀️ 안녕하세요, kimseongyong님? 오늘은 어떤일이 있으셨나요?
      </p>
      <p id="myblog_not_mine">
        ☀️ 안녕하세요, kimseongyong님의 블로그에 오신 것을 환영합니다
      </p>
      {/* <!-- postBox --> */}
      <div id="myblog_post_formBox">
        <textarea
          id="myblog_post_form"
          placeholder="게시글을 작성해주세요"
          onChange={ChangeW}
          value={write}
        ></textarea>
        <button id="mgblog_post_button" onClick={AddWrite}>
          등록하기
        </button>
      </div>
    </section>
  );
};
export default BlogForm;
