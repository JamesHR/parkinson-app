import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-graph',
  templateUrl: './card-graph.component.html',
  styleUrls: ['./card-graph.component.scss'],
})
export class CardGraphComponent implements OnInit {

  @Input() title: string;
  @Input() filter: string;

  constructor() { }

  ngOnInit() {}

}
