import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
})
export class CardTableComponent implements OnInit {

  @Input() title: string;
  @Input() filter: string;
  @Input() blockFilter: boolean;
  @Input() headers: any;
  @Input() data: any;
  @Input() itemHandler: any;

  constructor() { }

  ngOnInit() {}

  notImplemented = () => console.log('Method itemHanlder not implemented');

}
