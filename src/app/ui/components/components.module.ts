import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { IonicModule } from '@ionic/angular';
import { CardDataComponent } from './card-data/card-data.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardTableComponent } from './card-table/card-table.component';
import { RouterModule } from '@angular/router';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardChartComponent } from './card-chart/card-chart.component';
import { CardChartSmallComponent } from './card-chart-small/card-chart-small.component';



@NgModule({
  declarations: [
    CardChartComponent,
    CardChartSmallComponent,
    CardDataComponent,
    CardInfoComponent,
    CardListComponent,
    CardTableComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    MenuComponent,
    MenuContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CardChartComponent,
    CardChartSmallComponent,
    CardDataComponent,
    CardInfoComponent,
    CardListComponent,
    CardTableComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    MenuComponent,
    MenuContentComponent
  ]
})
export class ComponentsModule { }
