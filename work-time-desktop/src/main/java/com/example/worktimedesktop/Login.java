package com.example.worktimedesktop;

import lombok.SneakyThrows;
import org.springframework.stereotype.Component;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URI;

/**
 * @author nafis
 * @since 23.05.2022
 */

public class Login extends JFrame{
    private JTextField textField1;
    private JTextField textField2;
    private JButton loginButton;
    private JLabel nameField;
    private JLabel passwordField;

    private JFrame jFrame;

    public Login() {
        initializeJFrame();
        initializeComponents();
        this.setVisible(true);

        jFrame = this;
        loginButton.addActionListener(new ActionListener() {
            @SneakyThrows
            @Override
            public void actionPerformed(ActionEvent e) {

                if(textField1.getText().equals("employee")){
                    if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                        Desktop.getDesktop().browse(new URI("http://localhost:3000/employee"));
                    }
                } else {
                    if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                        Desktop.getDesktop().browse(new URI("http://localhost:3000/manager"));
                    }
                }

                jFrame.setVisible(false);
            }
        });
    }

    private void initializeJFrame() {
        this.setTitle("Login");
        this.setSize(300, 300);
        this.setResizable(true);
        this.setLayout(new GridLayout(5,1,5,5));

        Dimension dimension = Toolkit.getDefaultToolkit().getScreenSize();
        int x = (int) ((dimension.getWidth() - this.getWidth()) / 2);
        int y = (int) ((dimension.getHeight() - this.getHeight()) / 2);
        this.setLocation(x, y);
    }

    private void initializeComponents() {
        nameField = new JLabel("Имя");
        nameField.setHorizontalAlignment(JLabel.CENTER);

        textField1 = new JTextField();

        passwordField = new JLabel("Пароль");
        passwordField.setHorizontalAlignment(JLabel.CENTER);

        textField2 = new JTextField();

        loginButton = new JButton("Login");

        this.add(nameField,0);
        this.add(textField1,1);
        this.add(passwordField,2);
        this.add(textField2,3);
        this.add(loginButton,4);
    }
}
