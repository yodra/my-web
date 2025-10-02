import React, { FC } from 'react';
import { Title } from '../title/Title';
import { faLinkedinIn, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from '@emotion/styled';
import { IconLink } from '../iconLink/IconLink';

const Container = styled.div<{ backgroundImgURL: string }>`
  width: 25vw;
  height: 100vh;
  background-image: linear-gradient(rgba(35, 46, 49, 0.64), rgba(50, 77, 82, 0.64)), url('${props => props.backgroundImgURL}');
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
  font-size: 25px;
  display: flex;
  gap: 0.5rem;
`;

const Img = styled.img`
  width: 40%;
`;

const Link = styled.a`
  color: rgb(255, 255, 255);
  text-decoration: none;
`;

interface Props {
  backgroundImgURL?: string;
}

export const Header: FC<Props> = ({ backgroundImgURL = '/fondo.jpeg' }) => {
  return <Container backgroundImgURL={backgroundImgURL}>
    <Img src="/perfil.png" alt="avatar"/>
    <Title>Yodra López</Title>
    <p>
      Software engineer <Link href="https://www.linkedin.com/company/science4tech/" target="_blank">@Science4Tech</Link> 👩‍🔬
      <br/>
      Co-founder <Link href="https://www.linkedin.com/company/adalovedev/" target="_blank">@AdaLoveDev</Link> 💜💪
      <br/>
      Co-streamer <Link href="https://www.twitch.tv/codingiscaring" target="_blank">@CodingIsCaring</Link > 👯‍♀️
    </p>
    <SocialMedia>
      <IconLink src={'https://www.twitter.com/yodralopez'} icon={faTwitter} target="_blank"/>
      <IconLink src={'https://www.linkedin.com/in/yodralopez'} icon={faLinkedinIn} target="_blank"/>
      <IconLink src={'https://www.twitch.tv/codingiscaring'} icon={faTwitch} target="_blank"/>
      <IconLink src={'mailto:yodralopez@gmail.com'} icon={faEnvelope}/>
    </SocialMedia>
  </Container>;
};
