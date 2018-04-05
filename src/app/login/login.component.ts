import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

declare const gapi: any;
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  recuerdame: boolean = false;

  auth2: any;

  constructor(

    public router: Router,
    public _usuarioService: UsuarioService
  ) {

   }

  ngOnInit() {

    init_plugins();
      this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
   //  console.log(this.email);
     // console.log(this.attachSigin( document.getElementById('btnGoogle') ));
  }

  googleInit() {

    gapi.load('auth2', () => {

        this.auth2 =  gapi.auth2.init({
         client_id: '895193316453-7komlc82cbnuha6qgkol2fkdaj57gokd.apps.googleusercontent.com',
         cookiepolicy: 'single_host_origin',
         scope: 'profile email'
      });
           this.attachSigin(document.getElementById('btnGoogle'));
    });

  }

  attachSigin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle(token)
                               .subscribe( () => window.location.href = '#/dashboard' ) ;

    });
  }

  ingresar(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login(usuario, forma.value.recuerdame)
                        .subscribe(correcto => this.router.navigate(['/dashboard']) );
    // console.log(forma.valid);
   // console.log(forma.value);
  }

}
