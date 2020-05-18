import * as React from 'react';
import { FC } from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: 54px;
`;

interface Props {
  className?: string;
}

export const H1: FC<Props> = ({ className, children }) => (
  <Title className={className}>{children}</Title>
);
