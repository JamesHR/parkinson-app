import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsTestHistoryPage } from './patients-test-history.page';

const routes: Routes = [
  {
    path: '',
    component: PatientsTestHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsTestHistoryPageRoutingModule {}
