package com.example.worktimeserver.domain.entity;

import com.example.worktimeserver.domain.enums.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.*;
import static javax.persistence.CascadeType.REFRESH;
import static lombok.AccessLevel.PRIVATE;

/**
 * @author nafis
 * @since 12.04.2022
 */

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String password;

    @Setter(PRIVATE)
    @OneToMany(mappedBy = "employee",
            orphanRemoval = true,
            cascade = {PERSIST, MERGE, DETACH, REFRESH})
    private List<Duration> durations = new ArrayList<>();

    @Setter(PRIVATE)
    @OneToMany(mappedBy = "employee",
            orphanRemoval = true,
            cascade = {PERSIST, MERGE, DETACH, REFRESH})
    private List<Task> tasks = new ArrayList<>();
}
