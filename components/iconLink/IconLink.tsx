import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

const A = styled.a`
  //text-shadow: 0 0 4px rgba(0,0,0,0.5); TODO probar a ponerlo en el icono, si no quitarlo del nombre tb
  color: inherit;
  margin: 8px;
`;

interface Props {
  src: string;
  icon: IconDefinition;
  target?: string;
}

export const IconLink: FC<Props> = ({ src, icon, target }) => {
  return <A href={src} target={target}>
    <FontAwesomeIcon icon={icon}/>
  </A>;
};
