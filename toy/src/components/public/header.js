const Header = () => {
  return (
    <header>
      <div id="header_wrapper">
        <div id="header_logo">
          <a href="/">myBlog</a>
        </div>
        <div id="header_list">
          <ul>
            <li>
              <a href="/join">회원가입</a>
            </li>
            <li>
              <a href="/login">로그인</a>
            </li>
          </ul>
          <ul id="header_login_list">
            <li>
              <a href="/myblog">마이블로그</a>
            </li>
            <li>
              <a href="/chat">채팅</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
