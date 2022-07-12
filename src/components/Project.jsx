import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export default function Project({ id, visibility, setVisibility }) {
    const closeHandler = (e) => {
        e.stopPropagation();
        setVisibility("hidden");
    }
    return (<Route visibility={visibility} onClick={closeHandler}>
        <Content onClick={(e) => { e.stopPropagation(); }}>
            <GrClose className="close_btn" onClick={closeHandler}></GrClose>

        </Content>
    </Route>)
}

const Route = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(80, 80, 80, 0.6);
    visibility: ${props => props.visibility};
    z-index: 100;
`;

const Content = styled.div`
    width: 80vw;
    height: 80vh;
    overflow-y: auto;
    background-color: white;
    position: relative;
    top: 10vh;
    left: 10vw;
    .close_btn {
        width: 23px;
        height: 23px;
        font-size: 23px;
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background-color: white;
        opacity: 0.5;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
`;