package com.example.worktimeserver.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * @author nafis
 * @since 12.04.2022
 */

@Entity
@Getter
@Setter
@Table(name = "durations")
public class Duration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "work_date")
    private Date workDate;

    @Column(name = "time_count")
    private Float timeCount;

    @Column(name = "start_time")
    private Date startTime;

    @Column(name = "is_last")
    private Boolean isLast;

    private String taskUri;

    @ManyToOne(fetch = FetchType.LAZY)
    private User employee;
}
