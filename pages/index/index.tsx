import './_styles.scss';

import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

interface Props {
  test: string;
}

const Index: FunctionComponent<Props> = () => (
  <Layout title="titulo">
    <div>
      <p>Hello Next.js</p>
      <Link href="/about">About Page</Link>
    </div>
  </Layout>
);

export default Index;
