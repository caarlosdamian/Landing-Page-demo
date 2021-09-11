import styled, { css } from "styled-components";
import Feature from "./components/Feature/Feature";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 50% 100%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 50% 0%, 25% 99%, 0% 100%);
  background-color: pink;
`;
const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
    </>
  );
};

export default App;
