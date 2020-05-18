import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';

interface Props {
  data: ArticleModel;
}

export const Video: FC<Props> = ({data: {name, src}}) => {
  return <iframe src={src} title={name}/>;
};
