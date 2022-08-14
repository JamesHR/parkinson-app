import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsTestResultPage } from './patients-test-result.page';

const routes: Routes = [
  {
    path: '',
    component: PatientsTestResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsTestResultPageRoutingModule {}
