package com.microservicio.libreria.dto.rest.libro;

import java.util.List;

import com.microservicio.libreria.dto.CategoriaLibro;

import lombok.Data;

@Data
public class RespuestaCategoriaLibro {
    private List<CategoriaLibro> lista;
}
