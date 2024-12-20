import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './home/Home';
import { VehiclesList } from './vehicles/VehiclesList';
import { AddVehicle } from './vehicles/AddVehicle';
import { UpdateVehicle } from './vehicles/UpdateVehicle';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './login/Login';

const App = () => {
  return (
    <div className='container'>       
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/vehicles' element={<VehiclesList/>}/>
          <Route exact path='/add' element={<AddVehicle/>}/>
          <Route exact path='/update/:id' element={<UpdateVehicle/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;