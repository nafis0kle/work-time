CREATE SEQUENCE hibernate_sequence START 1;

create table users (
                       id int primary key,
                       name varchar(50) not null,
                       role varchar(50) not null,
                       password varchar(50) not null unique
);

create table categories (
                            id int primary key,
                            name varchar(50) not null unique
);

create table tasks (
                       id int primary key,
                       name varchar(50) not null,
                       description varchar(255),
                       status varchar(50) not null,
                       category_id int references categories(id)
);

create table times (
                       id int primary key,
                       work_date date default current_date,
                       time_count float default 0.0,
                       start_time time default current_time,
                       is_last boolean default true,
                       employee_id int references users(id)
);


