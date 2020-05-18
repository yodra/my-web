import React, { FC } from 'react';
import { H1 } from '../h1/H1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: linear-gradient(rgba(86,144,156,0.58), rgba(86,144,156,0.58)), url('/photo.jpg');
  background-position: center;
  background-size: cover;
  color: #FFF;
  text-shadow: 0 0 4px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialMedia = styled.div`
  font-size: 35px;
`;

const A = styled.a`
  //text-shadow: 0 0 4px rgba(0,0,0,0.5); TODO probar a ponerlo en el icono, si no quitarlo del nombre tb
  color: inherit;
  margin: 8px;
`;


export const Header: FC = () => {
    return <Container>
      <H1>Yodra López</H1>
      <SocialMedia>
        <A href="https://www.twitter.com/yodralopez" target="_blank">
          <FontAwesomeIcon icon={faTwitter}/>
        </A>
        <A href="https://www.twitter.com/yodralopez" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </A>
        <A href="https://www.twitter.com/yodralopez" target="_blank">
          <FontAwesomeIcon icon={faEnvelope}/>
        </A>
      </SocialMedia>
    </Container>
};
