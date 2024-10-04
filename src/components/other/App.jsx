import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import '../../styles/app.sass';
import FirstPage from '../../pages/FirstPage';
import SecondPage from '../../pages/SecondPage';
import ThirdPage from '../../pages/ThirdPage';
import FourPage from '../../pages/FourPage';
import Header from '../other/Header';

const App = () => {
  
  return (
    <Router>
      <div className="App">
      <Header/>

        <Routes>
          <Route path='/' element={<FirstPage/>}></Route>
          <Route path='/prices' element={<SecondPage/>}></Route>
          <Route path='/zones' element={<ThirdPage/>}></Route>
          <Route path='/photo' element={<FourPage/>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;