import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-10';
  onSubmit() {
    // Lógica para manejar el evento ngSubmit del formulario
    console.log('Se envió el formulario');
    // Otros pasos que desees realizar al enviar el formulario
  }

}
