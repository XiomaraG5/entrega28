import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pregunta1 from '../components/CSS/PreguntaCSS';
import Pregunta2 from '../components/CSS/PreguntaCSS';
import Pregunta3 from '../components/CSS/PreguntaCSS';
import Home from '../components/Home';
import Inicio from '../components/Inicio';
import PreguntaJs1 from '../components/JS/PreguntaJS';
import PreguntaJs2 from '../components/JS/PreguntaJS';
import PreguntaJs3 from '../components/JS/PreguntaJS';
import Registro from '../components/Registro';



export const AppRouter = () => {
  return <div>
      <Router >          
             <Routes>
                {/* <Route exact path="/" component={} /> */}
                <Route path="/home" element={<Home />} />               
                <Route path="/inicio" element={<Inicio />} />                
                <Route path="/Registro" element={<Registro />} /> 
                <Route path="/CSS/1" element={<Pregunta1 />}  />
                <Route path="/CSS/2" element={<Pregunta2 />}  />
                <Route path="/CSS/3" element={<Pregunta3 />}  />
                <Route path="/JS/1" element={<PreguntaJs1 />}  />
                <Route path="/JS/2" element={<PreguntaJs2 />}  />
                <Route path="/JS/3" element={<PreguntaJs3 />}  />
             </Routes>
      </ Router >
  </div>;
};
