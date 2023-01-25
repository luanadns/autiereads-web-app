DROP TABLE if exists books; 

CREATE TABLE books(id INT NOT NULL AUTO_INCREMENT, 
name VARCHAR(100) not null, 
author VARCHAR(40),
genre VARCHAR(20),
description VARCHAR(500),
PRIMARY KEY (id));