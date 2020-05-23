import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Header } from '../components/header/Header';
import { Bio } from '../components/bio/Bio';
import { Articles } from '../components/articles/Articles';
import { articles } from '../data/articles';

const Container = styled.div`
  display: flex;
`;

const Body = styled.div`
  width: 50vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  box-sizing: border-box;
  @media (max-width: 465px) {
    padding: 1em;
  }
`;

export const Profile: FC = () => {
  return <Container>
    <Header/>
    <Body>
      <Bio/>
      <Articles data={articles}/>
    </Body>
  </Container>;
};

export default Profile;
