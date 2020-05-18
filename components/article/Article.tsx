import React, { FC } from 'react';
import styled from "@emotion/styled";
import { ArticleModel } from '../../data/articles';
import { Downloadable } from '../downloadable/Downloadable';

interface ArticleProps {
    data: ArticleModel;
}

const Article: FC<ArticleProps> = ({ data }) => {
  if (data.type === 'downloadable') {
    return <Downloadable data={data}/>
  }
  return <div>{data.name}</div>
  {/*TODO al pasar por arriba se ponga con una capa azul y el icono de descargar*/}
  {/*<Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"*/}
  {/*         isDownloadable={true}/>*/}
  {/*<iframe src="https://www.youtube.com/embed/mwqfDyQv6Ls" title="Charla refactoring"/>*/}
  {/*<iframe src="https://www.youtube.com/embed/ZuaftLzA6WI" title="Charla git"/>*/}

  {/*<Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"*/}
  {/*         isDownloadable={true}/>*/}
  {/*<Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"*/}
  {/*         isDownloadable={true}/>*/}
  {/*<Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"*/}
  {/*         isDownloadable={true}/>*/}
};

export default Article;
