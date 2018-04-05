import { Component, OnInit, group } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {UsuarioService} from '../services/usuario/usuario.service';



import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();
const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./login.component.css']
})
export class RegistrerComponent implements OnInit {

  forma: FormGroup;

  sonIguales(campo1: string, campo2: string) {

    // tslint:disable-next-line:no-shadowed-variable
    return(group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
        sonIguales: true
      };
    };


  }


  constructor(

    public _usuarioService: UsuarioService,
    public router: Router

  ) { }

  ngOnInit() {

    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.email, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl()
    }, {validators: this.sonIguales('password', 'password2') });

    this.forma.setValue({

      nombre: 'Test',
      correo: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: true


    });

  }

  registrarUsuario() {

    if (this.forma.invalid) {

      return;

    }

    if (!this.forma.value.condiciones) {

      swal('importante', 'Debe aceptar las condiciones', 'warning');
      // console.log('Debe acepptar las condiciones');
      return;

    }

    let usuario = new Usuario(

      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password,
    );

    this._usuarioService.crearUsuario(usuario).subscribe(resp => this.router.navigate(['/login']));

  }

}
