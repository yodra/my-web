import * as React from 'react';
import { FC } from "react";
import styled from "@emotion/styled";

const H1 = styled.h1`
  font-size: 54px;
`;

interface Props {
  className?: string;
}

export const Title: FC<Props> = ({ className, children }) => (
  <H1 className={className}>{children}</H1>
);
