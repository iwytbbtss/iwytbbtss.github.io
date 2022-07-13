import styled from "styled-components"

export default function Github({ link }) {
    return (<>
        <Box></Box>
        <Logo href={link} target="_blank">
            <img src="https://github.githubassets.com/pinned-octocat.svg" alt="Github" width={48} height={48} />
        </Logo>
    </>)
}

const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-top: 50px solid #181717;
        border-left: 50px solid #181717;
        border-bottom: 50px solid transparent;
        border-right: 50px solid transparent;
    }
`;

const Logo = styled.a`
    position: absolute;
    top: 5px;
    left: 5px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    @keyframes up {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(8px);
        }
    }
    &:hover {
        animation: up 0.5s infinite alternate;
    }
`;