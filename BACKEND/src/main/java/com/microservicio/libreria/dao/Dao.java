package com.microservicio.libreria.dao;

import com.microservicio.libreria.dto.*;

import java.util.List;

public interface Dao {
    public void insertarLibro(Libro libro);

    public Libro obtenerLibro(Libro libro);

    public List<Libro> obtenerLibros();

    public Usuario registrarUsuario(Usuario usuario);

    public Usuario autenticarUsuario(Usuario usuario);

    public Usuario obtenerUsuario(Usuario usuario);

    public void agregarLibroAFavoritos(SeccionLibro seccionLibro);

    public void agregarLibroAGuardados(SeccionLibro seccionLibro);

    public List<Libro> obtenerLibrosFavoritos(SeccionLibro seccionLibro);

    public List<Libro> obtenerLibrosGuardados(SeccionLibro seccionLibro);

    public void eliminarLibroDeFavoritos(SeccionLibro seccionLibro);

    public void eliminarLibroDeGuardados(SeccionLibro seccionLibro);

    public List<Libro> obtenerUltimosLibros();

    public List<Libro> obtenerMejoresTitulos();

    public List<CategoriaLibro> obtenerCategorias();

    public List<SubcategoriaLibro> obtenerSubcategorias(CategoriaLibro categoria);

    public List<Libro> obtenerLibrosPorSubcategoria(SubcategoriaLibro subcategoria);

}
