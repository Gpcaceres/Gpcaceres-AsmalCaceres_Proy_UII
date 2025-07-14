import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { NuestroEquipo } from './pages/nuestro-equipo/nuestro-equipo';
import { Contacto } from './pages/contacto/contacto';
import { Cursos } from './pages/cursos/cursos';


export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'quienes-somos', component: QuienesSomos },
    { path: 'nuestro-equipo', component: NuestroEquipo },
    { path: 'contacto', component: Contacto },
    { path: 'cursos/:id', component: Cursos }, // Ruta para el componente Cursos con parámetro 'id'
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/inicio' } // Ruta para páginas no encontradas
];