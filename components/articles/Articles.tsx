import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ArticleModel } from '../../data/articles';
import Article from '../article/Article';

const Container = styled.div`
  margin-top: 200px;
  text-align: center;
`;

interface ArticlesProps {
  data: ArticleModel[];
}

export const Articles: FC<ArticlesProps> = ({ data }) => {
  return <Container>
    {data.map(article => <Article key={article.id} data={article}/>)}
  </Container>;
};
