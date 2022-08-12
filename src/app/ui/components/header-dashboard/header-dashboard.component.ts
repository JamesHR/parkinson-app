import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss'],
})
export class HeaderDashboardComponent implements OnInit {

  @Input() title: string;

  constructor(private menuController: MenuController) { }

  ngOnInit() {}

  onClickMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }

}
