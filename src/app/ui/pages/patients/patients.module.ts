import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientsPageRoutingModule } from './patients-routing.module';

import { PatientsPage } from './patients.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PatientsPage]
})
export class PatientsPageModule {}
