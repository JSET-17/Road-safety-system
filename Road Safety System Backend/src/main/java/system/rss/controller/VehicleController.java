package system.rss.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import system.rss.model.Vehicle;
import system.rss.service.IVehicleService;

import java.util.List;

@RestController
@RequestMapping("rss-app")// http://localhost:8080/rss-app/ - Puerto del backend
@CrossOrigin(value = "http://localhost:3000") // Puerto del frontend "React JS"
public class VehicleController {
    private static final Logger logger = LoggerFactory.getLogger(VehicleController.class);

    @Autowired
    private IVehicleService iVehicleService;

    @GetMapping("/vehicles")// http://localhost:8080/rss-app/vehicles
    public List<Vehicle> getVehicle(){
        var vehicles = iVehicleService.readVehicle();

        vehicles.forEach((vehicle -> logger.info(vehicle.toString())));
        return vehicles;
    }
}