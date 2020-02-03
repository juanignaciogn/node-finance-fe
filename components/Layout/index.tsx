import './_styles.scss';
import React, { FunctionComponent } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  title: string;
}
const Layout: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Header title={title} />
    <main role="main">
      { children }
    </main>
    <Footer title={title} />
  </>
);

export default Layout;
