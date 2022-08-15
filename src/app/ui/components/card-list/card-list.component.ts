import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  @Input() title: string;
  @Input() filter: string;
  @Input() blockFilter: boolean;
  @Input() headers: any;
  @Input() data: any;
  @Input() itemHandler: any;

  constructor() { }

  ngOnInit() {}

  notImplemented = () => console.log('Method itemHandler not implemented');

}
