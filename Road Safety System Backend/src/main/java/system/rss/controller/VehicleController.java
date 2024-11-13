package system.rss.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import system.rss.exception.ResourceNotFoundException;
import system.rss.model.Vehicle;
import system.rss.service.IVehicleService;

import java.util.List;

@RestController
@RequestMapping("rss-app")// http://localhost:8080/rss-app/ - Puerto del backend
@CrossOrigin(value = "http://localhost:3000") // Puerto del frontend "React JS"
public class VehicleController {

    private final int SOAT_RENOVATION = 1;
    private final int PREVENTIVE_MAINTENANCE = 2;
    private final int TECHNOMECHANICAL_REVIEW = 3;
    private final int DEFEATED = 4;

    private int viewTypeSelected = 0;

    private LocalDate today = LocalDate.now();
    private LocalDate sevenDaysPlus = today.plusDays(7); // Restar 7 días

    private static final Logger logger = LoggerFactory.getLogger(VehicleController.class);

    @Autowired
    private IVehicleService iVehicleService;

    @GetMapping("/vehicles")// http://localhost:8080/rss-app/vehicles
    public List<Vehicle> getVehicle() {
        List<Vehicle> vehicles = new ArrayList<>();

        switch (viewTypeSelected) {
            case SOAT_RENOVATION:
                vehicles = iVehicleService.getByExpirationSOAT(today, sevenDaysPlus);
                break;
            case PREVENTIVE_MAINTENANCE:
                vehicles = iVehicleService.getByNearPreventiveMaintenance(today, sevenDaysPlus);
                break;
            case TECHNOMECHANICAL_REVIEW:
                vehicles = iVehicleService.getByNearTechnomechanicalReview(today, sevenDaysPlus);
                break;
            case DEFEATED:
                vehicles = iVehicleService.getByDefeated(today, sevenDaysPlus);
                break;
            default:
                vehicles = iVehicleService.readVehicle();
                vehicles.forEach((vehicle -> logger.info(vehicle.toString())));
        }
        return vehicles;
    }

    @PostMapping("/vehicles")
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        logger.info("Vehicle to add: " + vehicle);

        return iVehicleService.saveVehicle(vehicle);
    }

    @GetMapping("/vehicles/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Integer id) {
        Vehicle vehicle = iVehicleService.readVehicleById(id);

        if (vehicle == null) {
            throw new ResourceNotFoundException("The vehicle with id " + id
                    + " was not found.");
        }

        return ResponseEntity.ok(vehicle);
    }

    @GetMapping("/vehicles/searchByRegistrationCar/{registrationCar}")
    public ResponseEntity<Vehicle> getVehicleByRegistrationCar(@PathVariable String registrationCar) {
        Vehicle vehicle = iVehicleService.readVehicleByRegistrationCar(registrationCar);

        if (vehicle == null) {
            throw new ResourceNotFoundException("The vehicle with license plate number" + registrationCar
                    + " was not found.");
        }

        return ResponseEntity.ok(vehicle);
    }

    @PutMapping("/vehicles/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Integer id, @RequestBody Vehicle vehicleSelected) {
        Vehicle vehicle = iVehicleService.readVehicleById(id);

        if (vehicle == null) {
            throw new ResourceNotFoundException("The vehicle with id " + id
                    + " was not found.");
        }

        vehicle.setTypeVehicle(vehicleSelected.getTypeVehicle());
        vehicle.setRegistrationCar(vehicleSelected.getRegistrationCar());
        vehicle.setManufacturingDate(vehicleSelected.getManufacturingDate());
        vehicle.setOwner(vehicleSelected.getOwner());
        vehicle.setVin(vehicleSelected.getVin());
        vehicle.setChassisNumber(vehicleSelected.getChassisNumber());
        vehicle.setSoatValidity(vehicleSelected.getSoatValidity());
        vehicle.setMechanicalTechnicianValidity(vehicleSelected.getMechanicalTechnicianValidity());
        vehicle.setPreventiveMaintenanceDate(vehicleSelected.getPreventiveMaintenanceDate());
        vehicle.setFrequencyPreventiveMaintenance(vehicleSelected.getFrequencyPreventiveMaintenance());
        //vehicle.setStatus(true);
        iVehicleService.saveVehicle(vehicle);

        return ResponseEntity.ok(vehicle);
    }

    @PutMapping("/vehicles/delete/{id}")
    public ResponseEntity<Vehicle> deleteVehicle(@PathVariable Integer id, @RequestBody Vehicle vehicleSelected) {
        Vehicle vehicle = iVehicleService.readVehicleById(id);

        if (vehicle == null) {
            throw new ResourceNotFoundException("The vehicle with id " + id
                    + " was not found.");
        }

        vehicle.setTypeVehicle(vehicleSelected.getTypeVehicle());
        vehicle.setRegistrationCar(vehicleSelected.getRegistrationCar());
        vehicle.setManufacturingDate(vehicleSelected.getManufacturingDate());
        vehicle.setOwner(vehicleSelected.getOwner());
        vehicle.setVin(vehicleSelected.getVin());
        vehicle.setChassisNumber(vehicleSelected.getChassisNumber());
        vehicle.setSoatValidity(vehicleSelected.getSoatValidity());
        vehicle.setMechanicalTechnicianValidity(vehicleSelected.getMechanicalTechnicianValidity());
        vehicle.setPreventiveMaintenanceDate(vehicleSelected.getPreventiveMaintenanceDate());
        vehicle.setFrequencyPreventiveMaintenance(vehicleSelected.getFrequencyPreventiveMaintenance());
        vehicle.setStatus(0);
        iVehicleService.saveVehicle(vehicle);

        return ResponseEntity.ok(vehicle);
    }

    @GetMapping("/vehicles/settype/{type}")
    public void setViewType(@PathVariable Integer type) {
        viewTypeSelected = type;
    }
}
