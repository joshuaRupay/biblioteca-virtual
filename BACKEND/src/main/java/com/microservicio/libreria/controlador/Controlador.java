package com.microservicio.libreria.controlador;

import com.microservicio.libreria.dto.*;
import com.microservicio.libreria.dto.rest.libro.*;
import com.microservicio.libreria.servicio.Servicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"*"})
public class Controlador {

    @Autowired
    private Servicio servicio;

    @RequestMapping(value = "/obtener-libros",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )
    public @ResponseBody RespuestaLibro obtenerLibros(){
        RespuestaLibro respuestaLibro = new RespuestaLibro();
        respuestaLibro.setLista(servicio.obtenerLibros());
        return respuestaLibro;
    }

    @RequestMapping(value = "/obtener-libro", 
        method = RequestMethod.POST,
        produces = "application/json;charset=utf-8"
        )
    public @ResponseBody Libro obtenerLibro(@RequestBody Libro libro){
        return servicio.obtenerLibro(libro);
    }

    @RequestMapping(value = "/insertar-libro",
        method = RequestMethod.POST,
        consumes = "application/json;charset=utf-8"
    )
    public void insertarLibro(@RequestBody Libro libro) {
        servicio.insertarLibro(libro);
    }
    
    @RequestMapping(value = "/registrar-usuario",
        method = RequestMethod.POST,
        consumes = "application/json;charset=utf-8"
    )
    public @ResponseBody Usuario registrarUsuario(@RequestBody Usuario usuario){
        return servicio.registrarUsuario(usuario);
    }

    @RequestMapping(value = "/autenticar-usuario",
        method = RequestMethod.POST,
        produces = "application/json;charset=utf-8",
        consumes = "application/json;charset=utf-8"
    )
    public @ResponseBody Usuario autenticarUsuario(@RequestBody Usuario usuario){
        return servicio.autenticarUsuario(usuario);
    }

    @RequestMapping(value = "/obtener-usuario",
        method = RequestMethod.POST,
        produces = "application/json;charset=utf-8"
    )
    public @ResponseBody Usuario obtenerUsuario(@RequestBody Usuario usuario){
        return servicio.obtenerUsuario(usuario);
    }

    @RequestMapping(value = "/agregar-libro-favorito",
        method = RequestMethod.POST,
        consumes = "application/json;charset=utf-8"
    )
    public void agregarLibroAFavoritos(@RequestBody SeccionLibro seccionLibro){
        servicio.agregarLibroAFavoritos(seccionLibro);
    }

    @RequestMapping(value = "/agregar-libro-guardado",
        method = RequestMethod.POST,
        consumes = "application/json;charset=utf-8"
    )
    public void agregarLibroAGuardados(@RequestBody SeccionLibro seccionLibro){
        servicio.agregarLibroAGuardados(seccionLibro);
    }

    @RequestMapping(value = "/obtener-libros-favoritos",
        method = RequestMethod.POST,
        produces = "application/json;charset=utf-8"
    )
    public @ResponseBody RespuestaLibro obtenerLibrosFavoritos(@RequestBody SeccionLibro seccionLibro){
        RespuestaLibro respuestaLibro = new RespuestaLibro();
        respuestaLibro.setLista(servicio.obtenerLibrosFavoritos(seccionLibro));
        return respuestaLibro;
    }

    @RequestMapping(value = "/obtener-libros-guardados",
        method = RequestMethod.POST,
        produces = "application/json;charset=utf-8"
    )
    public @ResponseBody RespuestaLibro obtenerLibrosGuardados(@RequestBody SeccionLibro seccionLibro){
        RespuestaLibro respuestaLibro = new RespuestaLibro();
        respuestaLibro.setLista(servicio.obtenerLibrosGuardados(seccionLibro));
        return respuestaLibro;
    }

    @RequestMapping(value = "/eliminar-libro-favorito",
        method = RequestMethod.POST,
        produces = "application/json;charset=utf-8",
        consumes = "application/json;charset=utf-8"
    )
    public void eliminarLibroDeFavoritos(@RequestBody SeccionLibro seccionLibro){
        servicio.eliminarLibroDeFavoritos(seccionLibro);
    }

    @RequestMapping(value = "/eliminar-libro-guardado",
        method = RequestMethod.POST,
        produces = "application/json;charset=utf-8",
        consumes = "application/json;charset=utf-8"
    )
    public void eliminarLibroDeGuardados(@RequestBody SeccionLibro seccionLibro){
        servicio.eliminarLibroDeGuardados(seccionLibro);
    }

    @RequestMapping(value = "/obtener-ultimos-libros",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )
    public @ResponseBody RespuestaLibro obtenerUltimosLibros(){
        RespuestaLibro respuestaLibro = new RespuestaLibro();
        respuestaLibro.setLista(servicio.obtenerUltimosLibros());
        return respuestaLibro;
    }

    @RequestMapping(value = "/obtener-mejores-titulos",
    method = RequestMethod.POST,
    produces = "application/json;charset=utf-8")

    public @ResponseBody RespuestaLibro obtenerMejoresTitulos(){
        RespuestaLibro respuestaLibro = new RespuestaLibro();
        respuestaLibro.setLista(servicio.obtenerMejoresTitulos());
        return respuestaLibro;
       
    }
   
    @RequestMapping(value = "/obtener-categorias",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )

    public @ResponseBody
    RespuestaCategoriaLibro obtenerCategorias() {
        RespuestaCategoriaLibro respuestaCategoria = new RespuestaCategoriaLibro();
        respuestaCategoria.setLista(servicio.obtenerCategorias());
        return respuestaCategoria;
    }

    @RequestMapping(value = "/obtener-subcategorias",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )

    public @ResponseBody
    RespuestaSubcategoriaLibro obtenerSubcategorias(@RequestBody CategoriaLibro categoria){
        RespuestaSubcategoriaLibro respuestaSubcategoria = new RespuestaSubcategoriaLibro();
        respuestaSubcategoria.setLista(servicio.obtenerSubcategorias(categoria));
        return respuestaSubcategoria;
    }

    @RequestMapping(value = "/obtener-libros-subcategoria",
            method = RequestMethod.POST,
            produces = "application/json;charset=utf-8"
    )
    public @ResponseBody
    RespuestaLibro obtenerLibrosPorSubcategoria(@RequestBody SubcategoriaLibro subcategoria){
        RespuestaLibro respuestaLibro = new RespuestaLibro();
        respuestaLibro.setLista(servicio.obtenerLibrosPorSubcategoria(subcategoria));
        return respuestaLibro;
    }
}
