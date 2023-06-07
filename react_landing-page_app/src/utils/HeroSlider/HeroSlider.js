import React, { useState } from "react";

// icon
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";

// style
import styled from "styled-components";

// constants
import { sliderContent } from "../../constants";

const HeroSlider = () => {
  const { slides } = sliderContent;
  const [state, setState] = useState(0);
  setInterval(() => {
    setState((prev) => prev++);
    state === slides.length - 1 && setState(0);
  }, 5000);
  console.log(state);
  return (
    <HeroSliderContainer>
      <Slider>
        <Slide className="image" src={slides[state].imgURL} />
        <Caption>Caption</Caption>
      </Slider>

      <ActionButtons>
        <BottomActionButton bottom>
          <GiPlainCircle
            className="border rounded-lg"
            style={{ color: state === 0 ? "white" : "transparent" }}
          />
        </BottomActionButton>
        <BottomActionButton bottom>
          <GiPlainCircle
            className="border rounded-lg"
            style={{ color: state === 1 ? "white" : "transparent" }}
          />
        </BottomActionButton>
        <BottomActionButton bottom>
          <GiPlainCircle
            className="border rounded-lg"
            style={{ color: state === 2 ? "white" : "transparent" }}
          />
        </BottomActionButton>
        <BottomActionButton bottom>
          <GiPlainCircle
            className="border rounded-lg"
            style={{ color: state === 3 ? "white" : "transparent" }}
          />
        </BottomActionButton>
      </ActionButtons>
    </HeroSliderContainer>
  );
};

export default HeroSlider;

const HeroSliderContainer = styled.section`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
`;
const Slider = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  background-image: url(props=>props.url);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ActionButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.right ? undefined : props.left ? undefined : 0)};
  left: ${(props) => (props.left ? 0 : undefined)};
  right: ${(props) => (props.right ? 0 : undefined)};
  font-size: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const ActionButtons = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const BottomActionButton = styled.button`
  background: transparent;
  border: none;
  color: transparent;
  cursor: pointer;
`;

const Caption = styled.caption`
  position: absolute;
  bottom: 10rem;
  left: 10rem;
  font-size: 3rem;
  line-height: 5rem;
  color: var(--color-gray-100);
  text-shadow: 1px 1px 1px var(--color-gray-900);
`;
