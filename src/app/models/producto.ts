export class Producto{
    _id?: number;  // el guion bajo es por que MongoDB los tiene así y el signo de interrogación es por ser opcional
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;
    
    constructor(nombre: string, categoria: string, ubicacion: string, precio: number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}