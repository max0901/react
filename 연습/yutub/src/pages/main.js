import Header from "../components/header";
import Nav from "../components/nav";
import Article from "../components/article";
import { useState } from "react";
const Main = () => {
  const topics = [
    {
      id: 1,
      title: "html",
      body: "html is....",
    },
    {
      id: 2,
      title: "css",
      body: "css is....",
    },
    {
      id: 3,
      title: "js",
      body: "js is....",
    },
  ];
  //   const _mode = useState("welcome");
  //   const mode = _mode[0];
  //   const setMode = _mode[1];
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  let content = null;
  if (mode === `welcome`) {
    content = <Article title="welcome" body="hell1ow" />;
  } else if (mode === "read") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
  }

  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("welcome");
          alert("HEader");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("read");
          setId(_id);
        }}
      />
      {content}
    </div>
  );
};
export default Main;
