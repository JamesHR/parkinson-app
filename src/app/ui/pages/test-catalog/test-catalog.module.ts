import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCatalogPageRoutingModule } from './test-catalog-routing.module';

import { TestCatalogPage } from './test-catalog.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCatalogPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestCatalogPage]
})
export class TestCatalogPageModule {}
