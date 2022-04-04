import React from 'react';
import { Rotas } from './routes';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
