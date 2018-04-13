import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicosService } from '../../services/medico/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
  medicos: Medico [] = [];

  constructor(
    public _medicoService: MedicosService
  ) { }

  ngOnInit() {

  }



}
