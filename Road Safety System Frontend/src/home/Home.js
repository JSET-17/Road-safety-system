import React from "react";
import { Navigation } from "../common_files/Navigation";
import "./Styles.css";

export const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="container text-center mt-3 mb-4">
        <h2>Inicio</h2>
      </div>
      <form className="row d-flex justify-content-center">
        <div className="col">
          <div className="mb-3">
            <div class="card text-center btn btn-secondary">
              <div class="card-body">
                <h5 class="card-title">
                  Vehiculos proximos a renovación del SOAT
                </h5>
                <h5 class="card-text">6</h5>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div class="card text-center btn btn-secondary">
              <div class="card-body">
                <h5 class="card-title">
                  Vehiculos proximos a renovación de la Tecnico Mecanica
                </h5>
                <h5 class="card-text">6</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <div class="card text-center btn btn-secondary">
              <div class="card-body">
                <h5 class="card-title">
                  Vehiculos proximos por mantenimiento preventivo
                </h5>
                <h5 class="card-text">6</h5>
              </div>
            </div>
          </div>
          <div className="mb-3"></div>
          <div class="card text-center btn btn-secondary">
            <div class="card-body">
              <h5 class="card-title">VENCIDOS</h5>
              <h5 class="card-text">6</h5>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
