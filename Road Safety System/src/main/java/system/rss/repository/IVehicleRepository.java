package system.rss.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import system.rss.model.Vehicle;

public interface IVehicleRepository extends JpaRepository<Vehicle, Integer> {
}
