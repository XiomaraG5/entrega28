import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from '../components/Home';
import {Pregunta1, Pregunta2, Pregunta3} from '../components/CSS/PreguntaCSS'
import { Html, Html1, Html2 } from '../components/html/pregunta';
import {Inicio} from '../components/Inicio';
import PreguntaJs1 from '../components/JS/PreguntaJS';
import {PreguntaJs2, PreguntaJs3} from '../components/JS/PreguntaJS';
import Registro from '../components/Registro';



export const AppRouter = () => {
  return <div>
      <Router >          
             <Routes>
               <Route exact path="/" element={< Inicio />} /> 
                <Route exact path="/html/2" element={<Html2 />} /> 
                <Route exact path="/html/1" element={<Html1 />} /> 
                <Route exact path="/html/" element={<Html />} /> 
                <Route exact path="/home" element={<Home />} />                   
                <Route exact path="/registro" element={<Registro />} /> 
                <Route exact path="/CSS/1" element={<Pregunta1 />}  />
                <Route exact path="/CSS/2" element={<Pregunta2 />}  />
                <Route exact path="/CSS/3" element={<Pregunta3 />}  />
                <Route exact path="/JS/1" element={<PreguntaJs1 />}  />
                <Route exact path="/JS/2" element={<PreguntaJs2 />}  />
                <Route exact path="/JS/3" element={<PreguntaJs3 />}  />
             </Routes>
      </ Router >
  </div>;
};
