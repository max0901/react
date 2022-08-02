import Foot from "../components/public/foot";
import Header from "../components/public/header";

const Login = () => {
  return (
    <>
      <Header />
      <section class="loginSign_form_box">
        {/* <!-- loginForm--> */}
        <from class="loginSign_form">
          {/* <!-- loginTapmlate --> */}
          <div id="login_tamplate">
            <p class="loginSign_logo">myBlog</p>
            <p>
              이메일
              <input type="text" placeholder="이메일을 입력해주세요" />
            </p>
            <p>
              비밀번호
              <input type="password" placeholder="비밀번호를 입력해주세요" />
            </p>
            <div class="loginSign_button_box">
              <button id="login_button">이메일로 로그인</button>
            </div>
          </div>
          {/* <!-- buttonGroup--> */}
          <div id="login_button_group">
            {/* <!-- naver --> */}
            <div class="loginSign_button_box">
              <button id="login_naver_button">네이버로 로그인</button>
            </div>
            {/* <!-- kakao --> */}
            <div class="loginSign_button_box">
              ㄴ<button id="login_kakao_button">카카오로 로그인</button>
            </div>
            {/* <!-- apple --> */}
            <div class="loginSign_button_box">
              <button id="login_apple_button">Apple로 로그인</button>
            </div>
          </div>
        </from>
      </section>
      <Foot />
    </>
  );
};
export default Login;
