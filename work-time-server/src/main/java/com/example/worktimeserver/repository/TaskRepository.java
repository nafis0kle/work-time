package com.example.worktimeserver.repository;

import com.example.worktimeserver.domain.entity.Project;
import com.example.worktimeserver.domain.entity.Task;
import com.example.worktimeserver.domain.enums.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author nafis
 * @since 12.04.2022
 */

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
    List<Task> findAllByStatus(TaskStatus status);
    List<Task> findAllByStatusIn(List<TaskStatus> statuses);
    List<Task> findAllByProject(Project project);
}
