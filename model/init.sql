DROP TABLE if exists books; 

CREATE TABLE books (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(40) NOT NULL
)

insert into books (title, author)
VALUES (
    ('Spectrum Women: Walking The Beat of Autism', 'Barb Cook'),
    ('The Electricity of Every Living Thing', 'Katherine May'),
    ('Don`t mourn for us', 'Jim Sinclair')
)