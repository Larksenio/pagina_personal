import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component'; // Cambiamos a PortafolioComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortafolioComponent], // Importamos el componente portafolio
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina_personal';
}
