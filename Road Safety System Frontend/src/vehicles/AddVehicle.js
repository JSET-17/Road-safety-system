import React, { useState } from 'react'
import { Navigation } from '../common_files/Navigation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddVehicle = () => {

    let navigate = useNavigate();

    const [vehicle, setVehicle] = useState({
        typeVehicle:"",
        registrationCar:"",
        manufacturingDate:"",
        owner:"",
        soatValidity:"",
        mechanicalTechnicianValidity:"",
        vin:"",
        chassisNumber:"",
        preventiveMaintenanceDate:"",
        frequencyPreventiveMaintenance:"",
        status:1

    })

    const{typeVehicle, registrationCar, manufacturingDate, owner,
        soatValidity, mechanicalTechnicianValidity, vin, chassisNumber, 
        preventiveMaintenanceDate, frequencyPreventiveMaintenance, status
    } = vehicle

    const onInputChange = (e) => {
        setVehicle({...vehicle, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8080/rss-app/vehicles";
        await axios.post(url, vehicle);
        navigate("/vehicles");
    }

    return (
        <div className='container'>
            <Navigation />
            <div className='container text-center mt-3 mb-4'>
                <h2>Registro</h2>
            </div>

            <form onSubmit={(e)=>onSubmit(e)} className='row d-flex justify-content-center'>
                <div className='col' />

                <div className="col">
                    <div className='mb-3'>
                        <label for="typeVehicle" className="form-label">
                            Tipo de vehiculo *
                        </label>
                        <select className="form-select form-select-sm"
                                aria-label="Default select example"
                                name='typeVehicle' required={true}
                                value={typeVehicle}
                                onChange={(e)=>onInputChange(e)}>
                            <option selected>--Seleccionar--</option>
                            <option value="Motocicleta">Motocicleta</option>
                            <option value="Automovil">Automovil</option>
                            <option value="Montacarga">Montacarga</option>
                            <option value="Grua">Grua</option>
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label for="manufacturingDate" className="form-label">Modelo *</label>
                        <input type="number" 
                                className="form-control form-control-sm"
                                id="manufacturingDate"
                                name='manufacturingDate'
                                required={true} 
                                value={manufacturingDate}
                                onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label for="vin" className="form-label">
                            Número de motor
                        </label>
                        <input type="text"
                                className="form-control form-control-sm"
                                id="vin"
                                aria-describedby="emailHelp"
                                name='vin'
                                value={vin}
                                onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label for="soatValidity" className="form-label">
                            Vigencia del SOAT
                        </label>
                        <input type="date"
                                className="form-control form-control-sm"
                                id="soatValidity"
                                name='soatValidity'
                                value={soatValidity}
                                onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label for="preventiveMaintenanceDate" className="form-label">
                            Fecha de mantenimiento preventivo
                        </label>
                        <input type="date" 
                                className="form-control form-control-sm"
                                id="preventiveMaintenanceDate"
                                name='preventiveMaintenanceDate' 
                                value={preventiveMaintenanceDate}
                                onChange={(e)=>onInputChange(e)}/>
                    </div>
                </div>

                <div className="col">
                    <div className='mb-3'>
                        <label for="registrationCar" className="form-label">Placa *</label>
                        <input type="text" 
                                className="form-control form-control-sm"
                                id="registrationCar"
                                aria-describedby="emailHelp"
                                name='registrationCar'
                                required={true}
                                value={registrationCar}
                                onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label for="owner" className="form-label">
                            Propietario *
                        </label>
                        <select className="form-select form-select-sm"
                                aria-label="Default select example"
                                name='owner'
                                required={true}
                                value={owner}
                                onChange={(e)=>onInputChange(e)}>
                            <option selected>--Seleccionar--</option>
                            <option value="Afiliado">Afiliado</option>
                            <option value="Asociado">Asociado</option>
                            <option value="Empresa">Empresa</option>
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label for="chassisNumber" className="form-label">
                            Número de chasis
                        </label>
                        <input type="text"
                                className="form-control form-control-sm"
                                id="chassisNumber"
                                name='chassisNumber'
                                value={chassisNumber}
                                onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label for="mechanicalTechnicianValidity" className="form-label">
                            Vigencia de técnico mecánica
                        </label>
                        <input type="date"
                                className="form-control form-control-sm"
                                id="mechanicalTechnicianValidity"
                                aria-describedby="emailHelp"
                                name='mechanicalTechnicianValidity'
                                value={mechanicalTechnicianValidity}
                                onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label for="frequencyPreventiveMaintenance" className="form-label">
                            Frec. del mantenimiento preventivo
                        </label>
                        <select className="form-select form-select-sm"
                                aria-label="Default select example"
                                name='frequencyPreventiveMaintenance'
                                value={frequencyPreventiveMaintenance}
                                onChange={(e)=>onInputChange(e)}>
                            <option selected>--Seleccionar--</option>
                            <option value="1 Mes">1 Mes</option>
                            <option value="2 Meses">2 Meses</option>
                            <option value="3 Meses">3 Meses</option>
                            <option value="4 Meses">4 Meses</option>
                            <option value="5 Meses">5 Meses</option>
                            <option value="6 Meses">6 Meses</option>
                            <option value="7 Meses">7 Meses</option>
                            <option value="8 Meses">8 Meses</option>
                            <option value="9 Meses">9 Meses</option>
                            <option value="10 Meses">10 Meses</option>
                            <option value="11 Meses">11 Meses</option>
                            <option value="12 Año">1 Año</option>
                        </select>
                    </div>
                </div>

                <div className="col" />

                <div className='text-center mt-3'>
                    <button type="submit" className="btn btn-primary me-4">
                        Registrar
                    </button>
                    <a href='/vehicles' className="btn btn-danger">
                        Regresar
                    </a>
                </div>
            </form>
        </div>
    )
}
