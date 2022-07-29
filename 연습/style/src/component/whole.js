import styled from "styled-components";
import { useRef, useState } from "react";
import State from "./state";
const Whole = () => {
  const [local, setLocal] = useState([
    {
      id: 1,
      title: "스페셜티생두셀렉션",
      main: "매 해 뉴크랍으로 생두를 선별하며, 안정적인 재료 공급을 위해 엠아이커피와 장기간 파트너쉽을 유지하고있습니다.",
    },
    {
      id: 2,
      title: "철저한 생산관리시스템",
      main: "로스팅 전에 생두에 대한 수분 밀도를 측정하여 정확한 로스팅을 구현하도록 관리하며, 로스팅 후에 색도계, 수분밀도 계측 및 커핑으로 표적추적관리를 합니다.",
    },
    {
      id: 3,
      title: "생두의 철저한 항온항습 관리",
      main: "산지에서 국내로 입고되어 운송되는 생두가 외부의영향을 최소한으로 받을 수 있도록 철저히 관리합니다.",
    },
  ]);
  const mouse = useRef(null);
  const onClickEvent = (idValue, tValue, mValue) => {
    setLocal([...local, { id: idValue, title: tValue, main: mValue }]);
  };
  const RemoveHandler = (e) => {
    const removeState = local.filter((v) => v.id !== parseInt(e.target.value));
    setLocal(removeState);
  };
  const MouseOver = () => {
    mouse.current.style.backgroundColor = "white";
    mouse.current.style.color = "black";
  };
  const MouseLeave = () => {
    mouse.current.style.backgroundColor = "black";
    mouse.current.style.color = "white";
  };
  return (
    <Sec id="wholesale">
      <div id="whol_inner">
        <Hr class="hr"></Hr>
        <Title class="title">WHOLESALE</Title>
        <Hr2 class="hr2"></Hr2>
        <WholeUl>
          {local.map((v) => (
            <li>
              <WholeImg src="./img/w1.jpg" alt="" />
              <WholeH2>{v.title}</WholeH2>
              <WP>{v.main}</WP>
              <button value={v.id} onClick={RemoveHandler}>
                삭제
              </button>
            </li>
          ))}
        </WholeUl>
        <Input
          type="button"
          value="+ READ MORE"
          id="button"
          class="button"
          onMouseOver={MouseOver}
          onMouseLeave={MouseLeave}
          ref={mouse}
        />
        <State
          onClickEvent={onClickEvent}
          stateId={local.length > 0 && local[local.length - 1].id}
        />
      </div>
    </Sec>
  );
};
export default Whole;

const Sec = styled.section`
  width: 1400px;
  margin: 50px auto;
`;

const Hr = styled.div`
  width: 600px;
  border: thin solid #777;
  position: relative;
  top: 10px;
  float: left;
`;
const Hr2 = styled.div`
  width: 600px;
  border: thin solid #777;
  position: relative;
  top: -13px;
  float: right;
`;
const Title = styled.div`
  width: 135px;
  margin: 0 30px;
  text-align: center;
  float: left;
`;
const WholeUl = styled.ul`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 100px 0 80px;
  text-align: center;
`;
const WholeImg = styled.img`
  width: 450px;
  z-index: -1;
  position: relative;
`;
const WholeH2 = styled.h2`
  padding: 30px 0;
`;
const WP = styled.p`
  line-height: 25px;
  font-size: 14px;
  color: #747474;
`;
const Input = styled.input`
  width: 150px;
  height: 40px;
  background-color: black;
  color: white;
  position: relative;
  left: 620px;
  margin-bottom: 150px;
  transition: all 0.5s;
`;
