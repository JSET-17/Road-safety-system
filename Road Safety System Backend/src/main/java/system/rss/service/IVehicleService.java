package system.rss.service;

import system.rss.model.Vehicle;

import java.util.List;

public interface IVehicleService {
    public List<Vehicle> readVehicle();
    public Vehicle readVehicleById(Integer id);
    public Vehicle readVehicleByRegistrationCar(String registrationCar);
    public Vehicle saveVehicle(Vehicle vehicle);
}
