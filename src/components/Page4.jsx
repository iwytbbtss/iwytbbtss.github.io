import { useEffect, useState } from "react";
import styled from "styled-components"

export default function Page4({ page }) {
    const [transX, setTransX] = useState(500);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (page === 3) {
            setTransX(50);
            setOpacity(1);
        }
        else {
            setTransX(500);
            setOpacity(0);
        }
    }, [page])

    return (<Page>
        <LineBox>
            <h1>Introduce.</h1>
            <p>여기까지 페이지를 넘겨주셔서 감사합니다. 저는 이런 사람입니다.</p>
            <RightLine transX={transX} opacity={opacity}>- 새로운 기술을 배우고 적용해보는 것을 두려워하지 않습니다. Frontend 개발자로서 React와 Vue.js는 물론 카카오맵 API, Firebase, 웹 크롤링, TypeScript, CI/CD 등 새로운 기술을 계속 배우려고 노력했고 실제 프로젝트에 적용시킨 경험이 있습니다.</RightLine>
            <LeftLine transX={transX} opacity={opacity}>- 동기생들과 팀 프로젝트에서 주로 팀장을 맡았습니다. 팀원들이 적극적으로 커뮤니케이션에 참여할 수 있도록 노력했고 역량에 맞는 역할 분배, 구성원들의 코드 리뷰를 통해 주어진 기간안에 두 개의 프로젝트를 완성한 경험이 있습니다.</LeftLine>
            <RightLine transX={transX} opacity={opacity}>- 반복되는 일을 줄이고 코드의 가독성, 재사용성을 높이는 것을 좋아합니다. 자주 사용하는 컴포넌트들(사이드바, 차트, 모달창, 이미지카드 등)을 재사용 가능한 컴포넌트로 보유하고 있으며 개발 과정 중에도 보일러 플레이트 코드를 줄이기 위한 노력을 하고 있습니다.</RightLine>
            <LeftLine transX={transX} opacity={opacity}>- 디버깅과 성능을 개선하는 일에 관심이 많습니다. 어떠한 사용자의 입력에도 비정상적인 작동을 하지 않도록 예상 가능한 모든 예외처리를 하기 위해 노력하며 원활한 사용자 경험을 만들기 위해 무거운 라이브러리(carousel, fullpage, cheerio)를 버리고 필요한 기능을 직접 만들어 사용한 경험이 있으며, 지속적인 CS 공부와 알고리즘 공부를 병행하고 있습니다.</LeftLine>
        </LineBox>
    </Page>)
}

const Page = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const LineBox = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 24px;
    transform: translate(-50%, -50%);
    h1 {
        color: #e98203;
    }
    p {
        font-size: 18px;
        font-weight: 500;
    }
`

const LeftLine = styled.div`
    width: 600px;
    height: auto;
    margin: auto;
    padding: 15px;
    margin: 20px;
    opacity: ${props => props.opacity};
    transform: translateX(-${props => props.transX}px);
    transition-duration: 1s;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
`;

const RightLine = styled.div`
    width: 600px;
    height: auto;
    margin: auto;
    padding: 15px;
    margin: 20px;
    opacity: ${props => props.opacity};
    transform: translateX(${props => props.transX}px);
    transition-duration: 1s;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
`;