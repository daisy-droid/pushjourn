

CREATE TABLE users (
    userID serial PRIMARY KEY NOT NULL,
    LastName varchar(255),
    FirstName varchar(255),
    email varchar(255),
    password varchar(255)
);
CREATE TABLE notes (
  
	entryId serial primary key,
	userID int,
    title varchar(255),
    body text
)