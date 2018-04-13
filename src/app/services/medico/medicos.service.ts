import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../../models/medico.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class MedicosService {

  totalMedicos: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }

  cargarMedicos() {
    let url = URL_SERVICIOS + '/medico';

    return this.http.get(url)
                    .map((resp: any) => {
                      this.totalMedicos = resp.total;

                      console.log(resp.medicos);

                      return resp.medicos;
                    });
  }

  buscarMeidcos(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.http.get(url)
                    .map((resp: any) => resp.medicos);
 }

 borrarMedico(id: string) {
   let url = URL_SERVICIOS + '/medico/' + id;
   url += '?token=' + this._usuarioService.token;

   return this.http.delete(url).map(resp => {

    swal('Medico borrado', 'medico borrado de manera correcta', 'success');

    return resp;

   });
 }


}
