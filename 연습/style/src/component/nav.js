import { useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [NavLi, SetNavLi] = useState([
    { id: 1, name: "HOME" },
    { id: 2, name: "원두납품" },
    { id: 3, name: "SHOP" },
    { id: 4, name: "교육" },
    { id: 5, name: "자료실" },
  ]);
  return (
    <Header>
      <Nav2>
        <Ul>
          {NavLi.map((v) => (
            <Li>
              <a>{v.name}</a>
            </Li>
          ))}
        </Ul>
        {/* <Ul>
          <Li>
            <a href="">HOME</a>
          </Li>
          <Li>
            <a href="">원두납품</a>
            <Hide class="hide1 hide">
              <Li>
                <a href="">개요</a>
              </Li>
              <Li>
                <a href="">납품문의</a>
              </Li>
            </Hide>
          </Li>
          <Li>
            <a href="">SHOP</a>
            <Hide class="hide2 hide">
              <Li>
                <a href="">
                  싱글오리진 <img src="./img/next.png" alt="" />
                </a>
                <ul class="hide_inner1 hide_ul">
                  <Li>
                    <a href="">산미(꽃향기)</a>
                  </Li>
                  <Li>
                    <a href="">단맛(초콜릿)</a>
                  </Li>
                </ul>
              </Li>
              <Li>
                <a href="">
                  에스프레소 블렌딩 <img src="./img/next.png" alt="" />
                </a>
                <ul class="hide_inner2 hide_ul">
                  <Li>
                    <a href="">전자동 머신</a>
                  </Li>
                  <Li>
                    <a href="">반자동 머신</a>
                  </Li>
                </ul>
              </Li>
              <Li>
                <a href="">커피티백</a>
              </Li>
            </Hide>
          </Li>
          <Li class="nav_list">
            <a href="">교육</a>
          </Li>
          <Li class="nav_list">
            <a href="">자료실</a>
          </Li>
        </Ul> */}

        <div id="login">
          <ul>
            <li>
              <a href="">로그인</a>
            </li>
            <li>
              <a href="">
                <img src="./img/basket.png" alt="장바구니" />
              </a>
            </li>
          </ul>
        </div>
      </Nav2>
    </Header>
  );
};
export default Nav;

const Header = styled.header`
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.3);

  position: fixed;
`;

const Nav2 = styled.nav`
  width: 100%;
  text-align: center;
  display: inline-block;
  font-size: 15px;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  position: relative;
  top: 13px;
`;
const Li = styled.li`
  padding-right: 100px;
  width: 160px;
  display: inline-block;
`;
const Hide = styled.div`
  background-color: white;
  width: 180px;
  position: relative;
  top: 15px;
  display: none;
  transition: all 1s;
`;
