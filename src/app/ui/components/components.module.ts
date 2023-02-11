import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { DrawingCanvasComponent } from './drawing-canvas/drawing-canvas.component';
import { SignaturePadModule } from 'angular2-signaturepad';



@NgModule({
  declarations: [
    CardChartComponent,
    CardChartSmallComponent,
    CardDataComponent,
    CardInfoComponent,
    CardListComponent,
    CardTableComponent,
    DrawingCanvasComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    MenuComponent,
    MenuContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SignaturePadModule
  ],
  exports: [
    CardChartComponent,
    CardChartSmallComponent,
    CardDataComponent,
    CardInfoComponent,
    CardListComponent,
    CardTableComponent,
    DrawingCanvasComponent,
    HeaderComponent,
    HeaderDashboardComponent,
    MenuComponent,
    MenuContentComponent
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
