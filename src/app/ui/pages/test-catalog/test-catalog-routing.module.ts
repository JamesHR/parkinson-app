import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCatalogPage } from './test-catalog.page';

const routes: Routes = [
  {
    path: '',
    component: TestCatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCatalogPageRoutingModule {}
