import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import { Page1, Page2, Page3, Page4, Pagination, Footer, Github } from "./components";
import * as THREE from 'three';
import RINGS from "vanta/dist/vanta.rings.min";

function App() {
  const background=useRef();
  const app = useRef();
  const [vantaEffect, setVantaEffect] = useState(0);
  const [page, setPage] = useState(0);
  const [transY, setTransY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [visibility, setVisibility] = useState("hidden");
  const DIVIDER = 3;
  // 페이지 넘김
  const wheelHandler = debounce((e) => {
    e.preventDefault();
    const { deltaY } = e;
    if (deltaY > 0) {
      setPage((page) => {
        if (page < 4) {
          return page + 1;
        }
        else {
          return page;
        }
      });
    }
    else if(deltaY < 0) {
      setPage((page) => {
        if (page > 0) {
          return page - 1;
        }
        else {
          return page;
        }
      });
    }
  }, 75);
  // 기본이벤트 방지
  const preventWheel = (e) => {
    e.preventDefault();
  };
  // 백그라운드 애니메이션
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(RINGS({
        el: background.current,
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);
  // 페이지넘기기
  useEffect(() => {
    const current=app.current
    if (app) {
      if (visibility === "hidden") {
        current.addEventListener("wheel", preventWheel);
        current.addEventListener("wheel", wheelHandler);
      }
    }
    return (() => {
      current.removeEventListener("wheel", preventWheel);
      current.removeEventListener("wheel", wheelHandler);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app, visibility]);

  useEffect(() => {
    setInnerHeight(window.innerHeight + DIVIDER);
    const resizeHandler = debounce(() => {
      setInnerHeight(window.innerHeight + DIVIDER);
    }, 50);
    window.addEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (page === 4) {
      setTransY(3 * innerHeight + 180);
    }
    else {
      setTransY(page * innerHeight);
    }

  }, [page, innerHeight]);

  return (
    <>
      <Background ref={background}></Background>
      <Outer transY={transY} ref={app} visibility={visibility}>
        <Page1 page={page}></Page1>
        <Divider height={DIVIDER} />
        <Page2 page={page}></Page2>
        <Divider height={DIVIDER} />
        <Page3 page={page} visibility={visibility} setVisibility={setVisibility}></Page3>
        <Divider height={DIVIDER} />
        <Page4 page={page}></Page4>
        <Footer page={page}></Footer>
      </Outer>
      <Pagination page={page} setPage={setPage} visibility={visibility}></Pagination>
      {visibility==="hidden" && <Github link={"https://github.com/iwytbbtss/iwytbbtss.github.io"}></Github>}
    </>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  transition: 0.8s all ease;
  transform: translateY(-${props => props.transY}px);
  overflow-y: ${props => props.visibility === "hidden" ? "": "hidden"};
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: ${props => props.height}px;
`;

export default App;
