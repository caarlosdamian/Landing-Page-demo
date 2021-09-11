import styled from "styled-components";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 46% 100%);
  background-color: crimson;
`;
const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <Shape />
    </Container>
  );
};

export default App;
