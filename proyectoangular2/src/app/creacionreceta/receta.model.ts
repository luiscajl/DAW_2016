import {register} from '../register/register.model';
import {comentario} from '../receta/comentario.model';
export class receta{
  nombre: string;
  fecha: string;
  descripcion: string;
  tipo: string;
  dificultad: string;
  tiempo: string;
  autor: register;
  ingredientes: string[];
  pasos: string[];
  video:string
  vegana:boolean;
  grasas:boolean;
  diabeticos:boolean;
  picante:boolean;
  comentarios: comentario[];
  imagen:string;

//  comentarios: comentarios[];

constructor(nombre: string, fecha: string, descripcion: string, tipo: string, dificultad: string, tiempo: string, autor:register, ingredientes: string[], pasos: string[], video: string, vegana:boolean, grasas:boolean, diabeticos:boolean,picante:boolean, comentarios: comentario[],imagen:string ){
  this.nombre = nombre;
  this.ingredientes=ingredientes;
  this.fecha=fecha;
  this.descripcion = descripcion;
  this.tipo = tipo;
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
  this.comentarios = comentarios;
  this.imagen=imagen;


  }
}
