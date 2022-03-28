CREATE DATABASE proyectoPOO;
USE proyectoPOO;

CREATE TABLE usuario (
	id_usuario VARCHAR(100) PRIMARY KEY,
	nombre_usuario VARCHAR(200),
	contrasenia_usuario VARCHAR(200) 
	
);

CREATE TABLE curso (
	id_curso VARCHAR(100) PRIMARY KEY,
	nombre_curso VARCHAR(200)
);

CREATE TABLE libro (
	id_libro VARCHAR(100) PRIMARY KEY,
	nombre_libro VARCHAR(200),
	id_autor VARCHAR(200),
	anio_publicacion DATE 
);

CREATE TABLE sala (
	id_sala VARCHAR(100) PRIMARY KEY,
	nombre_sala VARCHAR(200),
	cantidad_miembros NUMERIC,
	id_usuario VARCHAR(100)
	
);