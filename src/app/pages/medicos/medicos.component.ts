import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Medico } from '../../models/medico.model';
import { MedicosService } from '../../services/medico/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {


  totalMedicos: number = 0;
  medicos: Medico[] = [];

  constructor(
    public http: HttpClient,
    public _medicoService: MedicosService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {



    this._medicoService.cargarMedicos().subscribe(medicos => this.medicos = medicos);

  }

  buscarMedico(termino: string) {

    if (termino.length <= 0) {
      this.cargarMedicos();
      return;
    }

    this._medicoService.buscarMeidcos(termino).subscribe(medicos => this.medicos = medicos);
  }

  borrarMedico(medico: Medico) {

    this._medicoService.borrarMedico(medico._id).subscribe(() => this.cargarMedicos());

  }

  }

