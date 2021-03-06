import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardHomePageRoutingModule } from './dashboard-home-routing.module';

import { DashboardHomePage } from './dashboard-home.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardHomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DashboardHomePage]
})
export class DashboardHomePageModule {}
