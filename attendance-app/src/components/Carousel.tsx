import styled, { ThemeContext } from "styled-components"
import Container from "./common/Container"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import SliderCard from "./Card";
import { device } from "./common/breakpoint";
import LazyLoad from 'react-lazyload';
import { Theme } from "@/types";
import { useContext, useEffect } from "react";
import { carouselData } from "@/lib/data";

const Carousel = () =>{
    const data = carouselData

    const { theme, setTheme } = useContext(ThemeContext);

    const handleSlideChange = (swiper: any) => {
      const currentIndex = swiper.realIndex;
      const currentSlide = swiper.slides[currentIndex];
      const theme = currentSlide.dataset.theme;
      setTheme({ ...theme, color: theme })
    };
  
      
    return(
        <Container>
            <LazyLoad once>
                <StyledSwiper
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={"4%"}
                    slideToClickedSlide={true}
                    className="attendanceSlider"
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            spaceBetween: "4%",
                        },
                    }}                
                >
                    {data.map((item,index) => (
                        <StyledSwiperSlide
                            key={index}
                            data-theme={item.theme}
                        >
                            <SliderCard
                                date={item.date}
                                percent={item.percent}
                                theme={item.theme as Theme}
                            />
                        </StyledSwiperSlide>                
                    ))}

                </StyledSwiper>
            </LazyLoad>
        </Container>
    )
}

export default Carousel

const StyledSwiperSlide = styled(SwiperSlide)`
 width: 50%;
 height: 480px;
 border-radius: 48px;
 /* box-shadow: ${props => props.theme === "blue" ? "0px 4px 60px rgba(7, 127, 151, 0.5)" 
 : props.theme === "yellow" ? "0px 4px 60px rgba(250, 240, 137, 1)"
 : props.theme === "red" ? "0px 4px 60px rgba(254, 178, 178, 1)"
 : null}; */
 @media ${device.tablet} {
    width: 80%;
 }
 @media ${device.mobile} {
    width: 84%;
 }
 @media (max-width: 340px){
    height: 190vw;
 }

`
const StyledSwiper = styled(Swiper)`
 overflow: visible;
 padding: 80px 0;
`
