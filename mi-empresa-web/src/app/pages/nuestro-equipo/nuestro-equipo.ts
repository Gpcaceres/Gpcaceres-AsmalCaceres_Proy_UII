import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuestro-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuestro-equipo.html',
  styleUrls: ['./nuestro-equipo.css']
})
export class NuestroEquipo {
equipo = [
  {
    nombre: 'German Cáceres',
    rol: 'Ingeniero de Software',
    tecnologias: 'Java, Spring Boot, Angular',
    foto: 'Caceres.png',
    descripcion: 'Desarrollador full stack con enfoque en calidad y arquitectura de software.',
    detalles: 'Lidera proyectos empresariales, capacita equipos ágiles y promueve buenas prácticas.',
    expandido: false
  },
  {
    nombre: 'Kevin Asmal',
    rol: 'Desarrollador Web',
    tecnologias: 'HTML, CSS, JavaScript, Angular',
    foto: 'Asmal.png',
    descripcion: 'Apasionado por crear interfaces modernas y funcionales.',
    detalles: 'Crea proyectos innovadores y está siempre en constante aprendizaje.',
    expandido: false
  }
];


  toggleDetalle(miembro: any) {
    miembro.expandido = !miembro.expandido;
  }
}
