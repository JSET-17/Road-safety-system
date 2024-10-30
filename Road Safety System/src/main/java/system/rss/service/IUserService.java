package system.rss.service;

import system.rss.model.User;

import java.util.List;

public interface IUserService {
    public List<User> readUser();
    public User readUserById(Integer id);
    public User saveUser(User user);
}