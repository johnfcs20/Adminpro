import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = '';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

    console.log('Progreso', this.progreso);
    console.log('Leyenda', this.leyenda);
  }

  onChanges (newValue: number) {
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

   // elemHTML.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
    init_plugins();
  }
  cambiarValor(valor) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;

    }


    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;

    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }
}
