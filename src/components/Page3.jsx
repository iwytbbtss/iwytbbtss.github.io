import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import Project from "./Project";
import { useEffect, useState } from "react";

SwiperCore.use([Navigation]);

export default function Page3({ page, visibility, setVisibility }) {
    const option = {
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: true,
        loop: true,
        centeredSlides: true,
        speed: 700
    };
    
    const [id, setId] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const openHandler = (id) => {
        setVisibility("visible");
        setId(id);
    }

    useEffect(() => {
        if (page === 2) {
            setOpacity(1);
        }
        else {
            setOpacity(0);
        }
    }, [page]);
    
    return (<Page>
        <Title>Projects.
            <p>단순한 클론코딩보다는 실제로 필요로 했던 제품을 만들어보려 노력했습니다.</p>
        </Title>
        <Projects {...option} opacity={opacity}>
            <SwiperSlide onClick={() => { openHandler(0) }}><img src="https://user-images.githubusercontent.com/104556563/178696575-6732a97e-25aa-4a3c-88f4-72be3be4e8c3.png" alt="" /></SwiperSlide>
            <SwiperSlide onClick={() => { openHandler(1) }}><img src="https://user-images.githubusercontent.com/104556563/178696874-5ed863be-0c63-473f-a1b8-6c2273ddd89f.png" alt="" /></SwiperSlide>
            <SwiperSlide onClick={() => { openHandler(2) }}><img src="https://user-images.githubusercontent.com/104556563/178697417-539b380e-f475-4c35-b8e6-6bd2a7b8b057.png" alt="" /></SwiperSlide>
        </Projects>
        <Project id={id} visibility={visibility} setVisibility={setVisibility}></Project>
    </Page>)
}

const Page = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Title = styled.div`
    position: absolute;
    top: 8vh;
    left: 0;
    color: #e98203;
    font-size: 40px;
    font-weight: 700;
    width: 100%;
    height: auto;
    p {
        font-size: 16px;
        color: black;
        font-weight: 500;
    }
`

const Projects = styled(Swiper)`
    height: 50vh;
    padding-top: 25vh;
    padding-bottom: 25vh;
    margin: 0 40px;
    opacity: ${props => props.opacity};
    transition: all 2.3s ease;
    .swiper-slide {
        width: 100%;
        height: 100%;
        background-color: orange;
        transition-duration: 0.7s;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .swiper-slide-active {
        background-color: lightblue;
        z-index: 1;
        transform: scale(1.2);
        transition-duration: 0.7s;
    }
    .swiper-button-next:after, .swiper-button-prev:after {
        color: #e98203;
        z-index: 10;
    }
`