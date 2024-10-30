package system.rss.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import system.rss.model.User;
import system.rss.repository.IUserRepository;

import java.util.List;

@Service
public class UserService implements IUserService{
    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public List<User> readUser() {
        return iUserRepository.findAll();
    }

    @Override
    public User readUserById(Integer id) {
        return iUserRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return iUserRepository.save(user);
    }
}