import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isButtonDisabled: boolean = true;

  onSubmit() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      console.log('Formulario enviado');
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Email: ${this.email}`);

      const ventanaNueva = window.open('about:blank', '_blank');
      if (ventanaNueva) {
        ventanaNueva.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <title>Campos del formulario</title>
      </head>
      <body>
        <div class="container">
          <h1>Campos del formulario:</h1>
          <p>Nombre: ${this.nombre}</p>
          <p>Email: ${this.email}</p>
        </div>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </html>
  `);
        ventanaNueva.document.close();
      }
    }
  }

  handleInputChange() {
    this.isButtonDisabled = !(this.nombre && this.email);
  }
}
