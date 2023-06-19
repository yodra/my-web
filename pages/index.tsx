import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Header } from '../components/header/Header';
import { Bio } from '../components/bio/Bio';
import { Articles } from '../components/articles/Articles';
import { articles } from '../data/articles';

const Container = styled.div`
  display: flex;
  font-family: 'Fira Code', monospace;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Body = styled.div`
  width: 75vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 1em;
    width: 60vw;
  }
  @media (max-width: 425px) {
    width: 100vw;
  }
`;

export const Profile: FC = () => {
  return <Container>
    <Header/>
    <Body>
      <Bio/>
      <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="yodralopezh" data-color="#408592" data-emoji="🍺"  data-font="Inter" data-text="Buy me a beer" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>
      <Articles data={articles}/>
    </Body>
  </Container>;
};

export default Profile;
