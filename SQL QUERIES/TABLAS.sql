CREATE DATABASE proyecto_poo;

USE proyecto_poo;

CREATE TABLE libro (
    id_libro numeric(3),
    nombre_autor varchar(100),
    titulo varchar(50),
    descripcion varchar(500),
    fecha_publicacion varchar(50),
    numero_edicion numeric(2),
    url_imagen_portada varchar(100),
    url_imagen_indice varchar(100),
    url_pdf_libro varchar(200),
    PRIMARY KEY (id_libro)
);

CREATE TABLE seccion_libros (
    id_libro numeric(3),
    id_usuario numeric(3),
    tipo varchar(100),
    PRIMARY KEY (id_libro, id_usuario, tipo),
    FOREIGN KEY (id_libro) REFERENCES libro(id_libro),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
    
);

CREATE TABLE categoria_libro (
    id_categoria numeric(3),
    nombre_categoria varchar(50),
    PRIMARY KEY (id_categoria)
);

CREATE TABLE subcategoria_libro (
	 id_subcategoria NUMERIC(3),
    id_categoria numeric(3),
    nombre_subcategoria varchar(50),
    id_libro numeric(3),
    PRIMARY KEY(id_subcategoria, id_categoria, nombre_subcategoria, id_libro),
    FOREIGN KEY (id_categoria) REFERENCES categoria_libro(id_categoria),
    FOREIGN KEY (id_libro) REFERENCES libro(id_libro)
    
);

CREATE TABLE usuario (
    id_usuario numeric(3),
    nombres varchar(50),
    apellidos varchar(50),
    email varchar(50),
    contrasenia varchar(50),
    PRIMARY KEY (id_usuario)
);

