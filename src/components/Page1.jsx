import { useEffect, useState } from "react";
import styled from "styled-components"

export default function Page1({ page }) {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (page === 0) {
            setOpacity(1);
        }
        else {
            setOpacity(0);
        }
    }, [page]);

    return (<Page>
        <Title>
            <Typing>
                π¨βπ»μ μ νλ‘ νΈμλ κ°λ°μ, μκΈ°κ°λ°νλ κ°λ°μ μ°μ¬μ€μλλ€.
            </Typing>
        </Title>

        <Profile opacity={opacity}>
            <img src="https://user-images.githubusercontent.com/104556563/179393073-aa6bfbb2-1abb-455a-b588-f2f2b62cf035.jpg" alt="" width={160} height={160} />
            <Contact>Contact.
                <div>Email - <strong>iwytbbtss00@naver.com</strong></div>
                <div>Phone - <strong>010-9139-9780<Blur>π</Blur></strong></div>
                <div>GitHub - <Link href="https://github.com/iwytbbtss" target="_blank" rel="noreferrer">https://github.com/iwytbbtss</Link></div>
            </Contact>
        </Profile>
        <Stack opacity={opacity}>
            <h3>πλ³΄μ κΈ°μ (κ΄μ¬λΆμΌ)</h3>
            <Box>
                <div>
                    <h4>-FrontEnd</h4>
                    <p>React, Vue.js, TypeScript, JavaScript(ES6), HTML5, CSS3</p>
                    <p>(SSR, SEO, React Native, SCSS)</p>
                </div>
                <div>
                    <h4>-BackEnd</h4>
                    <p>Node.js, Express</p>
                    <p>(Web crawling, REST API, Graph QL, Python)</p>
                </div>
                <div>
                    <h4>-etc</h4>
                    <p>Git, Github, Firebase, Webpack, C</p>
                    <p>(ν¨μν νλ‘κ·Έλλ°, ν΄λ¦°μ½λ, μ μμΌ λ°©λ²λ‘ )</p>
                </div>
            </Box>
        </Stack>
    </Page>)
}

const Page = styled.div`
    width: 100%;
    height: 100vh;
`;

const Title = styled.div`
    width: 100%;
    height: auto;
    padding-top: 100px;
    display: grid;
    place-items: center;
`;

const Typing = styled.div`
    width: 44ch;
    animation: typing 2s steps(44), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2.5px solid;
    font-size: 30px;
    @keyframes typing {
        from {
            width: 0;
        }
    }
    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
`;

const Profile = styled.div`
    width: max-content;
    height: max-content;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    opacity: ${props => props.opacity};
    transition: all 1s ease;
    transition-delay: 0.5s;
`;

const Contact = styled.div`
    font-size: 25px;
    color: #e98203;
    font-weight: 700;
    text-align: left;
    line-height: 30px;
    padding: 20px;
    div {
        font-size: 16px;
        color: black;
        font-weight: 400;
    }
    div > strong {
        position: relative;
    }
`;

const Blur = styled.div`
    width: 110%;
    height: 100%;
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    backdrop-filter: blur(3px);
    text-align: center;
    line-height: 20px;
    &:hover {
        backdrop-filter: none;
        font-size: 0;
    }
`;

const Link = styled.a`
    color: black;
    &:visited {
        color: black;
    }
`;

const Stack = styled.div`
    width: 600px;
    height: auto;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    margin-top: 30px;
    padding: 10px 20px 20px 20px;
    opacity: ${props => props.opacity};
    transition: all 1s ease;
    transition-delay: 0.8s;
    h3 {
        color: #e98203;
        font-weight: 700;
    }
    @media screen and (max-height: 800px) {
        width: max-content;
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
        width: 400px;
        height: 130px;
    }
`