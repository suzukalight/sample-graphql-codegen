import React, { FC } from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout';
import TextInput from '../../components/atoms/_forms/TextInput';

type PostProps = {
  // postData: PostData;
};

const Post: FC<PostProps> = () => (
  <Layout>
    <Head>
      <title>ログイン | mokmok</title>
    </Head>

    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <TextInput id="username" type="text" label="Username" placeholder="Username" />
      </div>
      <div className="mb-6">
        <TextInput id="password" type="password" label="Password" placeholder="*******" />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  </Layout>
);

export default Post;
