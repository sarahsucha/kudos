DROP TABLE IF EXISTS kudos;

CREATE TABLE kudos
(
 kudo_id serial primary key,
 name_from varchar(80) not null,
 name_to varchar(80) not null,
 description text not null
);
