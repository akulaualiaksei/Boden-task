import React from "react";
import Header from './Header/Header';
import Modal from './Modal/Modal';
import Main from './Main/Main';
import Footer from "./Footer";

const App = () => {
  return(
    <>
      <Modal/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
};

export default App;
