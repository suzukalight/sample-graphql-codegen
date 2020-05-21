import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Layout, { siteTitle } from '../components/Layout';
import Date from '../components/Date';

import { getSortedPostsData } from '../lib/posts';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    allPostsData: getSortedPostsData(),
  },
});

type HomeProps = {
  allPostsData: PostData[];
};

const Home: FC<HomeProps> = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <section className="text-xl pt-1">
      <h2 className="text-2xl font-bold my-4">Blog</h2>

      <ul className="m-0 p-0">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="mb-5">
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a className="text-xl">{title}</a>
            </Link>
            <br />
            <small className="text-gray-600">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Home;
