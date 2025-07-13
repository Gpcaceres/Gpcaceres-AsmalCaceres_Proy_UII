import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { NuestroEquipo } from './pages/nuestro-equipo/nuestro-equipo';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'quienes-somos', component: QuienesSomos },
    { path: 'nuestro-equipo', component: NuestroEquipo },
    { path: 'contacto', component: Contacto },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/inicio' } // Ruta para páginas no encontradas
];