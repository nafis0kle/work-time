package com.example.worktimedesktop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class WorkTimeDesktopApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorkTimeDesktopApplication.class, args);
        System.setProperty("java.awt.headless", "false");
        Login login = new Login();
        //Runtime.getRuntime().exec("Rundll32.exe powrprof.dll,SetSuspendState Sleep");
    }

}
