/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-test-result',
  templateUrl: './patients-test-result.page.html',
  styleUrls: ['./patients-test-result.page.scss'],
})
export class PatientsTestResultPage implements OnInit {

  data = [
    {'id': 100, 'Tipo': 'Espirales', 'Ejercicio realizado': 'Espiral 100', 'Precisión': '50.01%', 'Tiempo': '0m 52s', 'Resultado': 'Negativo'},
    {'id': 105, 'Tipo': 'Espirales', 'Ejercicio realizado': 'Espiral 105', 'Precisión': '27.12%', 'Tiempo': '1m 17s', 'Resultado': 'Positivo'},
    {'id': 201, 'Tipo': 'Picos', 'Ejercicio realizado': 'Picos 201', 'Precisión': '72.30%', 'Tiempo': '0m 57s', 'Resultado': 'Negativo'},
    {'id': 203, 'Tipo': 'Picos', 'Ejercicio realizado': 'Picos 203', 'Precisión': '47.52%', 'Tiempo': '1m 22s', 'Resultado': 'Negativo'},
    {'id': 312, 'Tipo': 'Ondas', 'Ejercicio realizado': 'Ondas 312', 'Precisión': '53.22%', 'Tiempo': '0m 32s', 'Resultado': 'Negativo'},
    {'id': 301, 'Tipo': 'Ondas', 'Ejercicio realizado': 'Ondas 301', 'Precisión': '78.80%', 'Tiempo': '0m 42s', 'Resultado': 'Negativo'}
  ];

  isModalOpen = false;
  itemSelected = this.data[0];

  constructor() { }

  ngOnInit() {
  }

  setOpenModal = (isOpen: boolean = true) => this.isModalOpen = isOpen;
  setItemSelected = (id: number) => this.itemSelected = this.data.find(item => item.id === id);

  tableItemReceptor = (id: number = 0) => {
    this.setOpenModal();
    this.setItemSelected(id);
  };

}
