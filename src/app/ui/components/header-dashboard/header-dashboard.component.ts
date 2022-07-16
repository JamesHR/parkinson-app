import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss'],
})
export class HeaderDashboardComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
