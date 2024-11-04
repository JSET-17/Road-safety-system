import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigation } from '../common_files/Navigation';
import { Link } from 'react-router-dom';

export const VehiclesList = () => {

    const url = "http://localhost:8080/rss-app/vehicles";

    const [vehicles, setVehicles] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        uploadVehicles();
    }, []);

    const uploadVehicles = async () => {
        const result = await axios.get(url);
        console.log("Result upload vehicles");
        setVehicles(result.data);
    }

    const vehicleSelected = async (id) => {
        const resultSelected = await axios.get(`${url}/${id}`);
        setSelected(resultSelected.data);
    }

    const vehicleToDelete = async () => {
        await axios.put(`${url}/delete/${selected.id}`, selected);
        uploadVehicles();
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
                                            className='btn btn-warning btn-sm me-3'
                                        >
                                            Modificar
                                        </Link>
                                        <button type="button"
                                            className='btn btn-danger btn-sm me-3'
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                            onClick={() => vehicleSelected(vehicle.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5"
                                id="staticBackdropLabel">Confirmar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¿Está seguro de eliminar el vehiculo de placa
                            "<strong>{selected.registrationCar}</strong>"?
                        </div>
                        <div className="modal-footer">
                            <div className='container text-center'>
                                <button type="button"
                                    className="btn btn-danger me-4 fs-6"
                                    onClick={vehicleToDelete}
                                    data-bs-dismiss="modal"
                                >
                                    Confirmar
                                </button>
                                <button type="button" className="btn btn-secondary fs-6"
                                    data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
