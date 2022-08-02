import Foot from "../components/public/foot";
import Header from "../components/public/header";

const Join = () => {
  return (
    <>
      <Header />
      <section class="loginSign_form_box">
        <form class="loginSign_form">
          <p>
            이메일
            <input type="text" placeholder=".com" />
          </p>
          <p>
            비밀번호
            <input type="password" placeholder="대소문자 특수문자 8자리 이상" />
          </p>
          <p>
            비밀번호 확인
            <input
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </p>
          <p>
            핸드폰 번호
            <input type="text" placeholder="010-0000-0000" />
          </p>
          <div class="loginSign_button_box">
            <button id="sign_hp_authButton" class="off" disabled>
              인증하기
            </button>
            {/* <!-- signButton --> */}
          </div>
          <div>
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </div>
          <div class="loginSign_button_box">
            <button>회원가입</button>
            {/* <!-- signButton --> */}
          </div>
        </form>
      </section>
      <Foot />
    </>
  );
};
export default Join;
