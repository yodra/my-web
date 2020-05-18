import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';
import styled from '@emotion/styled';

const A = styled.a`
  margin: 15px;
`;

const Img = styled.img`
  width: 20%;
`;

interface Props {
  data: ArticleModel;
}

export const Downloadable: FC<Props> = ({ data: { name, src, image, filename } }) => {
  return <A href={src} download={filename}>
    <Img src={image} alt={name}/>
  </A>;
};
