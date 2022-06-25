import styled from 'styled-components';

export const GalleryContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  // @media screen and (max-width: 768px) {
  //   height: 1100px;
  // }

  // @media screen and (max-width: 480px) {
  //   height: 1300px;
  // }
`;

export const GalleryWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 1500px;
  align-items: center;
  grid-gap: 16px;
  padding: 0 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const GalleryCard = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#282828' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  max-width: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const GalleryH1 = styled.h1`
  font-size: 2.5rem;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  margin-bottom: 64px;
  align-text: center

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
