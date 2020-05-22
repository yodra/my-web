import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ArticleModel } from '../../data/articles';
import Article from '../article/Article';

const Container = styled.div`
  opacity: 1;
  transition: opacity .5s ease-in-out;
  padding: 1.5em;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
`;

const Group = styled.div`
  columns: 3;
  column-gap: 10px;
`;

interface ArticlesProps {
  data: ArticleModel[];
}

export const Articles: FC<ArticlesProps> = ({ data }) => {
  return <Container>
    <Group>
      {data.map(article => <Article key={article.id} data={article}/>)}
    </Group>
  </Container>;
};
