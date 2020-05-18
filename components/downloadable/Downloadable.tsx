import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';
import styled from '@emotion/styled';

const Link = styled.a`
  //text-shadow: 0 0 4px rgba(0,0,0,0.5); TODO probar a ponerlo en el icono, si no quitarlo del nombre tb
  //color: inherit;
  margin: 15px;
`;

const Img = styled.img`
  //width: 35%;
  width: 20%;
`;

interface Props {
  data: ArticleModel;
}

export const Downloadable: FC<Props> = ({ data: { name, src, image, filename } }) => {
  return <Link href={src} download={name}>
    <Img src={image} alt={name}/>
  </Link>;
};
