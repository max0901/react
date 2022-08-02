import styled from "styled-components";

const Foot = () => {
  return (
    <footer>
      <div id="footer_wrapper">
        <div class="txt">
          <p>
            SeongYong Kim Group
            <br />
            (우) 00000 서울시 용산구 이태원 어딘가 찾아보세요
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            010.1234.1234 korpg95274@gmail.com
            <br />
            <br />
            Copyright 2022. KSY©, Ltd. All rights reserved.
          </p>
        </div>
        <div class="right">
          <ul>
            <Li>
              GO ! <span> KSY SNS </span>
            </Li>
            <li class="insta">
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li class="youtube">
              <i class="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Foot;

const Li = styled.li`
  padding-right: 20px;
`;
