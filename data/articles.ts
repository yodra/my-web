export interface ArticleModel {
  id: string;
  title: string;
  resourceLink: string;
  slidesLink?: string;
  image: string;
  date?: string;
  description?: string;
}

export const articles: ArticleModel[] = [
  {
    id: '14',
    title: 'Taller: Testing untestable code',
    resourceLink: 'https://pulpocon.es/workshop/yondra-lopez',
    slidesLink: 'https://docs.google.com/presentation/d/1QL3HY4r1Cuu4-kKsEoVTPV-l4vc7q3xtfwf15pYF9yg/edit?usp=sharing',
    image: '/pulpocon23.jpeg',
    date: '2023-09-10',
    description: 'Taller en PulpoCon 2023 sobre cómo hacer testing de código difícil de testear.',
  },
  {
    id: '13',
    title: 'Cerrando una etapa, pero no el camino.',
    resourceLink: '/CerrandoUnaEtapa',
    image: '/adalovedev.jpeg',
    date: '2023-09-01',
    description: 'Artículo personal sobre el cierre de una etapa en AdaLoveDev tras 6 años de dedicación.',
  },
  {
    id: '12',
    title: 'Charla: We ♥️ Legacy Code',
    resourceLink: 'https://www.youtube.com/watch?v=ilnUn4O9hsU',
    image: '/t3chfest2023.jpg',
    date: '2023-03-02',
    description: 'Charla en T3chFest 2023 sobre cómo trabajar con código legacy de forma sostenible.',
  },
  {
    id: '11',
    title: 'Meetup: Refactoring con Johan Cortes',
    resourceLink: 'https://www.youtube.com/embed/PxUKq1yelRo',
    image: 'https://secure.meetupstatic.com/photos/event/7/f/5/9/highres_508652601.jpeg',
    date: '2022-11-29',
    description: 'Sesión de meetup sobre refactoring junto a Johan Cortés.',
  },
  {
    id: '10',
    title: 'Charla: Refactorizar sin test 😱 y no morir en el intento',
    resourceLink: 'https://www.youtube.com/watch?v=VCOOmh9-MbA',
    slidesLink: 'https://docs.google.com/presentation/d/1xfJIRvWxIZKEsMRCOlI18Udwiv23w2lQdHPC1H_xacM/edit?usp=sharing',
    image: '/miduconf-22.png',
    date: '2022-07-24',
    description: 'Charla en MiduConf 2022 sobre cómo refactorizar código sin cobertura de tests.',
  },
  {
    id: '9',
    title: 'Charla: Essentials skills',
    resourceLink: 'https://youtu.be/pP5wnvZCQZE?t=5789',
    image: '/adassa.png',
    date: '2021-01-08',
    description: 'Charla sobre habilidades esenciales para desarrolladoras de software.',
  },
  {
    id: '8',
    title: 'Cheat sheet: Top 10 Refactoring',
    resourceLink: 'refactoring-cheatsheet.pdf',
    image: '/img-refactoring.jpg',
    date: '2020-11-12',
    description: 'Top 10 técnicas de refactorización resumidas en una hoja de referencia rápida.',
  },
  {
    id: '7',
    title: 'Artículo: Docker + NodeJS + Buenas Prácticas',
    resourceLink: 'https://softwarecrafters.io/devops/docker-nodejs-buenas-practicas',
    image: 'https://images.unsplash.com/photo-1526085714137-8c2402e21151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80',
    date: '2020-09-17',
    description: 'Artículo con buenas prácticas para dockerizar aplicaciones Node.js.',
  },
  {
    id: '5',
    title: 'Tips: Oratoria',
    resourceLink: 'https://leanmind.es/es/blog/taller-de-oratoria/',
    image: '/img-tips-oratoria.jpg',
    date: '2020-09-27',
    description: 'Consejos y recursos para mejorar tus habilidades de oratoria en público.',
  },
  {
    id: '6',
    title: 'Cheat sheet: Dockerfile y docker-compose v2.0',
    resourceLink: '/docker-cheatsheet-v2.pdf',
    image: '/img-docker.png',
    date: '2020-09-17',
    description: 'Guía de referencia rápida para Dockerfile y docker-compose v2.',
  },
  {
    id: '4',
    title: 'Charla: Mira lo que ha hecho... GIT',
    resourceLink:'https://www.youtube.com/embed/ZuaftLzA6WI',
    slidesLink: 'https://docs.google.com/presentation/d/1LUL7V4SzBi2LPltAG4MQ1C9N_j9OtyY4WI5KYbffIg8/edit?usp=sharing',
    image: 'https://live.staticflickr.com/65535/49157525538_19d5e2f23c_o.jpg',
    date: '2020-07-27',
    description: 'Charla sobre Git: su historia, comandos esenciales y buenas prácticas.',
  },
  {
    id: '2',
    title: 'Charla: Refactorizar y cómo refactorizar esa es la cuestión',
    resourceLink:'https://www.youtube.com/embed/mwqfDyQv6Ls',
    slidesLink: 'https://docs.google.com/presentation/d/15jcD36NXFyVb2RBhkK4jtYIlb8rCgmVgIB8lAbt5uwM/edit?usp=sharing',
    image: '/adaloversconf.jpg',
    date: '2020-05-22',
    description: 'Charla sobre qué es refactorizar, cuándo hacerlo y cómo abordarlo en la práctica.',
  },
  {
    id: '3',
    title: 'Artículo: Afrontando un MVP con impacto social',
    resourceLink: 'https://leanmind.es/es/blog/afrontar-mvp/',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80',
    date: '2020-05-22',
    description: 'Artículo sobre cómo afrontar el desarrollo de un MVP con impacto social.',
  },
  {
    id: '1',
    title: 'Artículo: Testing de UI en Swift con Kif',
    resourceLink:'https://leanmind.es/es/blog/testing_ui_swift_con_kif/',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    date: '2020-05-22',
    description: 'Artículo sobre cómo hacer testing de interfaz de usuario en Swift con la librería KIF.',
  },
];
