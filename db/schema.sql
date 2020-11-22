CREATE DATABASE gourmet_food_db;

USE gourmet_food_db;

CREATE TABLE foods (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    food_name VARCHAR(50),
    ingredients VARCHAR(200),
    pic_url VARCHAR(200),
    devo_ye_ured BOOLEAN
);