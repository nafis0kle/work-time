package com.example.worktimeserver.repository;

import com.example.worktimeserver.domain.entity.Duration;
import com.example.worktimeserver.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author nafis
 * @since 12.04.2022
 */

@Repository
public interface DurationRepository extends JpaRepository<Duration, Integer> {
    Duration findByIsLast(Boolean isLast);
}
