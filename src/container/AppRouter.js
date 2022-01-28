import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from '../components/Home';
import { Html } from '../components/html/pregunta';
import Inicio from '../components/Inicio';
import Registro from '../components/Registro';

export const AppRouter = () => {
  return <div>
      <Router >          
             <Routes>
                {/* <Route exact path="/" component={} /> */}
                <Route path="/html" element={<Html />} /> 
                <Route path="/home" element={<Home />} />               
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/Registro" element={<Registro />} />         
             </Routes>
      </ Router >
  </div>;
};
