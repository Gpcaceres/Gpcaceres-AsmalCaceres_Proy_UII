import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  enviarFormulario(): void {
    if (this.nombre && this.email && this.mensaje) {
      this.enviado = true;
      this.nombre = '';
      this.email = '';
      this.mensaje = '';

      setTimeout(() => {
        this.enviado = false;
      }, 4000);
    }
  }
}
