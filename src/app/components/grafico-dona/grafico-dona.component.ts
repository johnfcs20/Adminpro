import { Component, OnInit, Input } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: String[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: String = '';

  constructor() { }

  ngOnInit() {

    init_plugins();
  }

}
