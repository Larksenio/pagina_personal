import { RouterOutlet } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component'; // Cambiamos a PortafolioComponent
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortafolioComponent], // Importamos el componente portafolio
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina_personal';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) { // Cambia el valor según cuándo quieras cambiar el color
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }
}
