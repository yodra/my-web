import React, { FC } from 'react';
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { H1 } from "../components/h1/H1";
import Article from "../components/article/Article";

const Body = styled.div`
  display: flex;
`;

let ContentLeft: any;
ContentLeft = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: linear-gradient(rgba(86,144,156,0.58), rgba(86,144,156,0.58)), url('/photo.jpg');
  background-position: center;
  background-size: cover;
  color: #FFF;
  text-shadow: 0 0 4px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentRight = styled.div`
  width: 50vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
`;

const SocialMedia = styled.div`
  font-size: 35px;
`;

const Link = styled.a`
  //text-shadow: 0 0 4px rgba(0,0,0,0.5); TODO probar a ponerlo en el icono, si no quitarlo del nombre tb 
  color: inherit;
  margin: 8px;
`;

const Articles = styled.div`
  margin-top: 200px;
  text-align: center;
`;

export const Profile: FC = () => {
  return <Body>
    <ContentLeft>
      <H1>Yodra López</H1>
      <SocialMedia>
        <Link href="https://www.twitter.com/yodralopez" target="_blank">
          <FontAwesomeIcon icon={faTwitter}/>
        </Link>
        <Link href="https://www.twitter.com/yodralopez" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </Link>
        <Link href="https://www.twitter.com/yodralopez" target="_blank">
          <FontAwesomeIcon icon={faEnvelope}/>
        </Link>
      </SocialMedia>
    </ContentLeft>
    <ContentRight>
      <h2>Además de tomar birras...</h2>
      <p>En ocasiones pico algo de código aplicando el mito de las buenas prácticas y el gran desconocido testing.</p>
      <p>Lo paso fatal trabajando desde casa en @Canarias.</p>
      <p>IntentoIntento dar a conocer estas practicas tan extrañas como XP, TDD, Refactoring y otras, a la
        siguiente generación de developers, en cursos de FullStack y FrontEnd de @EOI en Tenerife.</p>
      <p>Y cómo me encanta esto de los mitos también soy Co-organizadora en la comunidad de Mujeres
        desarrolladoras @adalovedev.</p>
      <p>También me gusta contar batallitas como las abuelas, así que de vez en cuando doy alguna charla que
        puedes encontrar en esta web.</p>
      <p>¡¡LeanMinder y AdaLover!!</p>
      <Articles>
        {/*TODO al pasar por arriba se ponga con una capa azul y el icono de descargar*/}
        <Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"
                 isDownloadable={true}/>
        <iframe src="https://www.youtube.com/embed/mwqfDyQv6Ls" title="Charla refactoring"/>
        <iframe src="https://www.youtube.com/embed/ZuaftLzA6WI" title="Charla git"/>

        <Link href="https://leanmind.es/es/blog/testing_ui_swift_con_kif/" target="_blank">
          <img src="https://unsplash.com/photos/ZSPBhokqDMc" alt="articulo testing ui swift"/>
        </Link>
        <Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"
                 isDownloadable={true}/>
        <Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"
                 isDownloadable={true}/>
        <Article name="Chuleta de docker" urlFile="./profile/docker-cheatsheet.pdf" urlImage="/img-docker.png"
                 isDownloadable={true}/>
      </Articles>
    </ContentRight>
  </Body>
};

// TODO tipos de contenido: PDF, Articulo, video, tweet,
export default Profile;
