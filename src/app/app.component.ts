import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HorarioComponent } from "./components/horario/horario.component";
import { GenreadorAleatorioService } from './servicios/genreador-aleatorio.service';
import { ListaTotalComponent } from './components/lista-total/lista-total.component';
import { horario } from './modelos/horario';
import { seccion } from './modelos/seccion';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HorarioComponent, ListaTotalComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'horarioinator';
  generador = inject(GenreadorAleatorioService);
  horario = signal<horario>(new horario);

  agregarSec(e:seccion){
    this.horario().AgregarSeccion(e);
    this.horario().generarHoras();
  }
}
