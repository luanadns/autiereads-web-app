
DROP TABLE if exists books;

CREATE TABLE books (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(40) NOT NULL
);

INSERT INTO books (title, author) VALUES ('A', 'B');