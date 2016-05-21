export class receta{
  nombre: string;
  fecha: string;
  descripcion: string;
  infoextra: string;
  dificultad: string;
  tiempo: string;
  autor: string;
  ingredientes: string;
  pasos: string;
//  comentarios: comentarios[];

constructor(nombre: string, fecha: string, descripcion: string, infoextra: string, dificultad: string, tiempo: string, autor:string, ingredientes: string, pasos: string ){
  this.nombre = nombre;
  this.ingredientes=ingredientes;
  this.fecha=fecha;
  this.descripcion = descripcion;
  this.infoextra = infoextra;
  this.dificultad = dificultad;
  this.tiempo = tiempo;
  this.autor = autor;
  this.ingredientes = ingredientes;
  this.pasos = pasos;


  }
}
