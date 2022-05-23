package com.example.worktimedesktop;

import java.awt.Desktop;
import java.net.URI;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.net.URISyntaxException;

@SpringBootApplication
public class WorkTimeDesktopApplication {

    public static void main(String[] args) throws IOException, URISyntaxException {
        login login = new login();
        login.start();
        if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
            Desktop.getDesktop().browse(new URI("http://localhost:3000/employee"));
        }
        //Runtime.getRuntime().exec("Rundll32.exe powrprof.dll,SetSuspendState Sleep");
    }

}
