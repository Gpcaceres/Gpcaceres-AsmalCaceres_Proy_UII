import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css']
})
export class Cursos implements OnInit {
  curso: { id: string; nombre: string; descripcion: string; } | null = null;
  cursoId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.paramMap.get('id');

    if (this.cursoId) {
      this.cargarDetallesDelCurso(this.cursoId);
    }
  }

  cargarDetallesDelCurso(id: string): void {
    const cursosDisponibles = [
      { id: '1', nombre: 'Curso de Angular Básico', descripcion: 'Aprende los fundamentos de Angular y crea tus primeras aplicaciones web interactivas.' },
      { id: '2', nombre: 'Curso de React Avanzado', descripcion: 'Domina React Hooks, Context API y Redux para construir interfaces de usuario complejas.' },
      { id: '3', nombre: 'Desarrollo Web con Node.js', descripcion: 'Construye APIs RESTful y aplicaciones backend robustas con Node.js y Express.' },
      { id: '4', nombre: 'Introducción a Python', descripcion: 'Aprende los conceptos básicos de Python, desde variables hasta estructuras de control y funciones.' },
      { id: '5', nombre: 'Bases de Datos SQL', descripcion: 'Comprende los fundamentos de las bases de datos relacionales, SQL y diseño de esquemas.' },
      { id: '6', nombre: 'Diseño UX/UI para Desarrolladores', descripcion: 'Mejora la experiencia de usuario y la interfaz de tus aplicaciones con principios de diseño UX/UI.' }
    ];
    this.curso = cursosDisponibles.find(c => c.id === id) || null;
  }
}
