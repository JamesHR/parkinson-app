import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-chart-small',
  templateUrl: './card-chart-small.component.html',
  styleUrls: ['./card-chart-small.component.scss'],
})
export class CardChartSmallComponent implements OnInit {

  @Input() title: string;
  @Input() value1: number;
  @Input() value2: number;

  constructor() { }

  ngOnInit() {}

}
