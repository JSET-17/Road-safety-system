import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigation } from '../common_files/Navigation';
import { Link, useParams } from 'react-router-dom';

export const VehiclesList = () => {

    const url = "http://localhost:8080/rss-app/vehicles";

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        uploadVehicles();
    }, []);

    const uploadVehicles = async () => {
        const result = await axios.get(url);
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
                                <td className='text-center'>
                                    <div>
                                        <Link to={`/update/${vehicle.id}`}
                                            className='btn btn-warning btn-sm me-3'>
                                            Modificar
                                        </Link>
                                        <Link className='btn btn-danger btn-sm me-3'>
                                            Eliminar
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link">Anterior</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Siguiente</a>
                    </li>
                </ul>
            </nav>                   
        </div>
    )
}
