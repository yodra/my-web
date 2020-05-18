import React, { FC } from 'react';
import styled from "@emotion/styled";

const Link = styled.a`
  //text-shadow: 0 0 4px rgba(0,0,0,0.5); TODO probar a ponerlo en el icono, si no quitarlo del nombre tb 
  //color: inherit;
  margin: 15px;
`;

const Img = styled.img`
  //width: 35%;
  width: 20%;
`;

interface ArticleProps {
    name: string;
    urlFile?: string;
    urlImage?: string;
    isDownloadable: boolean;
}

const Article: FC<ArticleProps> = ({ name, urlFile, urlImage }) => {
    return <Link href={urlFile} download="docker-cheatsheet.pdf">
        <Img src={urlImage} alt={name}/>
    </Link>
};

export default Article;
