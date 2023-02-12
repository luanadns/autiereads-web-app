DROP TABLE if exists books;
DROP TABLE if exists comments;

CREATE TABLE books (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(40) NOT NULL,
  description MEDIUMTEXT NOT NULL,
  image VARCHAR(300) NOT NULL
);

CREATE TABLE comments (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(20),
  commenText VARCHAR(500),
  book_id int NOT NULL
);

ALTER TABLE comments
ADD FOREIGN KEY (book_id) REFERENCES books(id);

INSERT INTO books (title, author, description, image) 
VALUES ("Spectrum Women", "Barb Cook", "Barb Cook and 14 other autistic women describe life from a female autistic perspective, and present empowering, helpful and supportive insights from their personal experience for fellow autistic women. Dr. Michelle Garnett's comments validate and expand the experiences described from a clinician's perspective, and provide extensive recommendations.", "https://iili.io/H1Dkc7t.jpg"),
("The Electricity of Every Living Thing", "Katherine May", "A life-affirming and perspective-shifting memoir of one woman's walk in the wilds as she comes to terms with her autism diagnosis. In August 2015, Katherine May set out to walk the 630-mile South West Coast Path. She wanted to understand why she had stopped coping with everyday life; why motherhood had been so overwhelming and isolating, and why the world felt full of inundation and expectations she can't meet. Setting her feet down on the rugged and difficult path by the sea, the answer begins to unfold. It's a chance encounter with a voice on the radio that sparks a realisation that she has Asperger's Syndrome. The Electricity of Every Living Thing tells the story of the year in which Katherine comes to terms with her diagnosis. It leads to a re-evaluation of her life so far - a kinder one, which finally allows her to be different rather than simply awkward, arrogant or unfeeling. The physical and psychological journeys become inextricably entwined, and as Katherine finds her way across the untameable coast, she also finds the way to herself. This book is a life-affirming exploration of wild landscapes, what it means to be different and, above all, how we can all learn to make peace within our own unquiet minds.", "https://iili.io/H1Dkw2S.jpg"),
("Autistic Community and The Neurodiversity Movement", "Steven K. Kapp", "The first book to bring together a large collection of neurodivergent contributors to talk about events that shaped the movement, and which they themselves were involved with. Focuses on activists' direct experience effecting change for people who identify as autistic rather than abstract accounts that reflect on autism's social construction or essence. Provides a one-stop shop for readers interested in the history and ideas of the neurodiversity movement and how these ideas have shaped production of expert and especially lay knowledge about autism. Gathers a collective of autistic activist/academic voices and engages in current theoretical debates around knowledge production and epistemic authority within (critical) research on autism.", "https://iili.io/H1Dv2yX.jpg");

INSERT INTO comments (userName, commenText, book_id) VALUES ("Luana Dias", "This is a meaningful comment", 1)
