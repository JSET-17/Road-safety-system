package system.rss.repository;

import java.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import system.rss.model.Vehicle;

import java.util.List;
import java.util.Optional;

public interface IVehicleRepository extends JpaRepository<Vehicle, Integer> {
    @Query("SELECT v FROM Vehicle v WHERE v.registrationCar = :registrationCar")
    Optional<Vehicle> findByRegistrationCar(@Param("registrationCar") String registrationCar);


    @Query("SELECT v FROM Vehicle v WHERE v.soatValidity BETWEEN :startDate AND :endDate")
    Optional<List<Vehicle>> findByExpirationSOAT(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    @Query("SELECT v FROM Vehicle v WHERE v.status = :status")
    List<Vehicle> findByStatus(@Param("status") Integer status);

    /**
     * Esto no funciona, no se crea la query por defecto, toca hacerlo de forma
     * personalizada, tal cual como esta arriba.
     */
    //List<Vehicle> findByRegistrationCar(String RegistrationCar);
}
