import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import { Page1, Page2, Page3, Page4 } from "./components";

function App() {
  const app = useRef();
  const [page, setPage] = useState(0);
  const [transY, setTransY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const DIVIDER = 3;

  useEffect(() => {
    if (app) {
      const wheelHandler = debounce((e) => {
        e.preventDefault();
        const { deltaY } = e;
        if (deltaY > 0) {
          setPage((page) => {
            if (page < 3) {
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
      const preventWheel = (e) => {
        e.preventDefault();
      }
      app.current.addEventListener("wheel", wheelHandler);
      app.current.addEventListener("wheel", preventWheel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  useEffect(() => {
    setInnerHeight(window.innerHeight + DIVIDER);
    const resizeHandler = debounce(() => {
      setInnerHeight(window.innerHeight + DIVIDER);
    }, 50);
    window.addEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    setTransY(page * innerHeight);
  }, [page, innerHeight]);

  return (
    <Outer transY={transY} ref={app}>
      <Page1 page={page}></Page1>
      <Divider height={DIVIDER} />
      <Page2 page={page}></Page2>
      <Divider height={DIVIDER} />
      <Page3 page={page}></Page3>
      <Divider height={DIVIDER} />
      <Page4 page={page}></Page4>
    </Outer>
  );
}

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  transition: 0.8s all ease;
  transform: translateY(-${props => props.transY}px);
  ::-webkit-scrollbar {
    display: none;
  }
`

const Divider = styled.div`
  width: 100%;
  height: ${props => props.height}px;
`

export default App;
