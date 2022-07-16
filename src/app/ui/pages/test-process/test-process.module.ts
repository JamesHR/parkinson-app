import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestProcessPageRoutingModule } from './test-process-routing.module';

import { TestProcessPage } from './test-process.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestProcessPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestProcessPage]
})
export class TestProcessPageModule {}
