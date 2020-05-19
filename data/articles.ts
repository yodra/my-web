type Type = 'video' | 'downloadable' | 'imageLink';

export interface ArticleModel {
  id: string;
  type: Type;
  name: string;
  src: string;
  image?: string;
  filename?: string;
}

export const articles: ArticleModel[] = [
  { id: '1',
    name: 'docker cheat sheet',
    type: 'downloadable',
    src: '/docker-cheatsheet.pdf',
    image: '/img-docker.png',
    filename: 'docker-cheatsheet.pdf'
  },
  { id: '2',
    name: 'Charla Refactoring',
    type: 'video',
    src:'https://www.youtube.com/embed/mwqfDyQv6Ls'
  },
  { id: '3',
    name: 'Articulo testing UI Swift',
    type: 'imageLink',
    src:'https://leanmind.es/es/blog/testing_ui_swift_con_kif/',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  { id: '4',
    name: 'Charla GIT',
    type: 'video',
    src:'https://www.youtube.com/embed/ZuaftLzA6WI'
  },
  { id: '5',
    name: 'Articulo MVP con impacto social',
    type: 'imageLink',
    src: 'https://leanmind.es/es/blog/afrontar-mvp/',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80'
  }
];
