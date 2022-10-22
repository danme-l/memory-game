import './Styles/App.css';
import './Styles/Style.css';
import Header from './Components/HeadFoot/Header';
import Footer from './Components/HeadFoot/Footer';
import Game from './Components/AppBody/Game.js';
import React from 'react';

function App() {
  return (
    <div className="App">
     <Header />
     <Game />
     <Footer />
    </div>
  );
}

export default App;
