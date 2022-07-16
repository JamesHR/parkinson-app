import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestProcessPage } from './test-process.page';

const routes: Routes = [
  {
    path: '',
    component: TestProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestProcessPageRoutingModule {}
