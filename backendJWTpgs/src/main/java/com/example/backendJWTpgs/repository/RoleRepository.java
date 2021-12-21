package com.example.backendJWTpgs.repository;

import com.example.backendJWTpgs.models.ERole;
import com.example.backendJWTpgs.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);

}
