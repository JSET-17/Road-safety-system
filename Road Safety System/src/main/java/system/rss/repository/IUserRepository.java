package system.rss.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import system.rss.model.User;

public interface IUserRepository extends JpaRepository<User, Integer> {
}
