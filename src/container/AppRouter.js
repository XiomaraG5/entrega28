import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from '../components/Inicio';

export const AppRouter = () => {
  return <div>
      <Router >
          <Routes>
              <Route exact path="/" component={<Inicio/>} />
          </Routes>
      </ Router >
  </div>;
};
