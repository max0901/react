import styled from "styled-components";

const Product = () => {
  const Rost = [
    {
      src: "./img/list2.jpg",
      title: "콜롬비아 로스 팔로모스 치로소",
      state: "[중배전]",
      smell: "[꽃향기, 밸런스][중배전]",
      taste:
        "산뜻한 산미와 카모마일의 캐릭터가묵직한 단맛과 잘 어우러집니다. 편안하게 스페셜티커피를 즐기시는 분들에게추천드립니다.",
    },
    {
      src: "./img/list3.png",
      title: "케냐 이보니아 AA TOP ",
      state: "[중배전]",
      smell: "[꽃향기, 묵직한 화려함][중배전]",
      taste:
        " 무랑가는 나이로비 북부의 위치한 대표적인 스페셜티 산지이며, 높은 해발고도로 인해 형성된 큰 일교차와 깨끗한 자연환경으로 매년 우수한 품질의 커피를 생산합니다.",
    },
    {
      src: "./img/list1.png",
      title: "시그니쳐블렌드 A",
      state: "[중강배전++]",
      smell: "",
      taste:
        " 누구나 맛있게 먹을 수 있는 커피를 고민하다 만든 블렌딩 입니다. 고소함과 구수함이 오래 전 잊고 있던 편안함을 느끼게 해줍니다.       중강배전 포인트로 우유와도 잘 어울립니다.",
    },
    {
      src: "./img/list4.png",
      title: " [아메리카노티백] 질소포장",
      state: "시그니쳐블렌드D 6개입]",
      smell: "[Signature Espresso][중강배전+]",
      taste:
        "  로컬커피로스터스의 시그니쳐블렌드이며, 산미가 없으며 묵직한 바디감과 다크초콜릿의 단맛이 큰 특징이며 깊고 진한 여운은 많은      분들에게 사랑받는 큰 이유입니다.",
    },
    {
      src: "./img/list5.png",
      title: "[아메리카노티백] 질소포장",
      state: "시그니쳐블렌드S 6개입",
      smell: "[Special Blending][중강배전+]",
      taste:
        "스페셜티커피가 가진 딸기향이 농도 짙은 다크초콜릿 플레이버의 잘못된만남",
      taste2:
        "은은하게 있는 산미는 감칠맛과 균형감을 잡아줍니다. 누구나 부담없이 즐길 수 있도록 후미에 오는 단맛을 최대한 농도짙게       디벨롭했습니다.",
    },
    {
      src: "./img/list6.png",
      title: "코스타리카 따라주 로스두퀘스 SHB",
      state: "[중강배전]",
      smell: "[Black Project][중강배전]",
      taste:
        "스페셜티커피의 열풍이 불면서 산미에 초점이 맞춰진 현실입니다. 그동안 우리의 기억속에 잊혀진 기존 원두의 풍미를 기억하고자    블랙프로젝트를 기획했습니다. 모든 분들에게 단맛계열의 플레이버가 가득한 커피를 전해드리겠습니다.",
    },
    {
      src: "./img/list7.png",
      title: "시그니쳐블렌드 B",
      state: "[중강배전]",
      smell: "[꽃향기, 밸런스][중배전]",
      taste:
        " 로컬커피로스터스의 시그니쳐블렌드이며,&nbsp;스페셜티생두로 높은클린컵, 부드러운바디감, 고소한 아로마는 누구나 좋아할만한       커피입니다.",
    },
    {
      src: "./img/list8.png",
      title: "시그니쳐블렌드 D",
      state: "[중강배전+]",
      smell: "[Signature Espresso][중강배전+]",
      taste:
        "로컬커피로스터스의 시그니쳐블렌드이며, 산미가 없으며 묵직한 바디감과 다크초콜릿의 단맛이 큰 특징이며 깊고 진한 여운은 많은 분들에게 사랑받는 큰 이유입니다.",
    },
    {
      src: "./img/list9.png",
      title: "과테말라 안티구아 파라노마 SHB",
      state: "[중강배전+]",
      smell: "[Black Project][중강배전]",
      taste:
        " 스페셜티커피의 열풍이 불면서 산미에 초점이 맞춰진 현실입니다.그동안 우리의 기억속에 잊혀진 기존 원두의 풍미를 기억하고자      블랙프로젝트를 기획했습니다. 모든 분들에게 단맛계열의 플레이버가 가득한 커피를 전해드리겠습니다.",
    },
    {
      src: "./img/list10.png",
      title: "시그니쳐블렌드 S",
      state: "[중강배전+]",
      smell: "[Special Blending][중강배전+]",
      taste:
        " 스페셜티커피가 가진 딸기향이 농도 짙은 다크초콜릿 플레이버의 잘못된만남 은은하게 있는 산미는 감칠맛과 균형감을 잡아줍니다. 누구나   부담없이 즐길 수 있도록 후미에 오는 단맛을 최대한 농도짙게 디벨롭했습니다.",
    },
  ];
  return (
    <>
      <Sec id="product">
        <div id="pro_inner">
          <Hr class="hr"></Hr>
          <Title class="title">BEST PRODUCTS</Title>
          <Hr2 class="hr2"></Hr2>
          <Rost_list class="rost_list">
            <Rost_ul>
              {Rost.map((v) => (
                <Rost_li>
                  <FirstA>
                    <div>
                      <Rost_img src={v.src}></Rost_img>
                    </div>
                  </FirstA>
                  <SecondA>
                    <Rost_p>
                      {v.title}
                      <br />
                      {v.state}
                    </Rost_p>
                  </SecondA>
                  <Rost_p>{v.smell}</Rost_p>
                  <Rost_p>{v.taste}</Rost_p>
                  <LastA>
                    <LastAimg src="./img/cart.png"></LastAimg>
                  </LastA>
                  <Rost_p>Cart</Rost_p>
                </Rost_li>
              ))}

              {/* <li>
                <a href="">
                  <div>
                    <img src="./img/list2.jpg" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>
                    콜롬비아 로스 팔로모스 치로소
                    <br />
                    [중배전]
                  </p>
                </a>

                <p>[꽃향기, 밸런스][중배전]</p>
                <p>
                  산뜻한 산미와 카모마일의 캐릭터가 &nbsp;묵직한 단맛과 잘
                  어우러집니다. 편안하게 스페셜티커피를 즐기시는 분들에게
                  추천드립니다.
                </p>
                <a>
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list3.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>케냐 이보니아 AA TOP [중배전]</p>
                </a>
                <p>[꽃향기, 묵직한 화려함][중배전]</p>
                <p>
                  무랑가는 나이로비 북부의 위치한 대표적인 스페셜티 산지이며,
                  높은 해발고도로 인해 형성된 큰 일교차와 깨끗한 자연환경으로
                  매년 우수한 품질의 커피를 생산합니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list1.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>시그니쳐블렌드 A [중강배전++]</p>
                </a>
                <p>
                  누구나 맛있게 먹을 수 있는 커피를 고민하다 만든 블렌딩 입니다.
                  고소함과 구수함이 오래 전 잊고 있던 편안함을 느끼게 해줍니다.
                  중강배전 포인트로 우유와도 잘 어울립니다.
                </p>
                <a>
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list4.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>
                    [아메리카노티백] 질소포장
                    <br />
                    시그니쳐블렌드D 6개입
                  </p>
                  <p>[Signature Espresso][중강배전+]</p>
                </a>
                <p>
                  로컬커피로스터스의 시그니쳐블렌드이며, 산미가 없으며 묵직한
                  바디감과 다크초콜릿의 단맛이 큰 특징이며 깊고 진한 여운은 많은
                  분들에게 사랑받는 큰 이유입니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list5.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>
                    [아메리카노티백] 질소포장
                    <br />
                    시그니쳐블렌드S 6개입
                  </p>
                </a>
                <p>[Special Blending][중강배전+]</p>
                <p>
                  스페셜티커피가 가진 딸기향이 농도 짙은 다크초콜릿 플레이버의
                  &nbsp;#잘못된만남
                </p>
                <p>
                  은은하게 있는 산미는 감칠맛과 균형감을 잡아줍니다. 누구나
                  부담없이 즐길 수 있도록 후미에 오는 단맛을 최대한 농도짙게
                  디벨롭했습니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list6.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>코스타리카 따라주 로스두퀘스 SHB [중강배전]</p>
                </a>
                <p>[Black Project][중강배전]</p>
                <p>
                  스페셜티커피의 열풍이 불면서 산미에 초점이 맞춰진 현실입니다.
                  그동안 우리의 기억속에 잊혀진 기존 원두의 풍미를 기억하고자
                  블랙프로젝트를 기획했습니다. 모든 분들에게 단맛계열의
                  플레이버가 가득한 커피를 전해드리겠습니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list7.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>시그니쳐블렌드 B [중강배전]</p>
                </a>
                <p>[Signature Espresso][중강배전]</p>
                <p>
                  로컬커피로스터스의 시그니쳐블렌드이며,&nbsp;스페셜티생두로
                  높은클린컵, 부드러운바디감, 고소한 아로마는 누구나 좋아할만한
                  커피입니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list8.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>시그니쳐블렌드 D [중강배전+]</p>
                </a>
                <p>[Signature Espresso][중강배전+]</p>
                <p>
                  로컬커피로스터스의 시그니쳐블렌드이며, 산미가 없으며 묵직한
                  바디감과 다크초콜릿의 단맛이 큰 특징이며 깊고 진한 여운은 많은
                  분들에게 사랑받는 큰 이유입니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list9.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>과테말라 안티구아 파라노마 SHB [중강배전]</p>
                </a>
                <p>[Black Project][중강배전]</p>
                <p>
                  스페셜티커피의 열풍이 불면서 산미에 초점이 맞춰진 현실입니다.
                  그동안 우리의 기억속에 잊혀진 기존 원두의 풍미를 기억하고자
                  블랙프로젝트를 기획했습니다. 모든 분들에게 단맛계열의
                  플레이버가 가득한 커피를 전해드리겠습니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li>
              <li>
                <a href="">
                  <div>
                    <img src="./img/list10.png" alt="" />
                  </div>
                </a>
                <a href="">
                  <p>시그니쳐블렌드 S [중강배전+]</p>
                </a>
                <p>[Special Blending][중강배전+]</p>
                <p>
                  스페셜티커피가 가진 딸기향이 농도 짙은 다크초콜릿 플레이버의
                  &nbsp;#잘못된만남
                  <br />
                  은은하게 있는 산미는 감칠맛과 균형감을 잡아줍니다. 누구나
                  부담없이 즐길 수 있도록 후미에 오는 단맛을 최대한 농도짙게
                  디벨롭했습니다.
                </p>
                <a href="">
                  <img src="./img/cart.png" alt="" />
                  <p>Cart</p>
                </a>
              </li> */}
            </Rost_ul>
          </Rost_list>
        </div>
      </Sec>
    </>
  );
};
export default Product;

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
  top: 10px;
  float: right;
`;
const Title = styled.div`
  width: 135px;
  margin: 0 30px;
  text-align: center;
  float: left;
`;

const Rost_list = styled.div`
  overflow: hidden;
  display: inline-block;
`;
const Rost_ul = styled.ul`
  width: 1400px;
  display: flex;
  margin-top: 50px;
  overflow: hidden;
`;
const Rost_li = styled.li`
  margin-left: 20px;
  text-align: center;
  line-height: 30px;
`;
const Rost_img = styled.img`
  width: 260px;
  height: 260px;
  margin-bottom: 20px;
`;
const Rost_p = styled.p`
  font-size: 11px;
  line-height: 20px;
`;
const FirstA = styled.a`
  overflow: visible;
`;
const SecondA = styled.a`
  font-size: 12px;
  font-weight: bold;
`;
const LastA = styled.a`
  width: 80px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
`;
const LastAimg = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  top: 3px;
`;
