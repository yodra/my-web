export interface ArticleModel {
  id: string;
  title: string;
  description?: string;
  link: string;
  image: string;
}

export const articles: ArticleModel[] = [
  {
    id: '1',
    title: 'Cheat sheet: Dockerfile y docker-compose',
    link: '/docker-cheatsheet.pdf',
    image: '/img-docker.png',
  },
  {
    id: '2',
    title: 'Charla: Refactorizar y cómo refactorizar esa es la cuestión',
    link:'https://www.youtube.com/embed/mwqfDyQv6Ls',
    image: 'https://lh3.googleusercontent.com/OrYsImpOfrRW8fIsaWJNZO_VYYrfm5fH6f6g55-iyGqkHSDR2S5mPKDxMvYx8zhd4GyetUBfY2hpLzirVRwp9KsoKP8epewqQ43me-1ypJhFdlXa54f849nFkkPtjbIvOFHKUWk1w--Jy-bMcLeZdnGeIj4HmcLTk51WkcZe1VTrIMhmfn8dGreChnWwCQ_NRAMn8ztunUJ3KPGFOPKKi2ptm26sgIX0CQ7pZ5atPUpiF4Yia5PsrEpirY5Pdt4PW5UXAZMw2wanJ8KJmeII2HZkw1gycXdNEms93zR4a34oE6f6dz0zYSNA7n2tzaBMMukW0AJdsSBKWJ1MpwkTGwScUNFCr5efifqJQ1VkmjSGzsYXMOPxImhumtP38ZRb-KZJEm7aFywNnHlcbvMEGLxX2Uj0KpiNU_5mBMNPUZWRe7j6NQMUboPPUYNbsOXaG7ywdlMFyWamriGhC-UxaOQY5ZhSgFe4VDp0igILbn0C5bKi3fyeBaRlAZbnQTMmAIP81On8WuHhL-bDEG0nYf1R69bOnlyBPPTE19vZ9VZbiDqrbZQpavViCxjf74H4lwfFJOX_eRCVM3CCfdUvK6PJUx-vw-z1xPkPSl7vmWuR-b82wIdLHt7ZwRZfapb6Fe4hiLWPhWIKmcpStgFkgfBJ1QCR5L853wYd7a2TDmsC609eNLEEgATVNmquHg=w1080-h720-no?authuser=4'
  },
  {
    id: '3',
    title: 'Artículo: Testing de UI en Swift con Kif',
    link:'https://leanmind.es/es/blog/testing_ui_swift_con_kif/',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
  },
  {
    id: '4',
    title: 'Charla: Mira lo que ha hecho... GIT',
    link:'https://www.youtube.com/embed/ZuaftLzA6WI',
    image: 'https://live.staticflickr.com/65535/49157525538_19d5e2f23c_o.jpg'
  },
  {
    id: '5',
    title: 'Artículo: Afrontando un MVP con impacto social',
    link: 'https://leanmind.es/es/blog/afrontar-mvp/',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80'
  }
];
