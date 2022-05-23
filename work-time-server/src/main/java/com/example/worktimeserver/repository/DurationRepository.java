package com.example.worktimeserver.repository;

import com.example.worktimeserver.domain.entity.Duration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author nafis
 * @since 12.04.2022
 */

@Repository
public interface DurationRepository extends JpaRepository<Duration, Integer> {
    Duration findByEmployeeIdAndIsLast(Integer id, boolean isLast);
}
