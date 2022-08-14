import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientsTestResultPageRoutingModule } from './patients-test-result-routing.module';

import { PatientsTestResultPage } from './patients-test-result.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientsTestResultPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PatientsTestResultPage]
})
export class PatientsTestResultPageModule {}
