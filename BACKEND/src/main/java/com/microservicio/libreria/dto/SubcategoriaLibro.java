package com.microservicio.libreria.dto;

import lombok.Data;

@Data
public class SubcategoriaLibro {
    private Integer idSubcategoria;
    private CategoriaLibro idCategoria;
    private String nombreSubcategoria;
    private Libro idLibro;
}
