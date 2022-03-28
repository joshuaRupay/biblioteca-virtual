package com.microservicio.libreria.dto;


import lombok.Data;

@Data
public class SeccionLibro {
    private String tipo;
    private Integer idLibro;
    private Integer idUsuario;
    
}
