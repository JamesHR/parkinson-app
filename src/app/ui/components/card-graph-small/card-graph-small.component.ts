import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-graph-small',
  templateUrl: './card-graph-small.component.html',
  styleUrls: ['./card-graph-small.component.scss'],
})
export class CardGraphSmallComponent implements OnInit {

  @Input() title: string;
  @Input() value1: number;
  @Input() value2: number;

  constructor() { }

  ngOnInit() {}

}
