import { useState } from "react";
const State = ({ onClickEvent, stateId }) => {
  const [tName, setTname] = useState("");
  const [mName, setMname] = useState("");
  const onChangeInputT = (e) => {
    setTname(e.target.value);
  };
  const onChangeInputM = (e) => {
    setMname(e.target.value);
  };
  const onAddStateHandler = () => {
    onClickEvent(stateId + 1, tName, mName);
  };
  return (
    <>
      <input
        type="text"
        placeholder="제목입력"
        value={tName}
        onChange={onChangeInputT}
      />
      <input
        type="text"
        placeholder="내용입력"
        value={mName}
        onChange={onChangeInputM}
      />
      <button onClick={onAddStateHandler}>추가</button>
      <button>초기화</button>
    </>
  );
};
export default State;
