import { Component, input } from '@angular/core';
import { seccion } from '../../modelos/seccion';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  secs = input<Array<seccion>>();
}
