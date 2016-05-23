export class receta{
  nombre: string;
  fecha: string;
  descripcion: string;
  infoextra: string;
  dificultad: string;
  tiempo: string;
  autor: string;
  ingredientes: string[];
  pasos: string[];
  video:string
  vegana:boolean;
  grasas:boolean;
  diabeticos:boolean;
  picante:boolean;
//  comentarios: comentarios[];

constructor(nombre: string, fecha: string, descripcion: string, infoextra: string, dificultad: string, tiempo: string, autor:string, ingredientes: string[], pasos: string[], video: string, vegana:boolean, grasas:boolean, diabeticos:boolean,picante:boolean ){
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
  this.video = video;
  this.vegana = vegana;
  this.grasas = grasas;
  this.diabeticos = diabeticos;
  this.picante = picante;


  }
}
