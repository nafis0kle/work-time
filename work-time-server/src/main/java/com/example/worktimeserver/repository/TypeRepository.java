package com.example.worktimeserver.repository;

import com.example.worktimeserver.domain.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author nafis
 * @since 01.06.2022
 */

@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {
}
