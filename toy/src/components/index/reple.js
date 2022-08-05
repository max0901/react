import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE } from "../../redux/toy";
const Reple = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.toy);
  const Remove = useCallback(
    (id) => {
      dispatch({
        type: REMOVE,
        id: id,
      });
    },
    [state, dispatch]
  );

  return (
    <>
      {state.map((v) => (
        <>
          {/* <!-- post --> */}
          <article class="post_desc">
            <header class="post_header">
              <div class="post_avatar">
                <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
              </div>
              <div class="post_info">
                <a href="./myblog.html">
                  <div class="post_email">{v.email}</div>
                  <div class="post_date">
                    {v.date} <span>하루 전</span>
                  </div>
                </a>
              </div>
            </header>
            <div class="post_buttonBox">
              <button>수정</button>
              <button
                class="post_del_btn"
                onClick={() => {
                  Remove(v.id);
                }}
              >
                삭제
              </button>
            </div>
            <textarea class="post_editForm"></textarea>
            <div class="post_content">{v.content}</div>
            <p class="post_more">더 보기</p>
            <div class="post_comment_header">
              <div class="post_comment_total">댓글 2개</div>
              <div class="post_comment_Btn">댓글 달기</div>
            </div>
            {/* <!-- comment --> */}
            <div div class="post_comment_box">
              <form class="post_comment_form">
                <input />
                <button>등록</button>
              </form>
              <div class="post_comment_list">
                <div class="post_comment_email">
                  <div class="post_comment_avatar">
                    <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
                  </div>
                  <div class="comment_email">korpg95274</div>
                </div>
                <div class="post_comment_content">안녕하세요</div>
                <div class="post_comment_btn">
                  <div class="post_comment_date">2022.07.21</div>
                  <button class="comment_del_btn">✖</button>
                </div>
              </div>
            </div>
          </article>
        </>
      ))}
    </>
  );
};
export default Reple;
