import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { NopagefoundComponent } from './shared/nopagefound/nopafefound.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { APP_ROUTES } from './app.routes';
// import { PagesComponent } from './pages/pages.component';
import { RegistrerComponent } from './login/registrer.component';
// import { Page} from './login/pages.module';
// Modulos

import { PagesModule } from '../app/pages/pages.module';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';
import { SharedModule } from './shared/shared.module';

// Servicios
import {SidebarService} from './services/sidebar.service';
import { UsuarioService } from './services/usuario/usuario.service';
import {  HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
// import { ImagenPipe } from './pipes/imagen.pipe';
import { SubirArchivoService } from './services/subir-archivo/subir-archivo.service';
// import { ModalUploadser } from './components/modal-upload/modal-upload.component';
import { ModalUploadService } from './components/modal-upload/modal-upload.service';
import { HospitalService } from './services/hospital/hospital.service';
import { MedicosService } from './services/medico/medicos.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  //   NopagefoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Grafica1Component,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // PagesComponent,
    RegistrerComponent,
  // ModalUploadComponent,
  // ImagenPipe,

    // IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [
    SettingsService,
    SidebarService,
    UsuarioService,
    SubirArchivoService,
    LoginGuardGuard,
    ModalUploadService,
    HospitalService,
    MedicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
