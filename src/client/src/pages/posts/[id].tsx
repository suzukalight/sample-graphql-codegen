import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import Layout from '../../components/Layout';
import Date from '../../components/Date';

import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPostIds(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    postData: await getPostData(params.id as string),
  },
});

type PostProps = {
  postData: PostData;
};

const Post: FC<PostProps> = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>

    <article>
      <h1 className="text-3xl leading-tight font-extrabold my-4">{postData.title}</h1>

      <div className="text-gray-600">
        <Date dateString={postData.date} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export default Post;
