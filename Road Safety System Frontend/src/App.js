import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {VehiclesList} from './vehicles/VehiclesList';
import { AddVehicle } from './vehicles/AddVehicle';
import { Home } from './home/Home';

const App = () => {
  return (
    <div className='container'>       
      <BrowserRouter>
        <Routes>
          <Route exact path='/vehicles' element={<VehiclesList/>}/>
          <Route exact path='/add' element={<AddVehicle/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;