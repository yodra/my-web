import React, { FC } from 'react';
import { ArticleModel } from '../../data/articles';
import { Downloadable } from '../downloadable/Downloadable';
import { Video } from '../video/Video';
import { Link } from '../link/Link';

interface ArticleProps {
  data: ArticleModel;
}

const Article: FC<ArticleProps> = ({ data }) => {
  switch (data.type) {
    case 'downloadable':
      return <Downloadable data={data}/>;
    case 'video':
      return <Video data={data}/>;
    case 'link':
      return <Link data={data}/>
  }
  return <div>{data.name}</div>;
};

export default Article;
