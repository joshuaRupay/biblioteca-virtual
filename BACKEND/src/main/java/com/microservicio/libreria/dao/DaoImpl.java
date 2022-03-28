package com.microservicio.libreria.dao;

import com.microservicio.libreria.dto.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.*;

@Repository
public class DaoImpl implements Dao {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private Connection conexion;

    private void obtenerConexion() throws SQLException {
        conexion = jdbcTemplate.getDataSource().getConnection();
    }

    private void cerrarConexion() throws SQLException {
        try {
            conexion.commit();
            conexion.close();
            conexion = null;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

    }

    @Override
    public List<Libro> obtenerLibros() {
        List<Libro> libros = new ArrayList<>();
        try {
            obtenerConexion();
            Statement sentencia = conexion.createStatement();
            String sql = " SELECT * FROM libro ";
            ResultSet resultado = sentencia.executeQuery(sql);
            while (resultado.next()) {
                Libro libro = new Libro();
                libro.setId(resultado.getInt("id_libro"));
                libro.setNombreAutor(resultado.getString("nombre_autor"));
                libro.setTitulo(resultado.getString("titulo"));  
                libro.setDescripcion(resultado.getString("descripcion"));
                libro.setFechaPublicacion(resultado.getString("fecha_publicacion"));
                libro.setNumeroEdicion(resultado.getInt("numero_edicion"));
                libro.setUrlImagenPortada(resultado.getString("url_imagen_portada"));
                libro.setUrlImagenIndice(resultado.getString("url_imagen_indice"));
                libro.setUrlPdfLibro(resultado.getString("url_pdf_libro"));
                libros.add(libro);
            }
            resultado.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return libros;
    }

    @Override
    public void insertarLibro(Libro libro) {
        try {
            obtenerConexion();
            String sql = " INSERT INTO libro"
                    + " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement psentencia = conexion.prepareStatement(sql);
            psentencia.setInt(1, libro.getId());
            psentencia.setString(2, libro.getNombreAutor());
            psentencia.setString(3, libro.getTitulo());
            psentencia.setString(4, libro.getDescripcion());
            psentencia.setString(5, libro.getFechaPublicacion());
            psentencia.setInt(6, libro.getNumeroEdicion());
            psentencia.setString(7, libro.getUrlImagenPortada());
            psentencia.setString(8, libro.getUrlImagenIndice());
            psentencia.setString(9, libro.getUrlPdfLibro());

            Integer filas = psentencia.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    @Override
    public Libro obtenerLibro(Libro libro) {
        Libro libroRespuesta = new Libro();
        try {
            obtenerConexion();
            String sql = " SELECT *"
                    + " FROM libro WHERE id_libro = ? ";

            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, libro.getId());
            ResultSet resultado = sentencia.executeQuery();
            while (resultado.next()) {
                libroRespuesta.setId(resultado.getInt("id_libro"));
                libroRespuesta.setNombreAutor(resultado.getString("nombre_autor"));
                libroRespuesta.setTitulo(resultado.getString("titulo"));  
                libroRespuesta.setDescripcion(resultado.getString("descripcion"));
                libroRespuesta.setFechaPublicacion(resultado.getString("fecha_publicacion"));
                libroRespuesta.setNumeroEdicion(resultado.getInt("numero_edicion"));
                libroRespuesta.setUrlImagenPortada(resultado.getString("url_imagen_portada"));
                libroRespuesta.setUrlImagenIndice(resultado.getString("url_imagen_indice"));
                libroRespuesta.setUrlPdfLibro(resultado.getString("url_pdf_libro"));
            }
            resultado.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return libroRespuesta;
    }

    @Override
    public Usuario registrarUsuario(Usuario usuario) {
        
        try {
            obtenerConexion();
            String sql = " INSERT INTO usuario(id_usuario, nombres, apellidos, email, contrasenia)" + " VALUES(?, ?, ?, ?, ?)";
            PreparedStatement sentencia = conexion.prepareStatement(sql);

            sentencia.setInt(1, usuario.getId());
            sentencia.setString(2, usuario.getNombres());
            sentencia.setString(3, usuario.getApellidos());
            sentencia.setString(4, usuario.getEmail());
            sentencia.setString(5, usuario.getContrasenia());
            Integer filas = sentencia.executeUpdate();

            sentencia.close();
            cerrarConexion();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return usuario;
    }

    @Override
    public Usuario autenticarUsuario(Usuario usuario) {
        
        try {
            obtenerConexion();
            String sql= " SELECT * from usuario where email = ? and contrasenia = ?";
            PreparedStatement sentencia = conexion.prepareStatement(sql);

            sentencia.setString(1, usuario.getEmail());
            sentencia.setString(2, usuario.getContrasenia());
            ResultSet resultado = sentencia.executeQuery();
            while(resultado.next()){
                usuario = extraerUsuario(resultado);
            }
            resultado.close();
            sentencia.close();
            cerrarConexion();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return usuario;
       
    }

    private Usuario extraerUsuario(ResultSet resultado) throws SQLException {
        Usuario usuario = new Usuario(
            resultado.getInt("id_usuario"),
            resultado.getString("nombres"),
            resultado.getString("apellidos"),
            resultado.getString("email"),
            null);
        return usuario;   
        
    }

    @Override
    public void agregarLibroAFavoritos(SeccionLibro seccionLibro) {
        
        try {
            obtenerConexion();
            String sql = " INSERT INTO seccion_libros VALUES(?, ?, 'F')";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, seccionLibro.getIdLibro());
            sentencia.setInt(2, seccionLibro.getIdUsuario());

            Integer filas = sentencia.executeUpdate();
            sentencia.close();
            cerrarConexion();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }

    @Override
    public void agregarLibroAGuardados(SeccionLibro seccionLibro) {
        try {
            obtenerConexion();
            String sql = " INSERT INTO seccion_libros VALUES(?, ?, 'G')";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, seccionLibro.getIdLibro());
            sentencia.setInt(2, seccionLibro.getIdUsuario());

            Integer filas = sentencia.executeUpdate();
            sentencia.close();
            cerrarConexion();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }

    @Override
    public List<Libro> obtenerLibrosFavoritos(SeccionLibro seccionLibro) {
        List<Libro> librosFavoritos = new ArrayList<>();
        try {
            obtenerConexion();
            String sql = " SELECT l.id_libro FROM libro l JOIN seccion_libros sl ON sl.id_libro=l.id_libro" + 
            " JOIN usuario u ON u.id_usuario = sl.id_usuario" +
            " WHERE tipo = 'F' AND sl.id_usuario = ?";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, seccionLibro.getIdUsuario());
            
            ResultSet resultado = sentencia.executeQuery();
            while (resultado.next()) {
                Libro libro = new Libro();
                libro.setId(resultado.getInt("l.id_libro"));
                librosFavoritos.add(obtenerLibro(libro));
                
            }
            
            resultado.close();
            sentencia.close();
            
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return librosFavoritos;
    }

    @Override
    public List<Libro> obtenerLibrosGuardados(SeccionLibro seccionLibro) {
        List<Libro> librosGuardados = new ArrayList<>();
        try {
            obtenerConexion();
            String sql = " SELECT l.id_libro FROM libro l JOIN seccion_libros sl ON sl.id_libro=l.id_libro" + 
            " JOIN usuario u ON u.id_usuario = sl.id_usuario" +
            " WHERE tipo = 'G' AND sl.id_usuario = ?";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, seccionLibro.getIdUsuario());
            
            ResultSet resultado = sentencia.executeQuery();
            while (resultado.next()) {
                Libro libro = new Libro();
                libro.setId(resultado.getInt("l.id_libro"));
                librosGuardados.add(obtenerLibro(libro));
                
            }
            
            resultado.close();
            sentencia.close();
            
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return librosGuardados;
    }

    @Override
    public Usuario obtenerUsuario(Usuario usuario) {
        try {
            obtenerConexion();
            String sql = " SELECT nombres, apellidos, email"
                    + " FROM usuario WHERE id_usuario= ? ";

            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, usuario.getId());
            ResultSet resultado = sentencia.executeQuery();
            while (resultado.next()) {
               
                usuario.setNombres(resultado.getString("nombres"));
                usuario.setApellidos(resultado.getString("apellidos"));
                usuario.setEmail(resultado.getString("email"));
                                
            }
            resultado.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return usuario;
    }

    @Override
    public void eliminarLibroDeFavoritos(SeccionLibro seccionLibro) {
        try {
            obtenerConexion();
            String sql = " DELETE FROM seccion_libros WHERE id_libro = ? AND tipo = 'F' and id_usuario=?";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, seccionLibro.getIdLibro());
            sentencia.setInt(2, seccionLibro.getIdUsuario());

            Integer filas = sentencia.executeUpdate();
            sentencia.close();
            cerrarConexion();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }

    @Override
    public void eliminarLibroDeGuardados(SeccionLibro seccionLibro) {
        try {
            obtenerConexion();
            String sql = " DELETE FROM seccion_libros WHERE id_libro = ? AND tipo = 'G' and id_usuario=?";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, seccionLibro.getIdLibro());
            sentencia.setInt(2, seccionLibro.getIdUsuario());

            Integer filas = sentencia.executeUpdate();
            sentencia.close();
            cerrarConexion();

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }

    @Override
    public List<Libro> obtenerUltimosLibros() {
        List<Libro> librosDeLaSemana;
        List<Libro> listaTotalLibros = obtenerLibros();
        if(listaTotalLibros.size() > 6){
            
            librosDeLaSemana = listaTotalLibros.subList(listaTotalLibros.size()- 6, listaTotalLibros.size());
        }
        else{
            librosDeLaSemana = listaTotalLibros;
        }
        return librosDeLaSemana;
    }
    
    public List<Libro> obtenerMejoresTitulos(){
        List<Libro> lista = new ArrayList<>();
        StringBuilder sql = new StringBuilder();
        sql.append(" SELECT " +
        " id_libro,nombre_autor,titulo,descripcion,fecha_publicacion,numero_edicion, " + 
        " url_imagen_portada,url_imagen_indice,url_pdf_libro FROM libro ");
        try {
            obtenerConexion();
            Statement sentencia = conexion.createStatement();
            ResultSet resultado = sentencia.executeQuery(sql.toString());
            for(int i=0; i<5 ; i++){
                resultado.next();
                Libro libro = new Libro();
                libro.setId(resultado.getInt("id_libro"));
                libro.setNombreAutor(resultado.getString("nombre_autor"));
                libro.setTitulo(resultado.getString("titulo"));
                libro.setDescripcion(resultado.getString("descripcion"));
                libro.setFechaPublicacion(resultado.getString("fecha_publicacion"));
                libro.setNumeroEdicion(resultado.getInt("numero_edicion"));
                libro.setUrlImagenPortada(resultado.getString("url_imagen_portada"));
                libro.setUrlImagenIndice(resultado.getString("url_imagen_indice"));
                libro.setUrlPdfLibro(resultado.getString("url_pdf_libro"));
                lista.add(libro);
            }
            resultado.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return lista;
    }
   
    @Override
    public List<CategoriaLibro> obtenerCategorias() {
        List<CategoriaLibro> categorias = new ArrayList<>();
        try {
            obtenerConexion();
            Statement sentencia = conexion.createStatement();
            String sql =   "SELECT *" +
                    " FROM categoria_libro";
            ResultSet resultado = sentencia.executeQuery(sql);
            while(resultado.next()){
                CategoriaLibro categoria = new CategoriaLibro();
                categoria.setIdCategoria(resultado.getInt("id_categoria"));
                categoria.setNombreCategoria(resultado.getString("nombre_categoria"));
                categorias.add(categoria);
            }
            resultado.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return categorias;
    }

    @Override
    public List<SubcategoriaLibro> obtenerSubcategorias(CategoriaLibro categoria){
        List<SubcategoriaLibro> subcategorias = new ArrayList<>();
        try {
            obtenerConexion();
            String sql = " SELECT DISTINCT nombre_subcategoria FROM subcategoria_libro"+
                    " WHERE id_categoria=?";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, categoria.getIdCategoria());
            ResultSet resultado = sentencia.executeQuery();
            while (resultado.next()){
                SubcategoriaLibro subcategoria = new SubcategoriaLibro();
                subcategoria.setNombreSubcategoria(resultado.getString("nombre_subcategoria"));
                subcategorias.add(subcategoria);
            }
            resultado.close();
            sentencia.close();
            cerrarConexion();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return subcategorias;
    }

    @Override
    public List<Libro> obtenerLibrosPorSubcategoria(SubcategoriaLibro subcategoria) {
        List<Libro> libros = new ArrayList<>();
        try {
            obtenerConexion();
            String sql = " SELECT l.id_libro FROM libro l JOIN subcategoria_libro subl ON l.id_libro=subl.id_libro" +
                    " WHERE id_subcategoria = ?";
            PreparedStatement sentencia = conexion.prepareStatement(sql);
            sentencia.setInt(1, subcategoria.getIdSubcategoria());
            ResultSet resultado = sentencia.executeQuery();
            while (resultado.next()){
                Libro libro = new Libro();
                libro.setId(resultado.getInt("l.id_libro"));
                libros.add(obtenerLibro(libro));
            }
            resultado.close();
            sentencia.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return libros;
    }
    
    
}
