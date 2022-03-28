package com.microservicio.libreria.dto.rest.libro;

import java.util.List;

import com.microservicio.libreria.dto.SubcategoriaLibro;

import lombok.Data;

@Data
public class RespuestaSubcategoriaLibro {
    private List<SubcategoriaLibro> lista;
}
