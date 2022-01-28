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
<<<<<<< HEAD
                <Route path="/inicio" element={<Inicio />} />                  
=======
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/Registro" element={<Registro />} />         
>>>>>>> e71df5d02863bae3fd19f1c70f0ff7c5016ae7e1
             </Routes>
      </ Router >
  </div>;
};
