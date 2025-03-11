import { Component } from '@angular/core';
import { seccion } from '../../modelos/seccion';
import { input, output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-de-seccion',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-de-seccion.component.html',
  styleUrl: './tarjeta-de-seccion.component.css'
})
export class TarjetaDeSeccionComponent {
  sec = input<seccion>(new seccion(1, "manuel martinez", "arknights101"));
  dev = output<seccion>();
}
