import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

const Link = styled.a`
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

interface Props {
  src: string;
  icon: IconDefinition;
  target?: string;
}

export const IconLink: FC<Props> = ({ src, icon, target, children }) => {
  return <Link href={src} target={target}>
    <FontAwesomeIcon icon={icon}/>
    {children}
  </Link>;
};
