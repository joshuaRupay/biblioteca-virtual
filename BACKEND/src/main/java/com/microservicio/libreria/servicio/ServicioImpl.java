package com.microservicio.libreria.servicio;

import com.microservicio.libreria.dao.Dao;
import com.microservicio.libreria.dto.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ServicioImpl implements Servicio {

    @Autowired
    private Dao dao;

    @Override
    public List<Libro> obtenerLibros() {
        return dao.obtenerLibros();
    }

    @Override
    public Libro obtenerLibro(Libro libro) {
        return dao.obtenerLibro(libro);
    }

    @Override
    public void insertarLibro(Libro libro) {
        dao.insertarLibro(libro);

    }

    @Override
    public Usuario registrarUsuario(Usuario usuario) {
        return dao.registrarUsuario(usuario);
    }

    @Override
    public Usuario autenticarUsuario(Usuario usuario) {

        return dao.autenticarUsuario(usuario);
    }

    @Override
    public Usuario obtenerUsuario(Usuario usuario) {
        return dao.obtenerUsuario(usuario);
    }

    @Override
    public void agregarLibroAFavoritos(SeccionLibro seccionLibro) {
        dao.agregarLibroAFavoritos(seccionLibro);

    }

    @Override
    public void agregarLibroAGuardados(SeccionLibro seccionLibro) {
        dao.agregarLibroAGuardados(seccionLibro);

    }

    @Override
    public List<Libro> obtenerLibrosGuardados(SeccionLibro seccionLibro) {
        return dao.obtenerLibrosGuardados(seccionLibro);
    }

    @Override
    public List<Libro> obtenerLibrosFavoritos(SeccionLibro seccionLibro) {
        return dao.obtenerLibrosFavoritos(seccionLibro);

    }

    @Override
    public void eliminarLibroDeFavoritos(SeccionLibro seccionLibro) {
        dao.eliminarLibroDeFavoritos(seccionLibro);

    }

    @Override
    public void eliminarLibroDeGuardados(SeccionLibro seccionLibro) {
        dao.eliminarLibroDeGuardados(seccionLibro);
    }

    @Override
    public List<Libro> obtenerUltimosLibros() {
        return dao.obtenerUltimosLibros();
    }

    public List<Libro> obtenerMejoresTitulos() {
        return dao.obtenerMejoresTitulos();
    }

    @Override
    public List<CategoriaLibro> obtenerCategorias() {
        return dao.obtenerCategorias();
    }

    @Override
    public List<SubcategoriaLibro> obtenerSubcategorias(CategoriaLibro categoria)  {
        return dao.obtenerSubcategorias(categoria);
    }

    @Override
    public List<Libro> obtenerLibrosPorSubcategoria(SubcategoriaLibro subcategoria){
        return dao.obtenerLibrosPorSubcategoria(subcategoria);
    }

}
