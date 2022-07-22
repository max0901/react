import styled from "styled-components";

const Banner = () => {
  return (
    <Sec id="wholesale">
      <div id="whol_inner">
        <Hr class="hr"></Hr>
        <Title class="title">WHOLESALE</Title>
        <Hr2 class="hr2"></Hr2>
        <WholeUl>
          <li>
            <WholeImg src="./img/w1.jpg" alt="" />
            <WholeH2>스페셜티생두셀렉션</WholeH2>
            <WP>
              매 해 뉴크랍으로 생두를 선별하며, 안정적인 재료 공<br />
              급을 위해 엠아이커피와 장기간 파트너쉽을 유지하고
              <br />
              있습니다.
            </WP>
          </li>
          <li>
            <WholeImg src="./img/w2.jpg" alt="" />
            <WholeH2>생두의 철저한 항온항습 관리</WholeH2>
            <WP>
              산지에서 국내로 입고되어 운송되는 생두가 외부의
              <br />
              영향을 최소한으로 받을 수 있도록 철저히 관리합니
              <br />
              다.
            </WP>
          </li>
          <li>
            <WholeImg src="./img/w3.jpg" alt="" />
            <WholeH2>철저한 생산관리시스템</WholeH2>
            <WP>
              로스팅 전에 생두에 대한 수분 밀도를 측정하여 정확
              <br />한 로스팅을 구현하도록 관리하며, 로스팅 후에 색도
              <br />
              계, 수분밀도 계측 및 커핑으로 표적추적관리를 합니
              <br />
              다.
            </WP>
          </li>
        </WholeUl>
        <Input type="button" value="+ READ MORE" id="button" class="button" />
      </div>
    </Sec>
  );
};
export default Banner;

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
