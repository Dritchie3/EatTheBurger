DROP DATABASE IF EXISTS eat_burgerDB;-- 

CREATE DATABASE eat_burgerDB;

USE eat_burgerDB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(255) NOT NULL,
    devoured INT NULL,
    PRIMARY KEY (id)
);