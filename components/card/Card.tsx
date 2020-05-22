import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';
import styled from '@emotion/styled';

const Content = styled.a`
  overflow: hidden;
  border-radius: 4px;
  vertical-align: baseline;
`;

const Img = styled.img`
  position: relative;
  max-width: 100%;
  vertical-align: middle;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 1.5rem;
  margin: 0;
  vertical-align: baseline;
`;

const Description = styled.p`
  padding: 1.5rem;
  font-size: .75rem;
  border-top: 1px solid rgba(0, 0, 0, .05);
  margin: 0;
  vertical-align: baseline;
`;

interface Props {
  data: ArticleModel;
}

export const Card: FC<Props> = ({ data: { title, description, link, image } }) => {
  return <Content href={link} target="_blank">
    <Img src={image} alt={title}/>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
  </Content>;
};
