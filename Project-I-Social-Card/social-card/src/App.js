import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import ContentFooter from './components/FooterComponents/Footer';


const App = () => {
  return (
  <div className="app">
    <HeaderContainer />
    <CardContainer />
    <ContentFooter />
  </div>
  )
};

export default App;
