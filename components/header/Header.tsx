import React, { FC } from 'react';
import { Title } from '../title/Title';
import { faLinkedinIn, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from '@emotion/styled';
import { IconLink } from '../iconLink/IconLink';

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: linear-gradient(rgba(35, 46, 49, 0.64), rgba(50, 77, 82, 0.64)), url('/fondo.jpeg');
  background-position: center;
  background-size: cover;
  color: #FFF;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
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

const Img = styled.img`
  width: 30%;
`;

export const Header: FC = () => {
  return <Container>
    <Img src="/perfil.png" alt="avatar"/>
    <Title>Yodra López</Title>
    <SocialMedia>
      <IconLink src={'https://www.twitter.com/yodralopez'} icon={faTwitter} target="_blank"/>
      <IconLink src={'https://www.linkedin.com/in/yodralopez'} icon={faLinkedinIn} target="_blank"/>
      <IconLink src={'https://www.twitch.tv/codingiscaring'} icon={faTwitch} target="_blank"/>
      <IconLink src={'mailto:yodralopez@gmail.com'} icon={faEnvelope}/>
    </SocialMedia>
  </Container>;
};
