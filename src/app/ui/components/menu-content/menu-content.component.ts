import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
})
export class MenuContentComponent implements OnInit {

  @Input() activeOption: string;
  isModalOpen = false;
  searchValue = '';

  menu = [
    { icon: 'home', value: 'Inicio', isActive: false, path: '/dashboard-home'},
    { icon: 'people', value: 'Pacientes', isActive: false, path: '/patients'},
    { icon: 'settings', value: 'Configuraciones', isActive: false, path: '/dashboard-settings'}
  ];

  patients = [
    'Claudia Ortiz Perez',
    'Ricardo Flores Vazquez',
    'José Carlos Ramírez Magón',
    'Laura Morales Flores',
    'Maria Gonzalez Reyes',
    'Juan Fernandez Fernandez',
  ];

  filterList: Array<string> = this.patients;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter = () =>
    this.menu.forEach(item => item.isActive = this.activeOption === item.value);

  setOpenModal = (isOpen: boolean = true) => this.isModalOpen = isOpen;

  searchCustomer(value: string){
    this.searchValue = value;
    this.filterList = this.patients.filter(element => element.toUpperCase().includes(value.toUpperCase()));
  }

  openCatalog() {
    this.setOpenModal(false);
    setTimeout(() =>this.router.navigate(['/test-catalog']), 100);
  }

}
