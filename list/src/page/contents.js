import Tbody from "../componenets/tbody";

import { useSelector } from "react-redux";
import AddForm from "./addForm";
const Contents = () => {
  const state = useSelector((state) => state.list);

  return (
    <>
      <contents>
        <div id="content_inner">
          <div id="inner">
            <div id="choice">
              <h1 id="title">채용공고</h1>
              <input type="text" />
              <select name="" id="selec">
                <option value="new">신입/경력</option>
                <option value="old">경력</option>
              </select>
            </div>
            <table>
              <thead>
                <th>제목</th>
                <th>채용구분</th>
                <th>기간</th>
              </thead>
              {state.map((v) => (
                <Tbody key={v.id} state={v} />
              ))}
            </table>
            <div id="prev_next">
              <p>
                <a href="">맨앞</a>
              </p>
              <p>
                <a href="">prev</a>
              </p>
              <p>
                <a href="">1</a>
              </p>
              <p>
                <a href="">next</a>
              </p>
              <p>
                <a href="">맨뒤</a>
              </p>
            </div>
            <a href="/add">
              <button>글쓰기</button>
            </a>
          </div>
        </div>
      </contents>
    </>
  );
};
export default Contents;
