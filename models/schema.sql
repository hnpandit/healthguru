DROP DATABASE IF EXISTS healthguru_db;
CREATE DATABASE healthguru_db;
USE healthguru_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    zipcode varchar(10) NOT NULL,
    birthyear int(5) NOT NULL,
    gender varchar(10) NOT NULL,
    email varchar(100) NOT NULL,
    cell  varchar(50) NOT NULL,
    height int(4) NOT NULL,
    weight int(4) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE userhealthproviders
(
	id int NOT NULL AUTO_INCREMENT,
    uid int NOT NULL,
    hpid varchar(50) NOT NULL,
	lastvisit DATE NOT NULL,
    nextvisit DATE,
	PRIMARY KEY (id),
    CONSTRAINT FK_userhp FOREIGN KEY (uid) REFERENCES users(id)
);

CREATE TABLE usermedications
(
	id int NOT NULL AUTO_INCREMENT,
    uid int NOT NULL,
    medicationname varchar(50) NOT NULL,
    dosage varchar(50) NOT NULL,
    numrefill int(4) NOT NULL,
	nextrefilldate DATE NOT NULL,
    healthcondition varchar(100) NOT NULL,
	PRIMARY KEY (id),
    CONSTRAINT FK_usermedication FOREIGN KEY (uid) REFERENCES users(id)
);

CREATE TABLE userprocedures
(
	id int NOT NULL AUTO_INCREMENT,
    uid int NOT NULL,
    procedurename varchar(1000) NOT NULL,
    proceduredate DATE NOT NULL,
	PRIMARY KEY (id),
    CONSTRAINT FK_userprocedure FOREIGN KEY (uid) REFERENCES users(id)
);