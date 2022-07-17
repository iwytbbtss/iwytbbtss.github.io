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
            <Github link={project.github}></Github>
            <Title href={project.url} target="_blank">{project.title}
                <p>🔖직접 보러가기🔗</p>
            </Title>
            {id === 0 && <Stack>
                <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React" />
                <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white" alt="Redux"/>
                <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styledcomponents&logoColor=white" alt="styled-component" />
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript"/>
                <img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=Heroku&logoColor=white" alt="Heroku" />
                <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white" alt="Firebase" />
                <img src="https://img.shields.io/badge/GitHubActions-2088FF?style=flat&logo=GitHubActions&logoColor=white" alt="GitHubActions" />
            </Stack>
            }
            {id === 1 && <Stack>
                <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white" alt="Vue.js" />
                <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=Swiper&logoColor=white" alt="Swiper" />
                <img src="https://img.shields.io/badge/KakaoMaps SDK-FFCD00?style=flat&logo=GoogleMaps&logoColor=white" alt="KakaoMaps SDK" />
                <img src="https://img.shields.io/badge/Firebase-white?style=flat&logo=Firebase&logoColor=FFCA28" alt="Firebase" />
                <img src="https://img.shields.io/badge/GitHubActions-2088FF?style=flat&logo=GitHubActions&logoColor=white" alt="GitHubActions" />
                <img src="https://img.shields.io/badge/FontAwesome-528DD7?style=flat&logo=FontAwesome&logoColor=white" alt="FontAwesome" />
            </Stack>
            }
            {id === 2 && <Stack>
                <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white" alt="Vue.js" />
                <img src="https://img.shields.io/badge/FontAwesome-528DD7?style=flat&logo=FontAwesome&logoColor=white" alt="FontAwesome" />
                <img src="https://img.shields.io/badge/GitHubPages-222222?style=flat&logo=GitHubPages&logoColor=white" alt="GitHubPages" />
            </Stack>
            }
            {project.detail.map((item, i) => <Detail key={i}>
                <img src={item.img} alt="" />
                <div>{item.text}</div>
            </Detail>)}

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
    color: black;
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
    width: 200px;
    height: auto;
    font-size: 35px;
    font-weight: 900;
    margin: auto;
    padding-top: 30px;
    display: block;
    color: black;
    text-decoration: none;
    cursor: pointer;
    &:visited {
        color: black;
    }
    &:hover {
        color: #e98203;
        p {
            color: black;
            text-decoration: underline;
        }
    }
    p {
        font-size: 16px;
        margin: 0;
    }
`;

const Stack = styled.div`
    padding-top: 10px;
    &>img {
        margin: 0 3px;
    }
`;

const Detail = styled.div`
    width: 90%;
    height: max-content;
    margin: auto;
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