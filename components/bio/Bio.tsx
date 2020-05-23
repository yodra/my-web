import React, { FC } from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  color: rgb(64,133,146);
  text-decoration: none;
`;

export const Bio: FC = () => {
  return <div>
    <h2>Además de tomar 🍻 birras 🍻...</h2>
    <p>En ocasiones pico algo de código aplicando el mito de las buenas prácticas y el gran desconocido testing.</p>
    <p>Lo paso fatal trabajando desde casa en <Link href="https://twitter.com/canarias_es" target="_blank">@Canarias</Link> 🏝.</p>
    <p>Intento dar a conocer estas practicas tan extrañas como XP, TDD, Refactoring y otras, a la
      siguiente generación de developers, en cursos de FullStack y FrontEnd de <Link href="https://twitter.com/eoi" target="_blank">@EOI</Link>.</p>
    <p>Y cómo me encanta esto de luchar contra corriente soy Co-organizadora en la comunidad de Mujeres
      desarrolladoras <Link href="https://twitter.com/adalovedev" target="_blank">@adalovedev</Link>. 💪</p>
    <p>También me gusta contar batallitas 🤺 como las abuelas 👵👵, así que de vez en cuando doy alguna charla que
      puedes encontrar en esta web.</p>
    <p>¡¡<Link href="https://leanmind.es" target="_blank">LeanMinder</Link> y <Link href="http://adalovedev.es" target="_blank">AdaLover</Link>!!</p>
  </div>;
};
