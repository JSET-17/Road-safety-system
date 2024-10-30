package system.rss.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

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
    private LocalDateTime manufacturingDate;
    private String owner;
    private LocalDateTime soatValidity;
    private LocalDateTime MechanicalTechnicianValidity;
    private String vin;
    private String chassisNumber;
    private boolean status;
}
