import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { REMOVE } from "../../redux/toy";
import Reple from "./reple";

const Container = () => {
  return (
    <>
      <section class="post_list">
        {/* <!-- container --> */}
        <p>☀️ 오늘은, 내 친구들에게 어떤 일들이 있어났을까요?</p>
        {/* <!-- postBox --> */}
        <div class="post_box">
          {/* <!-- post --> */}
          <article class="post_desc">
            <header class="post_header">
              <div class="post_avatar">
                <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
              </div>
              <div class="post_info">
                <a href="./myblog.html">
                  <div class="post_email">korpg95274</div>
                  <div class="post_date">
                    2022.07.21 <span>하루 전</span>
                  </div>
                </a>
              </div>
            </header>
            <div class="post_buttonBox">
              <button>수정</button>
              <button class="post_del_btn">삭제</button>
            </div>
            <textarea class="post_editForm"></textarea>
            <div class="post_content">안녕하세요, 반가운 하루입니다.</div>
            <div class="post_img_box">
              <div>
                <img src="./img//김성용1.jpeg" />
              </div>
              <div class="post_images">
                +<span>1개의 사진 더보기</span>
              </div>
            </div>
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
          <Reple />
        </div>
      </section>
    </>
  );
};
export default Container;
