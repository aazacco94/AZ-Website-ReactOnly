import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

const HeroSection = props => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id={props.id}>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={props.videolink} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>{props.header}</HeroH1>
          <HeroP>
            {props.desc1}
          </HeroP>
          <HeroP>
            {props.desc2}
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to={props.buttonLink}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              primary='true'
              dark='true'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {props.buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
