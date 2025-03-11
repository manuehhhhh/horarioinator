import { Injectable } from '@angular/core';
import { horario } from '../modelos/horario';
import { materia } from '../modelos/materia';
import { seccion } from '../modelos/seccion';
import { signal } from '@angular/core';
import * as jotason from "../servicios/tableConvert.com_dmah2j.json"


@Injectable({
  providedIn: 'root'
})
export class GenreadorAleatorioService {


  materias = [new materia("algebra y trigo", "fundamentos de ingenieria", 5, 1), new materia("calculo diferencial", "fundamentos de ingenieria", 6, 2),
    new materia("algebra lineal", "fundamentos de ingenieria", 6, 2), new materia("calculo integral", "fundamentos de ingenieria", 5, 3), 
    new materia("Fisica Gnral", "fundamentos de ingenieria", 6, 3), 
    
    new materia("Logica", "Logica y Programacion", 4, 1), new materia("Mates discretas", "Logica y Programacion", 6, 2),
    new materia("Fundamentos program", "Logica y Programacion", 3, 1), new materia("algoritmos y program", "Logica y Programacion", 3, 2), 
    new materia("Algoritmos y estructuras de datos", "Logica y Programacion", 7, 2), new materia("Programacion OOP", "Logica y Programacion", 7, 3), 
    
    new materia("Competencia Textual", "formacion general", 5, 1), new materia("Iden Lid Comp I", "formacion general", 3, 1),
    new materia("Iden Lid Comp II", "formacion general", 3, 2), new materia("Innov y Emp", "formacion general", 3, 3), 
    new materia("Ecologia", "formacion general", 3, 3), 
    
    
    new materia("Contabilidad", "formacion gerencial", 5, 3), new materia("Sistema de Informacion", "Ingenieria de Software", 5, 3)
    ]
    
    
  dias= ["lunes", "martes", "miercoles", "jueves", "viernes"]
  secciones = signal<Array<seccion>>([]);
  constructor() { 
    let secc:Array<seccion> = [];
    let data: any = jotason
    
    for (let mat of data.default){
      if(mat.Campus.includes("UCAB")){
        secc.push(new seccion(Number(mat.NRC), "pedritoPeres", mat.Materia))
        if( mat.Lunes !== ""){
          secc[secc.length - 1].cargarHoras('lunes', Number(this.obtenerDuracion(mat.Lunes)), this.obtenerHora24((mat.Lunes)) )
        }
        if( mat.Martes !== ""){
          secc[secc.length - 1].cargarHoras('martes', Number(this.obtenerDuracion(mat.Martes)),this.obtenerHora24((mat.Martes)) )
        }
        if( mat.Miercoles !== ""){
          secc[secc.length - 1].cargarHoras('miercoles', Number(this.obtenerDuracion(mat.Miercoles)),this.obtenerHora24((mat.Miercoles)))
        }
        if( mat.Jueves !== ""){
          secc[secc.length - 1].cargarHoras('jueves', Number(this.obtenerDuracion(mat.Jueves)), this.obtenerHora24((mat.Jueves)) )
        }
        if( mat.Viernes !== ""){
          secc[secc.length - 1].cargarHoras('viernes', Number(this.obtenerDuracion(mat.Viernes)), this.obtenerHora24((mat.Viernes)) )
        }
        if( mat.Sabado !== ""){
          secc[secc.length - 1].cargarHoras('sabado', Number(this.obtenerDuracion(mat.Sabado)), this.obtenerHora24((mat.Sabado)) )
        }
        if( mat.Domingo !== ""){
          secc[secc.length - 1].cargarHoras('domingo', Number(this.obtenerDuracion(mat.Domingo)), this.obtenerHora24((mat.Domingo)))
        }
      }
    }
    this.secciones.set(secc);
  }

  // for (let mat of this.materias){
  //   for (let i = 0; i < 4; i++){
  //     secc.push(new seccion(Math.floor(Math.random()) * 100, "pedritoPeres", mat.nombre))
  //     secc[secc.length - 1].cargarHoras(this.dias[Math.floor(Math.random()* 4)], 2 , Math.floor(Math.random()* 7) + 7 )
  //   }
  // }   

  private obtenerDuracion(tempo:string):string{
    let AP1 = tempo[6];
    let AP2 = tempo[17];
    let suma = (AP1 == "A")? 0:12;
    let fechaInicio = Number((tempo[0] + tempo[1])) + suma;
    suma =  (AP2 == "A")? 0:12;
    let fechaFinal = Number((tempo[11] + tempo[12])) + suma;
    return ((fechaFinal - fechaInicio + 1)).toString();
  }

  private obtenerHora24(tempo:string):number{
    let AP1 = tempo[6];
    let suma = (AP1 == "A")? 0:12;
    let fechaInicio = Number((tempo[0] + tempo[1])) + suma;
    return (fechaInicio);
  }

}
