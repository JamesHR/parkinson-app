import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() activeOption: string;

  menu = [
    { icon: 'home', value: 'Inicio', isActive: false, path: '/dashboard-home'},
    { icon: 'time', value: 'Historial', isActive: false, path: '/dashboard-history'},
    { icon: 'settings', value: 'Configuraciones', isActive: false, path: '/dashboard-settings'}
  ];

  constructor() { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter = () =>
    this.menu.forEach(item => item.isActive = this.activeOption === item.value);


}
