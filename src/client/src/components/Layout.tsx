import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const name = 'suzukalight';
export const siteTitle = 'Next.js Sample Website';

type LayoutProps = {
  home?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, home }) => (
  <div className="px-4 mt-12 mb-24 mx-auto max-w-xl">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <header className="flex flex-col items-center">
      {home ? (
        <>
          <img src="/icon-192x192.png" alt={name} className="w-32 h-32 rounded-full" />
          <h1 className="text-4xl font-extrabold my-4">{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <img src="/icon-192x192.png" alt={name} className="w-24 h-24 rounded-full" />
            </a>
          </Link>
          <h2 className="my-4">
            <Link href="/">
              <a className="text-2xl font-bold text-current">{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>

    <main>{children}</main>

    {!home && (
      <div className="mt-12">
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

export default Layout;
