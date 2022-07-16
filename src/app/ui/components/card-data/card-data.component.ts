import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss'],
})
export class CardDataComponent implements OnInit {

  @Input() icon: string;
  @Input() textPrimary: string;
  @Input() textSecondary: string;

  constructor() { }

  ngOnInit() {}

}
