package com.example.worktimedesktop;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * @author nafis
 * @since 24.05.2022
 */

@Component
public class MyScheduler {
    private Long oldTime = System.currentTimeMillis() / 1000L;

    @Scheduled(fixedDelay = 1000)
    public void isSleep() {
        Long currentTime = System.currentTimeMillis() / 1000L;

        if( (currentTime - oldTime) > 2) {

            byte[] image = WebClient.create("http://localhost:8080/duration/update-start-time")
                    .patch()
                    .accept()
                    .retrieve()
                    .bodyToMono(byte[].class)
                    .block();
        } else {
            oldTime = currentTime;
        }
    }
}
