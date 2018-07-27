import React, { Fragment } from "react";

import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <Main>
      {children}
    </Main>
    <Footer />
  </Fragment>
);

export default Layout;
