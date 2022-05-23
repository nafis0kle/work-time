package com.example.worktimeserver.domain.entity;

import com.example.worktimeserver.domain.enums.TaskStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author nafis
 * @since 12.04.2022
 */

@Entity
@Getter
@Setter
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String title;

    private String body;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    private User employee;
}
