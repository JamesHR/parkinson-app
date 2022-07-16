import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardSettingsPageRoutingModule } from './dashboard-settings-routing.module';

import { DashboardSettingsPage } from './dashboard-settings.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardSettingsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DashboardSettingsPage]
})
export class DashboardSettingsPageModule {}
