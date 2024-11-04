package system.rss.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String typeVehicle;
    private String registrationCar;
    private Integer manufacturingDate;
    private String owner;
    private LocalDate soatValidity;
    private LocalDate mechanicalTechnicianValidity;
    private String chassisNumber;
    private String vin;
    private LocalDate preventiveMaintenanceDate;
    private String frequencyPreventiveMaintenance;
    private Integer status;
}
