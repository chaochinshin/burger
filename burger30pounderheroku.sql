
USE ar4ueju63ycxflz;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
INSERT INTO burger (burger_name) VALUES ('Hamburger');
INSERT INTO burger (burger_name) VALUES ('Cheeseburger');
INSERT INTO burger (burger_name, devoured) VALUES ('Mushroomburger', true);
INSERT INTO burger (burger_name, devoured) VALUES ('BigMac', true);
INSERT INTO burger (burger_name, devoured) VALUES ('Baconburger', true);
INSERT INTO burger (burger_name) VALUES ('Rodeoburger');


CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
INSERT INTO burger (burger_name) VALUES ('Hamburger');
INSERT INTO burger (burger_name) VALUES ('Cheeseburger');
INSERT INTO burger (burger_name, devoured) VALUES ('Mushroomburger', true);
INSERT INTO burger (burger_name, devoured) VALUES ('BigMac', true);
INSERT INTO burger (burger_name, devoured) VALUES ('Baconburger', true);
INSERT INTO burger (burger_name) VALUES ('Rodeoburger');

