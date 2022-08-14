import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss'],
})
export class CardChartComponent implements OnInit {

  @Input() title: string;
  @Input() filter: string;

  constructor() { }

  ngOnInit() {}

}
