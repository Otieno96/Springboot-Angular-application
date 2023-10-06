package odhiambo.net.userms.Springboot.Angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import odhiambo.net.userms.Springboot.Angular.model.User;

public interface UserRepository extends JpaRepository <User , Integer>{
    
}
