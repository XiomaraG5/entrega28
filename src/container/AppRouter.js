import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pregunta1 from '../components/CSS/Pregunta1';
import Pregunta2 from '../components/CSS/Pregunta2';
import Pregunta3 from '../components/CSS/Pregunta3';
import Home from '../components/Home';
import Inicio from '../components/Inicio';
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
             </Routes>
      </ Router >
  </div>;
};
