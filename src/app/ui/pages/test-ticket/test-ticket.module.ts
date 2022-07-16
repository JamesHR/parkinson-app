import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestTicketPageRoutingModule } from './test-ticket-routing.module';

import { TestTicketPage } from './test-ticket.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestTicketPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestTicketPage]
})
export class TestTicketPageModule {}
