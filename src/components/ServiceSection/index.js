import React from 'react';
import { ButtonLink } from '../ButtonElements';
import YoutubeEmbed from '../YoutubeEmbed';
import UdemyEmbed from '../UdemyEmbed';
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
        {props.serviceH1 &&
          <ServicesCard lightBg={props.lightBg}>
            {props.embedId1 &&
              <YoutubeEmbed embedId={props.embedId1}/>
            }
            {props.embedId1 && 
              <ServicesH2 href={props.serviceGit1} lightText={props.lightText}>{props.serviceH1}</ServicesH2>
            }
            {props.embedId1 && 
              <ServicesP lightText={props.lightText}>
                {props.serviceDesc1}
              </ServicesP>
            }    
            {props.embedPhotoId1 &&
              <UdemyEmbed embedId={props.embedPhotoId1}/>
            }
            {props.embedPhotoId1 &&
              <ServicesH2 href={props.embedPhoto1} lightText={props.lightText}>{props.serviceH1}</ServicesH2>
            }
          </ServicesCard>
        }
        {props.serviceH2 &&
          <ServicesCard lightBg={props.lightBg}>
            {props.embedId2 &&
              <YoutubeEmbed embedId={props.embedId2}/>
            }
            {props.embedId2 && 
              <ServicesH2 href={props.serviceGit2} lightText={props.lightText}>{props.serviceH2}</ServicesH2>
            }
            {props.embedId2 && 
              <ServicesP lightText={props.lightText}>
                {props.serviceDesc2}
              </ServicesP>
            }    
            {props.embedPhotoId2 &&
              <UdemyEmbed embedId={props.embedPhotoId2}/>
            }
            {props.embedPhotoId2 &&
              <ServicesH2 href={props.embedPhoto2} lightText={props.lightText}>{props.serviceH2}</ServicesH2>
            }
          </ServicesCard>
        }
        {props.serviceH3 && 
          <ServicesCard lightBg={props.lightBg}>
            {props.embedId3 &&
              <YoutubeEmbed embedId={props.embedId3}/>
            }
            {props.embedId3 && 
              <ServicesH2 href={props.serviceGit3} lightText={props.lightText}>{props.serviceH3}</ServicesH2>
            }
            {props.embedId3 && 
              <ServicesP lightText={props.lightText}>
                {props.serviceDesc3}
              </ServicesP>
            }    
            {props.embedPhotoId3 &&
              <UdemyEmbed embedId={props.embedPhotoId3}/>
            }
            {props.embedPhotoId3 &&
              <ServicesH2 href={props.embedPhoto3} lightText={props.lightText}>{props.serviceH3}</ServicesH2>
            }
          </ServicesCard>
        }
        {props.serviceH4 && 
          <ServicesCard lightBg={props.lightBg}>
            {props.embedId4 &&
              <YoutubeEmbed embedId={props.embedId4}/>
            }
            {props.embedId4 && 
              <ServicesH2 href={props.serviceGit4} lightText={props.lightText}>{props.serviceH4}</ServicesH2>
            }
            {props.embedId4 && 
              <ServicesP lightText={props.lightText}>
                {props.serviceDesc4}
              </ServicesP>
            }    
            {props.embedPhotoId4 &&
              <UdemyEmbed embedId={props.embedPhotoId4}/>
            }
            {props.embedPhotoId4 &&
              <ServicesH2 href={props.embedPhoto4} lightText={props.lightText}>{props.serviceH4}</ServicesH2>
            }
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
