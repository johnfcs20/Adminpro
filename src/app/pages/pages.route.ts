import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';


const pagesRoute: Routes = [
    {path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
    {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dasgboard'}},
    {path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'}},
    {path: 'graficas1', component: Grafica1Component, data: {titulo: 'Graficas'}},
    {path: 'acount-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de cuenta'}},
    {path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil'}},

    // mantenimientos

    {path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimientos de usuarios'}},
    {path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimientos de hospitales'}},
    {path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimientos de medicos'}},
    {path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Mantenimientos de medicos'}},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ]
}

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoute);
