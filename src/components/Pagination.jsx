import styled from "styled-components"

export default function Pagination({ page, setPage }) {
    return (<Container page={page}>
        <li onClick={()=>{setPage(0)}}>&#9679;<div>Profile</div></li>
        <li onClick={()=>{setPage(1)}}>&#9679;<div>개선/문제해결 사례</div></li>
        <li onClick={()=>{setPage(2)}}>&#9679;<div>Projects</div></li>
        <li onClick={()=>{setPage(3)}}>&#9679;<div>Introduce</div></li>
    </Container>)
}

const Container = styled.ul`
    list-style: none;
    position: absolute;
    bottom: 4%;
    right: 10px;
    width: 20px;
    height: auto;
    font-size: 18px;
    color: #e98203;
    &>li {
        opacity: 0.7;
        cursor: pointer;
        position: relative;
    }
    &>li:nth-of-type(${props => props.page + 1}) {
        opacity: 1;
        div {
            opacity: 1;
        }
    }
    &>li>div {
        position: absolute;
        top: 40%;
        right: 20px;
        width: max-content;
        color: black;
        font-size: 12px;
        opacity: 0.4;
        transition-duration: 0.5s;
        cursor: default;
        pointer-events: none;
    }
    &>li:hover>div {
        opacity: 1;
    }
`