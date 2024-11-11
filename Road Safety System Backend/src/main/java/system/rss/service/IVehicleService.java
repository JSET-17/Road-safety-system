package system.rss.service;

import java.time.LocalDate;
import system.rss.model.Vehicle;

import java.util.List;

public interface IVehicleService {

    public List<Vehicle> readVehicle();

    public Vehicle readVehicleById(Integer id);

    public Vehicle readVehicleByRegistrationCar(String registrationCar);

    public Vehicle saveVehicle(Vehicle vehicle);

    public List<Vehicle> getByExpirationSOAT(LocalDate initDate, LocalDate finalDate);

    public List<Vehicle> getByNearPreventiveMaintenance(LocalDate initDate, LocalDate finalDate);

    public List<Vehicle> getByNearTechnomechanicalReview(LocalDate initDate, LocalDate finalDate);

    public List<Vehicle> getByDefeated(LocalDate initDate, LocalDate finalDate);
}
