import React, { useEffect, useState } from "react";

// icon
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";

// style
import styled from "styled-components";

const images = [
  "https://images.pexels.com/photos/551578/pexels-photo-551578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/305535/pexels-photo-305535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3511104/pexels-photo-3511104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const HeroSlider = () => {
  const [url, setUrl] = useState(0);
  const right = () => {
    setUrl(() => (url >= images.length - 1 ? 0 : url + 1));
  };
  const left = () => {
    setUrl(() => (url < 1 ? images.length - 1 : url - 1));
    clearInterval(callRight);
  };
  const callRight = setInterval(() => {
    right();
    clearInterval(callRight);
  }, 5000);
  return (
    <HeroSliderContainer>
      <Slider>
        <Slide className="image" src={images[url]} />
        <Caption>Caption</Caption>
      </Slider>
      <ActionButton left id="left" onClick={left}>
        <BsArrowLeftCircle />
      </ActionButton>
      <ActionButton right id="right" onClick={right}>
        <BsArrowRightCircle />
      </ActionButton>
      <ActionButtons>
        <BottomActionButton bottom>
          <GiPlainCircle
            style={{ color: url === 0 ? "white" : "transparent" }}
          />
        </BottomActionButton>
        <BottomActionButton bottom>
          <GiPlainCircle
            style={{ color: url === 1 ? "white" : "transparent" }}
          />
        </BottomActionButton>
        <BottomActionButton bottom>
          <GiPlainCircle
            style={{ color: url === 2 ? "white" : "transparent" }}
          />
        </BottomActionButton>
        <BottomActionButton bottom>
          <GiPlainCircle
            style={{ color: url === 3 ? "white" : "transparent" }}
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
