import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Footer({ page }) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (page === 4) {
            setHeight(200);
        }
        else {
            setHeight(0);
        }
    }, [page])

    return (<Box height={height}>
        <p>2022.01 ~ 2022.07 [디지털컨버전스] 프로그레시브 웹앱 프론트엔드 개발 실무자 양성과정</p>
        <p>2014.03 ~ 2017.02 국립부산기계공업고등학교 정밀기계과</p>
        <br></br>
        <p>Copyright 2022 iwytbbtss Co. all rights reserved.</p>
    </Box>)
}

const Box = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    transition-duration: 0.8s;
`