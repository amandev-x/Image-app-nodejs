CREATE TABLE images
(
  imageid SERIAL PRIMARY KEY,
  description TEXT,
  url TEXT
);

ALTER TABLE images
  OWNER TO dockeruser;
ALTER ROLE dockeruser CONNECTION LIMIT -1;

INSERT INTO images (description, url) VALUES ('cheetah', 'images/cheetah.webp');
INSERT INTO images (description, url) VALUES ('masai-mara', 'images/discover-masai-mara-facts.webp');
INSERT INTO images (description, url) VALUES ('elephant', 'images/elephant.webp');
INSERT INTO images (description, url) VALUES ('enhance', 'images/enhance.webp');
INSERT INTO images (description, url) VALUES ('giraffe', 'images/giraffe.webp');
INSERT INTO images (description, url) VALUES ('lion', 'images/lion.webp');
INSERT INTO images (description, url) VALUES ('Wildlife', 'images/Wildlife.webp');
INSERT INTO images (description, url) VALUES ('Zebras', 'images/zebras-in-the-morning.webp');

