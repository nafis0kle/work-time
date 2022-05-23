package com.example.worktimeserver.repository;

import com.example.worktimeserver.domain.entity.User;
import com.example.worktimeserver.domain.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author nafis
 * @since 12.04.2022
 */

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findAllByRole(Role role);
}
