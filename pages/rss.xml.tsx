import type { GetServerSideProps } from 'next';
import { articles } from '../data/articles';

const SITE_URL = 'https://yodralopez.dev';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRSS(): string {
  const sorted = [...articles]
    .filter((a) => a.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

  const items = sorted
    .map((article) => {
      const link = article.resourceLink.startsWith('http')
        ? article.resourceLink
        : `${SITE_URL}${article.resourceLink}`;
      const pubDate = new Date(article.date!).toUTCString();
      const description = article.description
        ? `<description>${escapeXml(article.description)}</description>`
        : '';
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      ${description}
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Yodra López</title>
    <link>${SITE_URL}</link>
    <description>Artículos, charlas y recursos de Yodra López sobre desarrollo de software.</description>
    <language>es</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(generateRSS());
  res.end();
  return { props: {} };
};

export default function RSSPage() {
  return null;
}
