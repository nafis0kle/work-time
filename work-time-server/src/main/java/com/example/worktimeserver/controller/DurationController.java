package com.example.worktimeserver.controller;

import com.example.worktimeserver.domain.entity.Duration;
import com.example.worktimeserver.repository.DurationRepository;
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
    private final DurationRepository durationRepository;

    @PatchMapping("/duration/update-start-time")
    public void updateStartTime() {
        Duration duration = durationRepository.findByEmployeeIdAndIsLast(31, true);
        duration.setStartTime(new Date());
        duration.setTaskUri(null);

        durationRepository.save(duration);
    }
}
