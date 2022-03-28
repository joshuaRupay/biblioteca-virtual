package com.microservicio.libreria.dto.rest.libro;

import com.microservicio.libreria.dto.Libro;
import lombok.Data;

import java.util.List;

@Data
public class RespuestaLibro {
    private List<Libro> lista;
}
