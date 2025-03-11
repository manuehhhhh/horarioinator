import { Component } from '@angular/core';
import { input, output } from '@angular/core';
import { seccion } from '../../modelos/seccion';
import { TarjetaDeSeccionComponent } from '../tarjeta-de-seccion/tarjeta-de-seccion.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-lista-total',
  standalone: true,
  imports: [TarjetaDeSeccionComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './lista-total.component.html',
  styleUrl: './lista-total.component.css'
})
export class ListaTotalComponent {
  lista = input<Array<seccion>>();
  sel = output<seccion>();
  formularioMateria = new FormControl("");

  cargarBusqueda(){
  }
}
