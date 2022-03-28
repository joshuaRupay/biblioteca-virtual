package com.microservicio.libreria.dto;

import lombok.Data;

@Data
public class Usuario {
    private Integer id;
    private String nombres;
    private String apellidos;
    private String email;
    private String contrasenia;
    
    public Usuario(Integer id, String nombres, String apellidos, String email, String contrasenia) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.contrasenia = contrasenia;
    }

    public Usuario() {
    }
       
}
