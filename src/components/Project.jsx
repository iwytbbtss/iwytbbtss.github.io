import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import Github from "./Github";
import projects from "../projects.json";

export default function Project({ id, visibility, setVisibility }) {
    const project = projects.find((item) => item.id === id);
    const closeHandler = (e) => {
        e.stopPropagation();
        setVisibility("hidden");
    }

    return (<Route visibility={visibility} onClick={closeHandler}>
        <Content onClick={(e) => { e.stopPropagation(); }}>
            <GrClose className="close_btn" onClick={closeHandler}></GrClose>
            <Github></Github>
            <Title href={project.url} target="_blank">{project.title}</Title>
            <Body>
                {project.detail.map((item, i) => <Detail key={i}>
                    <img src={item.img} alt="" />
                    <div>{item.text}</div>
                </Detail>)}
            </Body>
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

const Title = styled.a`
    width: 290px;
    height: 50px;
    font-size: 35px;
    font-weight: 900;
    margin: auto;
    padding-top: 30px;
    position: relative;
    display: block;
    color: black;
    cursor: pointer;
    &::after {
        content: "🔖직접 보러가기🔗";
        font-size: 16px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        color: black;
    }
    &:visited {
        color: black;
    }
    &:hover {
        color: #e98203;
    }
`;

const Body = styled.div`
`

const Detail = styled.div`
    width: 90%;
    height: max-content;
    margin: 20px auto;
    padding: 30px 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    img {
        width: 640px;
        height: 360px;
    }
    div {
        width: auto;
        vertical-align: middle;
        /* background-color: #e0e0e0; */
        padding: 20px;
        line-height: 26px;
        word-spacing: 2px;
        margin-left: 20px;
    }
`;