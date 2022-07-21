const Header = (props) => {
  console.log("props", props);
  return (
    <header>
      <h1>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
};
export default Header;
