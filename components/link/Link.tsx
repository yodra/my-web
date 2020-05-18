import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';
import styled from '@emotion/styled';

const A = styled.a`
  margin: 15px;
`;

const Img = styled.img`
  width: 35%;
`;

interface Props {
  data: ArticleModel;
}

export const Link: FC<Props> = ({ data: { name, src, image } }) => {
  return <A href={src} target="_blank">
    <Img src={image} alt={name}/>
  </A>;
};
