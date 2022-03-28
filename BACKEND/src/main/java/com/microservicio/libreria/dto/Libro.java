package com.microservicio.libreria.dto;

import lombok.Data;

@Data
public class Libro {
    private Integer id;
    private String nombreAutor;
    private String titulo;
    private String descripcion;
    private String fechaPublicacion;
    private Integer numeroEdicion;
    private String urlImagenPortada;
    private String urlImagenIndice;
    private String urlPdfLibro;


}