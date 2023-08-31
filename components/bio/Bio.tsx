import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
`;

const Link = styled.a`
  color: rgb(64,133,146);
  text-decoration: none;
`;

export const Bio: FC = () => {
  return <Container>
    <h2>¿Qué hago?</h2>
    <p>
      Soy desarrolladora de software y hago especial hincapié en desarrollar con buenas prácticas y testing.
    </p>
    <p>
      Aunque parece que es algo que todos deberíamos hacer la realidad es muy diferente 🤷‍♀️
    </p>
    <p>
      Aunque mis inicios fueron con <Link href="https://twitter.com/java" target="_blank">@java </Link>
      me considero agnóstica a los lenguajes de programación. Considero que son una herramienta más que usamos para crear software.
    </p>
    <p>
      Intento dar a conocer estas buenas prácticas y metodologías a la siguiente generación
      de developers, en cursos de FullStack y FrontEnd de
      <Link href="https://twitter.com/eoi" target="_blank"> @EOI</Link>.
    </p>
    <p>
      Soy co-organizadora en la comunidad de mujeres desarrolladoras
      <Link href="https://twitter.com/adalovedev" target="_blank"> @adalovedev</Link>,
      donde entre otras cosas organizamos un evento de desarrollo sofware llamado
      <Link href="https://adaloversconf.es/" target="_blank"> AdaLoversConf</Link>. 💪
    </p>
    <p>
      También tengo el placer de compartir un canal de Twitch llamado
      <Link href="https://twitter.com/codingiscaring" target="_blank"> @CodingIsCaring </Link>
      con <Link href="https://twitter.com/Marietait3" target="_blank">@marietait3</Link>,
      donde hacemos Katas, hablamos mucho de como escribir mejor código y sobre todo nos reímos.
    </p>

    <p>Vivo en las Islas <Link href="https://twitter.com/canarias_es" target="_blank">@Canarias </Link>
      también conocido como el paraíso 🏝.
    </p>
    <p>Y suelo participar en eventos contando batallitas 🤺 como las abuelas 👵👵.</p>
    <p>Encontraras aquí enlaces a algunas cosillas que hago, si algo te parece útil
      <Link href="https://www.buymeacoffee.com/yodralopezh" target="_blank"> puedes invitarme una 🍺.</Link>
    </p>
    <p>
      Software engineer @ <Link href="https://www.linkedin.com/company/science4tech/" target="_blank">Science4Tech</Link> 👩‍🔬,
      Co-founder @ <Link href="https://adalovedev.es" target="_blank">AdaLoveDev</Link> 💜💪,
      Co-streamer @ <Link href="https://www.twitch.tv/codingiscaring" target="_blank"> CodingIsCaring</Link > 👯‍♀️
    </p>
  </Container>;
};
