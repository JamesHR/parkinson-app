import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardHistoryPageRoutingModule } from './dashboard-history-routing.module';

import { DashboardHistoryPage } from './dashboard-history.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardHistoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DashboardHistoryPage]
})
export class DashboardHistoryPageModule {}
