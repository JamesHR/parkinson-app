import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { IonicModule } from '@ionic/angular';
import { CardGraphComponent } from './card-graph/card-graph.component';
import { CardGraphSmallComponent } from './card-graph-small/card-graph-small.component';
import { CardDataComponent } from './card-data/card-data.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardTableComponent } from './card-table/card-table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardDataComponent,
    CardGraphComponent,
    CardGraphSmallComponent,
    CardInfoComponent,
    CardTableComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CardDataComponent,
    CardGraphComponent,
    CardGraphSmallComponent,
    CardInfoComponent,
    CardTableComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
