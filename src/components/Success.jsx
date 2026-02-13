import logo from "/src/assets/iteration-1/logo.svg";
import styled from "styled-components";

const Image = styled.div`
  margin: 0;
  padding-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #ce2829;
  display: flex;
  flex-direction: column;
`;

export default function Success() {
  return (
    <Wrapper>
      <Image>
        <div
          style={{
            height: "70%",
            width: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={logo} alt="" />
        </div>
      </Image>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 30%)",
          color: "white",
        }}
      >
        <h1>TEBRIKLER!</h1>
        <h1>SİPARİŞİNİZ ALINDI!</h1>
      </div>
    </Wrapper>
  );
}
