import React from 'react';
import Nav from "./Nav";
import Header from "./Header"
import Styles from "../styles/Home.module.css";

const Layout = ({children}) => {
  return (
    <>
    <Nav />
    <div className={Styles.container}>
    
        <main className={Styles.main}>
          <Header />
            {children}
        </main>

      
    </div>
    </>
  );
};

export default Layout;
