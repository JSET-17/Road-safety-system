import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigation } from '../common_files/Navigation';

export const VehiclesList = () => {

    const urlVehicles = "http://localhost:8080/rss-app/vehicles";

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        uploadVehicles();
    }, []);

    const uploadVehicles = async () => {
        const result = await axios.get(urlVehicles);
        console.log("Result upload vehicles");
        console.log(result.data);
        setVehicles(result.data);
    }

    return (
        <div className='container'>
            <Navigation />
            
            <div className='container text-center'>
                <h3>Vehiculos</h3>
            </div>

            <table className="table table-striped table-hover table-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Placa</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Propietario</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vehicles.map((vehicle, idMap) => (
                            <tr key={idMap}>
                                <td scope="row">{vehicle.id}</td>
                                <td>{vehicle.typeVehicle}</td>
                                <td>{vehicle.registrationCar}</td>
                                <td>{vehicle.manufacturingDate}</td>
                                <td>{vehicle.owner}</td>
                                <td>Detalles Modificar Eliminar</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
