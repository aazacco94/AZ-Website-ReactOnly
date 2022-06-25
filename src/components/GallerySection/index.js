import React from 'react';
import { Button, ButtonLink } from '../ButtonElements';
import {
  GalleryContainer,
  GalleryH1,
  GalleryWrapper,
  GalleryCard,
  Img,
  BtnWrap
} from './GalleryElements';

const Services = props => {

  return (
    <GalleryContainer lightBg={props.lightBg} id={props.id}>
      <GalleryH1 lightText={props.lightText}>{props.topLine}</GalleryH1>
      <GalleryWrapper>
        <GalleryCard lightBg={props.lightBg}>
            <Img src={props.imgLink1}/>
        </GalleryCard>
        <GalleryCard lightBg={props.lightBg}>
            <Img src={props.imgLink2}/>
        </GalleryCard>
        <GalleryCard lightBg={props.lightBg}>
            <Img src={props.imgLink3}/>
        </GalleryCard>
      </GalleryWrapper>
      <br></br>
      <BtnWrap>
        <ButtonLink
          // href={props.buttonLink}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          primary={props.primary ? 1 : 0}
          dark={props.dark ? 1 : 0}
          dark2={props.dark2 ? 1 : 0}
        >
          <a href={props.buttonLink} download>{props.buttonLabel}</a>
        </ButtonLink>
      </BtnWrap>
    </GalleryContainer>
  );
};

export default Services;
