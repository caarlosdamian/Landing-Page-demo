import styled, { css } from "styled-components";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Price from "./components/Price/Price";
import Service from "./components/Seervice/Service";
import Contact from "./components/Contact/Contact";
import {mobile} from './responsive'

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
  clip-path: polygon(0% 0%, 50% 0%, 25% 100%, 0% 100%);
  background-color: pink;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 25% 0%, 25% 100%, 0% 100%);
  background-color: #f88497;
  ${mobile({ display:"none" })}
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 100% 100%);

  background-color: crimson;
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
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
