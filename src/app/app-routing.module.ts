import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PatientsTestHistoryPageModule } from './ui/pages/patients-test-history/patients-test-history.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./ui/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard-home',
    loadChildren: () => import('./ui/pages/dashboard-home/dashboard-home.module').then( m => m.DashboardHomePageModule)
  },
  {
    path: 'dashboard-settings',
    loadChildren: () => import('./ui/pages/dashboard-settings/dashboard-settings.module').then( m => m.DashboardSettingsPageModule)
  },
  {
    path: 'test-catalog',
    loadChildren: () => import('./ui/pages/test-catalog/test-catalog.module').then( m => m.TestCatalogPageModule)
  },
  {
    path: 'test-process',
    loadChildren: () => import('./ui/pages/test-process/test-process.module').then( m => m.TestProcessPageModule)
  },
  {
    path: 'test-ticket',
    loadChildren: () => import('./ui/pages/test-ticket/test-ticket.module').then( m => m.TestTicketPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    loadChildren: () => import('./ui/pages/patients/patients.module').then( m => m.PatientsPageModule)
  },
  {
    path: 'patients-test-history',
    loadChildren: () => import('./ui/pages/patients-test-history/patients-test-history.module').then( m => m.PatientsTestHistoryPageModule)
  },
  {
    path: 'patients-test-result',
    loadChildren: () => import('./ui/pages/patients-test-result/patients-test-result.module').then( m => m.PatientsTestResultPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
