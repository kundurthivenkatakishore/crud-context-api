import React from 'react';
import { Routes,Route  } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';
import './App.css'
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';


function App() {
  return (
    <div>
      <GlobalProvider>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/components/AddUser' element={<AddUser/>}/>
          <Route exact path='/edit/:id' element={<EditUser/>}/>
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
