import React from 'react';
import { Link } from 'gatsby';

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <main>{children}</main>
      <footer>
        ©&nbsp;
        {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
