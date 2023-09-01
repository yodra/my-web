import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Header } from '../components/header/Header';
import { IconLink } from '../components/iconLink/IconLink';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

const Container = styled.div`
  display: flex;
  font-family: 'Fira Code', monospace;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Body = styled.div`
  width: 75vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 4em;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 1em;
    width: 60vw;
  }
  @media (max-width: 425px) {
    width: 100vw;
  }
`;

const Link = styled.a`
  color: rgb(64, 133, 146);
  text-decoration: none;
`;

const Back = styled.div`
  color: rgb(64, 133, 146);
  display: flex;
  justify-content: center;
`;

const CerrandoUnaEtapa: FC = () => {
  return <Container>
    <Header backgroundImgURL='/fondoArticulo.jpg'/>
    <Body>
      <h2>Cerrando una etapa, pero no el camino.</h2>
      <p>
        El pasado mes de Marzo, después de 6 años, <Link href="https://twitter.com/IsaAguilarUndi" target="_blank"> @Isa</Link> y yo presentamos la
        renuncia a nuestros correspondientes puestos en la junta de <Link href="https://twitter.com/adalovedev" target="_blank"> AdaLoveDev</Link>.
        He llegado a un momento en el que me faltan fuerzas e ilusión para seguir con un papel tan activo como el que venía ejerciendo.
        Este es el principal motivo por el que tomé la decisión de apartarme y poder centrarme en otras iniciativas que me motiven e ilusionen más.
      </p>
      <p>
        Esto no significa que la lucha acabe, por supuesto siguen haciendo falta este tipo de organizaciones y comunidades,
        no hay más que ver a nuestro alrededor los últimos acontecimientos. Y esta en mi naturaleza seguir apoyando y participando en este tipo de iniciativas.
      </p>
      <p>
        Como siempre, cuando cerramos una etapa hacemos un breve recordatorio de esos años, y me gustaría compartir con ustedes el mío:
      </p>
      <p>
        <Link href="https://twitter.com/adalovedev" target="_blank"> AdaLoveDev</Link> nació en 2017, con un pequeño grupo de Telegram.
        Todo empezó cuando asistía a eventos de comunidades de canarias, me llamó la atención que prácticamente no había participación de mujeres
        y aún mucho menos como ponentes. Empezó un runrún en mi cabeza y con el tiempo lo hablé con algunas amigas con las que había trabajado o
        estudiado la carrera, y con ellas empezó este grupo de Telegram.
      </p>
      <p>
        Poco a poco y tan solo con el boca a boca entre nosotras, el grupo fue creciendo. <strong>A día de hoy ya somos 154 mujeres</strong> 😍 vinculadas de un
        modo u otro al mundo del desarrollo de software.
      </p>
      <p>
        Pero no sólo quedaba en Telegram, también nos avisábamos para asistir a eventos, compartimos información y hacíamos alguna que otra quedada.
        Rosana organizó el primer taller para maquetar diseños de dribble, y como no! con bebidas y picoteo de por medio 😉.
      </p>
      <p>
        En 2018 empezamos a reunirnos más asiduamente con la excusa de tomar algo y charlar, esto se convirtió en la quedada mensual de
        <Link href="https://twitter.com/adalovedev" target="_blank"> AdaLoveDev</Link>.
      </p>
      <p>
        En estas quedadas empezamos a hablar de hacer un evento, veníamos viendo demasiados carteles de eventos con poca diversidad, en todos los sentidos,
        y queríamos demostrar que hay muchísimas mujeres en el sector, que si no hay diversidad en esos carteles es por que falla algo en la organización
        de los eventos. Pensamos que podíamos hacer un evento en el que todas las ponentes se identificaran como mujeres.
        Y como ya muchos saben, así fue como nació
        <Link href="https://twitter.com/search?q=%23AdaLoversConf&src=hashtag_click" target="_blank"> #AdaLoversConf</Link> 🤗.
      </p>
      <p>
        Un evento organizado por mujeres, con mujeres ponentes y abierto a todo el que quisiera participar. Algunas iniciativas que para nosotras
        son imprescindibles en este evento fueron: la conciliación, la visibilidad del talento local y de la diversidad, el cuidado al detalle para que
        quien viniese se sintiese como en casa y, por supuesto, que fuera un espacio seguro para todas las personas.
      </p>
      <p>
        En <strong><Link href="https://twitter.com/search?q=%23AdaLoversConf19&src=hashtag_click" target="_blank">#AdaLoversConf19 </Link></strong>
        contamos con 18 ponentes increíbles 🔝, quisimos que el cartel fuera balanceado, así que 9 de ellas eran de Canarias.
        Quizás te parece una chorrada, pero ¿no han escuchado alguna vez eso de que los mejores están fuera? Por esto para nosotras fue tan importante
        visibilizar ese talento local, y dar un espacio seguro a tantas crackas que tenemos aquí en Canarias.
      </p>
      <p>
        <strong><Link href="https://twitter.com/search?q=%23AdaLoversConf19&src=hashtag_click" target="_blank">#AdaLoversConf19</Link></strong> fue increíble 😍,
        recibimos muy buen feedback, no hay más que ver el <strong><Link href="https://www.youtube.com/watch?v=Fz2RdjA8-Uc" target="_blank">video resumen</Link></strong>. Pensamos que podríamos intentar superarnos en 2020.
        Pero, como ya saben, llegó la pandemia justo cuando empezábamos con los preparativos.
        Tras varios meses dándole vueltas decidimos cancelar el evento ese año con la intención de retomarlo en 2021.
        Pero aún el tema COVID no estaba tan controlado (wow cuánto tiempo pasamos encerradas/distanciadas 🙈) así que tampoco pudimos hacerlo de forma presencial...
        ¡Pero no podíamos cancelar otra vez y ya!
      </p>
      <p>
        <strong><Link href="https://twitter.com/search?q=%23AdaLoversConf21&src=hashtag_click" target="_blank">#AdaLoversConf21</Link></strong> fue un pequeño evento on-line con cuatro maravillosas ponentes. Este evento podíamos hacerlo a coste cero, sólo con nuestro tiempo y
        el de las ponentes, pero igualmente decidimos recaudar dinero y donarlo a una causa muy importante, la lucha contra el cáncer de mama.
        Conseguimos más de 4800€ para la asociación <strong><Link href="https://amate-tenerife.es/" target="_blank">Ámate</Link></strong> ❤️.
      </p>
      <p>
        <strong><Link href="https://twitter.com/search?q=%23AdaLoversConf22&src=hashtag_click" target="_blank">#AdaLoversConf22</Link></strong> tras dos años con muchísimas ganas de volver hacer un evento presencial lo dimos todo en la organización del 2022,
        contábamos nuevamente con 18 crackas de distintas áreas del sector. Queríamos dar un toque diferente al evento y preparamos:
        <ul>
          <li>
            Un Discussion Idea Together (DIT) en el que entre todos debatiríamos temas tan importantes como hiring, carrera profesional y diversidad de
            género en estudios del sector TIC.
          </li>
          <li>
            Un espacio de ludoteca con todo lo necesario gracias a Lifer.
          </li>
          <li>
            Un espacio post evento con 4 horas de networking, free de charlas y talleres y con un super food truck de comida cubana (incluida con la entrada).
          </li>
          <li>
            Y no podían faltar esos toques que en 2019 nos diferenciaron: Plátanos, Tirmas, Brindis de cierre con cervezas, sidra y zumos, y el catering de Ros&Gas.
          </li>
        </ul>
      </p>
      <p>
        Pero como saben, el viernes antes del evento ultimando detalles nos avisaron de una alerta en Tenerife por fuertes lluvias.
        La universidad tenía que cerrar y nos veíamos obligadas a cancelar el evento
        (todavía tengo grabada en mi retina la cara de <Link href="https://twitter.com/IsaAguilarUndi" target="_blank"> @Isa</Link> cuando me llamó el Vicerrector con la noticia 🥺),
        pero tras unos minutos de bajón decidimos replantear el evento, emitimos un comunicado cancelando el evento presencial e invitamos a
        todos los participantes, sponsors y ponentes a asistir esa misma tarde a unas horas de networking, dando así una oportunidad de disfrutar
        de una pequeña parte de lo que habíamos preparado con tanto esfuerzo. Las charlas las pasamos a modalidad on-line, “pivotamos”
        de un evento presencial a uno semipresencial en cuestión de horas, y aún hoy nos siguen
        llegando comentarios maravillosos de la gestión que hicimos 🥰.
      </p>
      <p>
        Pero <Link href="https://twitter.com/adalovedev" target="_blank"> AdaLoveDev</Link> no solo es un evento anual, también impartimos charlas y talleres en colegios, para que los más peques tengan referentes,
        ya que esto es lo único que puede hacer que a la larga tengamos más diversidad en este tipo de carreras. Si desde pequeños contamos con esos referentes,
        y no le decimos a una niña eso de “los robots son para tu hermano…”.
      </p>
      <p>
        También están las <strong><Link href="https://www.youtube.com/watch?v=YrjyFwVyvwg&list=PLYH4QFDGRcPQY0VjuuhccvTeYA_7yPf1E" target="_blank">AdaSessions</Link></strong>,
        charlas mensuales internas para la comunidad que más tarde publicamos en Youtube siempre que la ponente quiera.
        ¿Por qué son internas? en su momento decidimos hacerlo así para generar ese espacio seguro, que ninguna asistente se sintiera intimidada
        a la hora de compartir experiencias o hacer cualquier tipo de pregunta.
      </p>
      <p>
        Por supuesto también hemos tenido proyectos que con el tiempo dejamos de lado, como los Clubs o el programa de mentoring,
        que nos hubiera encantado impulsar pero no siempre hay tiempo y ganas. <Link href="https://twitter.com/adalovedev" target="_blank">AdaLoveDev </Link>
        es una comunidad que hasta hoy ha sido sin ánimo de lucro y totalmente voluntaria, ponemos nuestro tiempo en hacer posibles todas estas
        iniciativas y no siempre podemos llevarlas a cabo como pensábamos.
      </p>
      <p>
        Han sido unos años maravillosos en los que he conocido a mujeres increíbles, muchas de ellas referentes para mí. Pero como dije al principio la
        lucha no ha terminado, seguiré apoyando siempre que pueda este tipo de iniciativas mientras sea necesario.
      </p>
      <p>
        Así que para terminar, después de varios meses de trámites, tengo que decir que esta transición se ha completado legalmente y que la nueva junta,
        como ya vienen haciendo desde Abril, tras la elección la misma por parte de las socias, continuará con la organización de la asociación.
      </p>
      <p><strong>¡¡Muchas gracias a todas!! ❤️💪</strong></p>
      <Back>
        <IconLink src={'/'} icon={faArrowLeft}/>
      </Back>
    </Body>
  </Container>;
};

export default CerrandoUnaEtapa;
