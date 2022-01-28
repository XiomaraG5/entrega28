import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../components/Home';
import { Html } from '../components/pregunta';

export const AppRouter = () => {
  return <div>
      <Router >          
             <Routes>
                {/* <Route exact path="/" component={} /> */}
                <Route exact path="/home" element={<Home />} />        
                <Route exact path="/quiz" element={<Html/>} />        
             </Routes>
      </ Router >
  </div>;
};
