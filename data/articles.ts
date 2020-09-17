
export interface ArticleModel {
  id: string;
  title: string;
  description?: string;
  link: string;
  image: string;
}

export const articles: ArticleModel[] = [
  {
    id: '7',
    title: 'Artículo: Docker + NodeJS + Buenas Prácticas',
    link: 'https://softwarecrafters.io/devops/docker-nodejs-buenas-practicas',
    image: 'https://images.unsplash.com/photo-1526085714137-8c2402e21151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80',
  },
  {
    id: '5',
    title: 'Tips: Oratoria',
    link: 'https://leanmind.es/es/blog/taller-de-oratoria/',
    image: '/img-tips-oratoria.png',
  },
  {
    id: '6',
    title: 'Cheat sheet: Dockerfile y docker-compose v2.0',
    link: '/docker-cheatsheet-v2.pdf',
    image: '/img-docker.png',
  },
  {
    id: '4',
    title: 'Charla: Mira lo que ha hecho... GIT',
    link:'https://www.youtube.com/embed/ZuaftLzA6WI',
    image: 'https://live.staticflickr.com/65535/49157525538_19d5e2f23c_o.jpg'
  },
  {
    id: '2',
    title: 'Charla: Refactorizar y cómo refactorizar esa es la cuestión',
    link:'https://www.youtube.com/embed/mwqfDyQv6Ls',
    image: '/adaloversconf.jpg'
  },
  {
    id: '3',
    title: 'Artículo: Afrontando un MVP con impacto social',
    link: 'https://leanmind.es/es/blog/afrontar-mvp/',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80'
  },
  {
    id: '1',
    title: 'Artículo: Testing de UI en Swift con Kif',
    link:'https://leanmind.es/es/blog/testing_ui_swift_con_kif/',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  }
];
