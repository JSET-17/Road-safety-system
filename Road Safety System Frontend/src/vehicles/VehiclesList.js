import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigation } from '../common_files/Navigation';
import { Link } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import "./VehicleList.css";

export const VehiclesList = () => {

    const url = "http://localhost:8080/rss-app/vehicles";

    const [vehicles, setVehicles] = useState([]);
    const [selected, setSelected] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

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
        try {
            await axios.put(`${url}/delete/${selected.id}`, selected);
            setToastMessage('Vehiculo eliminado exitosamente.');
            setShowToast(true);
            uploadVehicles();
        } catch (error) {
            console.error('Error al eliminar el vehiculo: ', error);
        }
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
                                        <i className="bi bi-file-earmark-text-fill me-3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop2"
                                            onClick={() => vehicleSelected(vehicle.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                fill="currentColor"
                                                className="bi bi-file-earmark-text-fill text-secondary"
                                                viewBox="0 0 16 16">
                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
                                            </svg>
                                        </i>
                                        <Link to={`/update/${vehicle.id}`}
                                            className='btn btn-warning btn-sm me-3'
                                        >
                                            Modificar
                                        </Link>
                                        <button type="button"
                                            className='btn btn-danger btn-sm me-3'
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop1"
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

            <div className="modal fade modal-sm" id="staticBackdrop1" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <i class="bi bi-trash3-fill me-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="30"
                                    fill="currentColor"
                                    class="bi bi-trash3-fill text-danger"
                                    viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                </svg>
                            </i>
                            <h1 className="modal-title fs-5"
                                id="staticBackdropLabel">Eliminar</h1>
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
                                    Eliminar
                                </button>
                                <button type="button" className="btn btn-secondary fs-6"
                                    data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade modal-sm" id="staticBackdrop2" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <i className="bi bi-info-circle-fill me-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="30"
                                    fill="currentColor"
                                    className="bi bi-info-circle-fill text-warning"
                                    viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                                </svg>
                            </i>
                            <h1 className="modal-title fs-5"
                                id="staticBackdropLabel">Vehiculo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Tipo de vehículo:__<strong>{selected.typeVehicle}</strong><br />
                            Placa:__<strong>{selected.registrationCar}</strong><br />
                            Modelo:__<strong>{selected.manufacturingDate}</strong><br />
                            Propietario:__<strong>{selected.owner}</strong><br />
                            Vin:__<strong>{selected.vin}</strong><br />
                            N. de chasis:__<strong>{selected.chassisNumber}</strong><br />
                            Vig. SOAT:__<strong>{selected.soatValidity}</strong><br />
                            Vig. técnico mecánica:__<strong>{selected.mechanicalTechnicianValidity}</strong><br />
                            Fec. de mantenimiento:__<strong>{selected.preventiveMaintenanceDate}</strong><br />
                            Frec. del mantenimiento:__<strong>{selected.frequencyPreventiveMaintenance}</strong><br />
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer position="top-end" autoHide delay={3000}>
                <Toast onClose={() => setShowToast(false)} show={showToast}>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Info.</strong>
                    </Toast.Header>
                    <Toast.Body className=''>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>

        </div>
    )
}
