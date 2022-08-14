import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientsTestHistoryPageRoutingModule } from './patients-test-history-routing.module';

import { PatientsTestHistoryPage } from './patients-test-history.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientsTestHistoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PatientsTestHistoryPage]
})
export class PatientsTestHistoryPageModule {}
