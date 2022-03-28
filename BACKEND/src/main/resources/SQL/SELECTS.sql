-- Información de usuario para la autenticación
SELECT * FROM usuario;

-- Información del libro
SELECT * FROM libro;

-- Información de usuario
SELECT nombres, apellidos, email FROM usuario WHERE id_usuario = 1; 

-- favoritos
SELECT l.id_libro FROM libro l JOIN seccion_libros sl ON sl.id_libro=l.id_libro 
JOIN usuario u ON u.id_usuario=sl.id_usuario
WHERE tipo = 'F' AND sl.id_usuario = 1;   

SELECT l.id_libro FROM libro l JOIN seccion_libros sl ON sl.id_libro=l.id_libro 
JOIN usuario u ON u.id_usuario=sl.id_usuario
WHERE tipo = 'F' AND sl.id_usuario = 2;   

-- guardados
SELECT l.id_libro FROM libro l JOIN seccion_libros sl ON sl.id_libro=l.id_libro 
JOIN usuario u ON u.id_usuario=sl.id_usuario
WHERE tipo = 'G' AND u.id_usuario = 1;  

SELECT l.id_libro FROM libro l JOIN seccion_libros sl ON sl.id_libro=l.id_libro 
JOIN usuario u ON u.id_usuario=sl.id_usuario
WHERE tipo = 'G' AND u.id_usuario = 2; 

-- obtenerLibro
SELECT * FROM libro WHERE id_libro=1;

-- traer categoria
SELECT * FROM categoria_libro; 

-- traer subcat por categoria
SELECT distinct nombre_subcategoria FROM subcategoria_libro WHERE id_categoria = 1; 

 -- traer libros por subcategoria
SELECT l.* FROM libro l JOIN subcategoria_libro subl ON l.id_libro=subl.id_libro
WHERE id_subcategoria = 6;
