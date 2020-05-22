import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';
import styled from '@emotion/styled';
import { Card } from '../card/Card';

const Container = styled.div`
    position: relative;
    color: #111111;
    background-color: #f9f9f9;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));
    transition: filter .25s ease-in-out;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
`;

interface ArticleProps {
  data: ArticleModel;
}

const Article: FC<ArticleProps> = ({ data }) => {
  return <Container>
    <Card data={data}/>
  </Container>;
};

export default Article;
