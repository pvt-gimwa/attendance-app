import styled, { keyframes } from "styled-components"
import { device } from "./common/breakpoint"
import Image from "next/legacy/image"
import { Theme } from "@/types"

interface Props {
    date: string, 
    percent: string, 
    theme: Theme
}
const SliderCard = ({date, percent, theme}: Props) => {
    return(
        <Card theme={theme}>
            <Date>{date}</Date>
            <Percent>{percent}</Percent>
            <Background theme={theme}>
                <StyledImage
                 src={`/assets/images/card/bg_${theme}.png`}
                 layout="fill"
                 objectFit="contain"
                 alt={""}
                 theme={theme}
                />
            </Background>
        </Card>
    )
}

export default SliderCard


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Background = styled.div`
 position: absolute;
 width: 100%;
 height: 100%;
 top: 0;
 right: ${props => props.theme === "blue" ? "calc(-50% + 240px)" 
  : props.theme === "yellow" ? "calc(-50% + 210px)"
  : props.theme === "red" ? "calc(-50% + 280px)"
  : null};
 z-index: 0;
 @media ${device.mobile} {
    right: ${props => props.theme === "blue" ? "calc(-50% + 140px)" 
     : props.theme === "yellow" ? "calc(-50% + 150px)"
     : props.theme === "red" ? "0"
     : null};
 }
 @media (max-width: 340px){
    right: ${props => props.theme === "blue" ? "0" 
     : props.theme === "yellow" ? "0"
     : props.theme === "red" ? "0"
     : null};    
 }
 animation: ${fadeIn} 0.3s ease-in-out;
`
const StyledImage = styled(Image)`
 pointer-events: none;
 user-select: none;
 transform: ${props => props.theme === "blue" ? "scale(1.1) translate3d(6%,5%,0)" 
  : props.theme === "yellow" ? "scale(1.1) translate3d(6%,5%,0)"
  : props.theme === "red" ? "scale(1.1) translate3d(6%,5%,0)"
  : null};
 @media ${device.mobile} {
    transform: ${props => props.theme === "blue" ? "scale(1) translate3d(0,0,0)" 
     : props.theme === "yellow" ? "scale(1) translate3d(0,40px,0)"
     : props.theme === "red" ? "scale(1) translate3d(10px,0,0)"
     : null};
 }
`

const Card = styled.div<{theme: string}>`
 width: 100%;
 height: 100%;
 position: relative;
 border-radius: 48px;
 overflow: hidden;
 cursor: pointer;
 background: ${({ theme }) => (
    theme === "blue" ? "#0BC5EA" 
     : theme === "yellow" ? "#ECC94B"
     : theme === "red" ? "#F56565" 
     : "#CCC")};
 color: ${({ theme }) => (
    theme === "blue" ? "#065666"
     : theme === "yellow" ? "#5F370E" 
     : theme === "red" ? "#63171B" 
     : "#333")};    
`
const Date = styled.p`
 color: inherit;
 font-size: 64px;
 font-weight: 900;
 line-height: 1;
 position: absolute;
 top: 43px;
 left: 62px;
 z-index: 1;
 pointer-events: none;
 user-select: none;
 @media ${device.tablet} {
  font-size: 6vw;
 }
 @media ${device.mobile} {
  font-size: 32px;
  top: 59px;
  left: 24px;
 }
 @media (max-width: 340px){
    font-size: 8.3vw;
 }
`
const Percent = styled.p`
 color: inherit;
 font-size: 160px;
 font-weight: 900;
 line-height: 1;
 position: absolute;
 bottom: 43px;
 left: 62px;
 z-index: 1;
 pointer-events: none;
 user-select: none;
 @media ${device.tablet} {
  font-size: 15vw;
 }
 @media ${device.mobile} {
  font-size: 96px;
  bottom: 25px;
  left: 24px;
 }
 @media (max-width: 340px){
    font-size: 24.5vw;
 }

`
