import React from 'react';
import { ButtonLink } from '../ButtonElements';
import YoutubeEmbed from '../YoutubeEmbed';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  BtnWrap
} from './ServicesElements';

const Services = props => {

  return (
    <ServicesContainer lightBg={props.lightBg} id={props.id}>
      <ServicesH1 lightText={props.lightText}>{props.topLine}</ServicesH1>
      <ServicesWrapper>
        {props.embedId1 &&
          <ServicesCard lightBg={props.lightBg}>
            <YoutubeEmbed embedId={props.embedId1}/>
            <ServicesH2 href={props.serviceGit1} lightText={props.lightText}>{props.serviceH1}</ServicesH2>
            <ServicesP lightText={props.lightText}>
              {props.serviceDesc1}
            </ServicesP>
          </ServicesCard>
        }
        {props.embedId2 &&
          <ServicesCard lightBg={props.lightBg}>
            <YoutubeEmbed embedId={props.embedId2}/>
            <ServicesH2 href={props.serviceGit2} lightText={props.lightText}>{props.serviceH2}</ServicesH2>
            <ServicesP lightText={props.lightText}>
            {props.serviceDesc2}
            </ServicesP>
          </ServicesCard>
        }
        {props.embedId3 && 
          <ServicesCard lightBg={props.lightBg}>
            <YoutubeEmbed embedId={props.embedId3}/>
            <ServicesH2 href={props.serviceGit3} lightText={props.lightText}>{props.serviceH3}</ServicesH2>
            <ServicesP lightText={props.lightText}>
            {props.serviceDesc3}
            </ServicesP>
          </ServicesCard>
        }
        {props.embedId4 && 
          <ServicesCard lightBg={props.lightBg}>
            <YoutubeEmbed embedId={props.embedId4}/>
            <ServicesH2 href={props.serviceGit4} lightText={props.lightText}>{props.serviceH4}</ServicesH2>
            <ServicesP lightText={props.lightText}>
            {props.serviceDesc4}
            </ServicesP>
          </ServicesCard>
        }
      </ServicesWrapper>
      <br></br>
      <BtnWrap>
        <ButtonLink
          href={props.buttonLink}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          primary={props.primary ? 1 : 0}
          dark={props.dark ? 1 : 0}
          dark2={props.dark2 ? 1 : 0}
        >
          {props.buttonLabel}
        </ButtonLink>
      </BtnWrap>
    </ServicesContainer>
  );
};

export default Services;
