import { Component, OnInit } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

    progreso1: number = 70;
    progreso2: number = 30;
  constructor() { }

  ngOnInit() {
    init_plugins();
  }



}

