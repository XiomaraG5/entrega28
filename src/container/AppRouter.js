import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from '../components/Home';

export const AppRouter = () => {
  return <div>
      <Router >          
             <Routes>
                {/* <Route exact path="/" component={} /> */}
                <Route path="/home" element={<Home />} />        
             </Routes>
      </ Router >
  </div>;
};
