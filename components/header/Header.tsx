import React, { FC } from 'react';
import { Title } from '../title/Title';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from '@emotion/styled';
import { IconLink } from '../iconLink/IconLink';

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  //background-image: linear-gradient(rgba(76,129,139,0.64), rgba(76,129,139,0.64)), url('/photo-min.jpg');
  background-image: linear-gradient(rgba(132,79,22,0.55), rgba(132,79,22,0.55)), url('/photo-min.jpg');
  background-position: center;
  background-size: cover;
  color: #FFF;
  text-shadow: 0 0 4px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (width: 768px) {
    width: 40vw;
  }
  @media (max-width: 425px) {
    width: 100vw;
  }

`;

const SocialMedia = styled.div`
  font-size: 35px;
`;

export const Header: FC = () => {
  return <Container>
    <Title>Yodra López</Title>
    <SocialMedia>
      <IconLink src={'https://www.twitter.com/yodralopez'} icon={faTwitter} target="_blank"/>
      <IconLink src={'https://www.linkedin.com/in/yodralopez'} icon={faLinkedinIn} target="_blank"/>
      <IconLink src={'mailto:yodralopez@gmail.com'} icon={faEnvelope}/>
    </SocialMedia>
  </Container>;
};
