type Type = 'video' | 'downloadable' | 'link';

export interface ArticleModel {
  id: string;
  type: Type;
  name: string;
  src: string;
  image: string;
  filename: string;
}

export const articles: ArticleModel[] = [
  { id: '1',
    name: 'docker cheat sheet',
    type: 'downloadable',
    src: '/docker-cheatsheet.pdf',
    image: '/img-docker.png',
    filename: 'docker-cheatsheet.pdf'
  }
  // { id: '2', name: 'charla git', type: 'video' }
];
