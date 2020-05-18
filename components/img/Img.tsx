import * as React from 'react';
import { FC } from "react";

interface Props {
  src: string;
  alt?: string;
}

export const Img: FC<Props> = ({ src, alt }) => (
  <img src={src} alt={alt}/>
);
