package system.rss.service;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import system.rss.model.Vehicle;
import system.rss.repository.IVehicleRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService implements IVehicleService {

    @Autowired
    private IVehicleRepository iVehicleRepository;

    @Override
    public List<Vehicle> readVehicle() {
        return iVehicleRepository.findAll();
    }

    @Override
    public List<Vehicle> readVehiclesByStatus(Integer status) {
        return iVehicleRepository.findByStatus(status);
    }

    @Override
    public Vehicle readVehicleById(Integer id) {
        return iVehicleRepository.findById(id).orElse(null);
    }

    @Override
    public Vehicle readVehicleByRegistrationCar(String registrationCar) {
        return iVehicleRepository.findByRegistrationCar(registrationCar).orElse(null);
    }

    @Override
    public Vehicle saveVehicle(Vehicle vehicle) {
        return iVehicleRepository.save(vehicle);
    }

    @Override
    public List<Vehicle> getByExpirationSOAT(LocalDate initDate, LocalDate finalDate) {
        return iVehicleRepository.findByExpirationSOAT(initDate, finalDate).orElse(null);
    }

    @Override
    public List<Vehicle> getByNearPreventiveMaintenance(LocalDate initDate, LocalDate finalDate) {
        return iVehicleRepository.findByExpirationSOAT(initDate, finalDate).orElse(null);
    }

    @Override
    public List<Vehicle> getByNearTechnomechanicalReview(LocalDate initDate, LocalDate finalDate) {
        return iVehicleRepository.findByExpirationSOAT(initDate, finalDate).orElse(null);
    }

    @Override
    public List<Vehicle> getByDefeated(LocalDate initDate, LocalDate finalDate) {
        return iVehicleRepository.findByExpirationSOAT(initDate, finalDate).orElse(null);
    }

}
