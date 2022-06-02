package com.example.worktimeserver.controller;

import com.example.worktimeserver.domain.entity.Duration;
import com.example.worktimeserver.domain.entity.Task;
import com.example.worktimeserver.repository.DurationRepository;
import com.example.worktimeserver.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * @author nafis
 * @since 24.05.2022
 */

@RestController
@RequiredArgsConstructor
public class DurationController {

    private final TaskRepository taskRepository;
    private final DurationRepository durationRepository;

    @PatchMapping("/duration/update-start-time")
    public void updateStartTime() {
        Duration duration = durationRepository.findByIsLast(true);

        //Get task id from uri (last number) example: http://localhost:8080/tasks/50
        String taskUri = duration.getTaskUri();
        String[] path = taskUri.split("/");
        Integer taskId = Integer.parseInt(path[path.length - 1]);

        Task task = taskRepository.getOne(taskId);
        if (task.getType().getName().equals("Активный")) {
            duration.setStartTime(new Date());
            System.out.println("set new start time");
        }
        System.out.println("called");

        durationRepository.save(duration);
    }
}
