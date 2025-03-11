import { Component, input, output } from '@angular/core';
import { horario } from '../../modelos/horario';
import { signal } from '@angular/core';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent {
  horario = input<horario>(new horario);
  mostrarBoton = signal<boolean>(false);
  secBorrado = output<string>();

  constructor(){

  }



}
