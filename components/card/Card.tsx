import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';
import styled from '@emotion/styled';
import { IconLink } from '../iconLink/IconLink';
import { faSlideshare } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > a {
    color: rgb(64, 133, 146);
    text-decoration: none;
  }
`;

const Resource = styled.a`
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

const Slides = styled.div`
  margin: 0;
  vertical-align: baseline;
  display: flex;
  padding: 1rem 1.5rem;
  color: rgb(64, 133, 146);
`;

interface Props {
  data: ArticleModel;
}

export const Card: FC<Props> = ({ data: { title, slidesLink, resourceLink, image } }) => {
  return <Container>
    <Resource href={resourceLink} target='_blank'>
      <Img src={image} alt={title} />
      <Title>{title}</Title>
    </Resource>
    {slidesLink &&
      <Slides>
        <IconLink src={slidesLink} icon={faSlideshare} target='_blank'>
          Slides
        </IconLink>
      </Slides>
    }
  </Container>;
};
