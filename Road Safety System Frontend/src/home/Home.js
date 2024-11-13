import React from "react";
import { Navigation } from "../common_files/Navigation";
import "./Styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const url = "http://localhost:8080/rss-app/vehicles/settype";
  let navigate = useNavigate();

  const setViewType = async (viewType) => {
    await axios.request(`${url}/${viewType}`);
    navigate("/vehicles");
    resetViewType(0);
  };

  const resetViewType = async (viewType) => {
    await axios.request(`${url}/${viewType}`);
  };

  return (
    <div className="container">
      <Navigation />
      <div className="container text-center mt-3 mb-4">
        <h2>
          <strong>Inicio</strong>
        </h2>
      </div>
      <form className="row d-flex justify-content-center">
        <div className="col">
          <div className="mb-3">
            <div
              className="card text-center btn btn-secondary"
              id="main-card"
              onClick={() => setViewType(1)}
            >
              <div className="card-body">
                <h5 className="card-title" id="card-title">
                  Vehiculos proximos a renovación del SOAT
                </h5>
                <h5 className="card-text">6</h5>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div
              className="card text-center btn btn-secondary"
              id="main-card"
              onClick={() => setViewType(2)}
            >
              <div className="card-body">
                <h5 className="card-title">
                  Vehiculos proximos a renovación de la tecnomecánica
                </h5>
                <h5 className="card-text">6</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <div
              className="card text-center btn btn-secondary"
              id="main-card"
              onClick={() => setViewType(3)}
            >
              <div className="card-body">
                <h5 className="card-title">
                  Vehiculos proximos por mantenimiento preventivo
                </h5>
                <h5 className="card-text">6</h5>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div
              className="card text-center btn btn-danger"
              id="main-card-danger"
              onClick={() => setViewType(4)}
            >
              <div className="card-body">
                <h5 className="card-title">VENCIDOS</h5>
                <h5 className="card-text">6</h5>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
