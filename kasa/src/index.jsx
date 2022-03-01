import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/A_propos';
import Error from './components/Error';
import FicheLogement from './pages/Fiche_logement';
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/a_propos' element={<About />}/>
        <Route path='/ficheLogement/:id' element={<FicheLogement />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
