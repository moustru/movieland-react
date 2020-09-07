import React from 'react';
import { Header } from './components';
import { FilmList } from './components/FilmList';

const App = () => (
  <div className="wrapper">
    <Header />
    <FilmList />
  </div>
);

export default App;
