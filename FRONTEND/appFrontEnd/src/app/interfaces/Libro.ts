export interface Libro {
    id?: number;
    nombreAutor?: string;
    titulo?: string;
    descripcion?: string;
    fechaPublicacion?: string;
    numeroEdicion?: number;
    urlImagenPortada?: string;
    urlImagenIndice?: string;
    urlPdfLibro: string;
}