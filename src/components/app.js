import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import Routes from './routes';

import './app.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
