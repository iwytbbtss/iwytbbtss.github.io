import { useEffect, useState } from "react";
import styled from "styled-components"

export default function Page2({ page }) {
    const [transX, setTransX] = useState(500);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (page === 1) {
            setTransX(0);
            setOpacity(1);
        }
        else {
            setTransX(500);
            setOpacity(0);
        }
    }, [page])

    return (<Page>
        <h3>개선/문제해결 사례</h3>
        <Container>
            <Box area="one" transX={transX} opacity={opacity} delay={0.3}>
                <p><strong>1.</strong> 웹크롤링 모바일 성능 최적화 사례</p>
                <span>문제: </span>
                <p>1&#41;모바일에서 크롤링한 데이터가 출력되지 않는 이슈</p>
                <p>2&#41; 크롤링한 데이터의 출력이 2초 이상 걸려 사용자 경험이 저하되는 이슈</p>
                <span>원인: </span>
                <p>1&#41; 모바일에서 HTTP요청으로 받아오는 HTML이 PC와 달라 발생</p>
                <p>2&#41; 기존 라이브러리(cheerio)의 유틸리티들이 무거워 성능 저하 발생</p>
                <span>해결: </span>
                <p>1&#41; HTTP request headers의 User-Agent 속성을 Windows로 설정</p>
                <p>2&#41; 단순 parsing만 해주는 대신 성능이 우월한 라이브러리(parse5) 채택, 필요한 메서드 직접 구현</p>
                <p>평가: 모바일 출력 이슈 해결, 데이터 출력 시간이 1초 미만으로 줄어듬</p>
            </Box>
            <Box area="two" transX={transX} opacity={opacity} delay={0.45}>
                <p><strong>2.</strong> CORS에러를 Proxy서버를 만들어 우회한 사례</p>
                <p>문제: 네이버 영화를 크롤링 중 CORS 에러 발생 이슈</p>
                <p>원인: 요청을 보내는 곳과 받는 곳의 Origin이 달라 발생</p>
                <p>해결: 오픈소스인 cors-anywhere를 받아 Heroku를 통해 서비스, 요청 우회</p>
                <p>평가: CORS 정책을 우회해 HTTP 요청 받기 성공</p>
                <p>비고: 상업적으로 사용히 불가능해 실제 서비스 시 백엔드를 통해 요청을 보내야 함</p>
            </Box>
            <Box area="three" transX={transX} opacity={opacity} delay={0.6}>
                <p><strong>3.</strong> Firebase CLI와 Github actions를 활용해 프로젝트의 CI/CD를 구현한 사례</p>
                <p><strong>4.</strong> Vue.js로 완성된 프로젝트 렌더링 성능 최적화 사례</p>
            </Box>
        </Container>
    </Page>)
}

const Page = styled.div`
    width: 100%;
    height: 100vh;
    h3 {
        color: #e98203;
        margin: 0;
        padding-top: 8vh;
    }
`;

const Container = styled.div`
    display: grid;
    width: fit-content;
    height: 80vh;
    margin: auto;
    margin-top: 2vh;
    grid-template-areas: "one two" "one two" "one three";
    text-align: left;
    line-height: 24px;
    strong {
        color: dimgray;
    }
`

const Box = styled.div`
    display: inline-block;
    width: 80%;
    margin: 20px auto;
    background-color: #e0e0e0;
    padding: 5px 15px;
    grid-area: ${props => props.area};
    transform: translateX(${props => props.transX}px);
    opacity: ${props => props.opacity};
    transition-duration: 0.8s;
    transition-delay: ${props => props.delay}s;
`