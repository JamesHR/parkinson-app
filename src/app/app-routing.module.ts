import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'dashboard-history',
    loadChildren: () => import('./ui/pages/dashboard-history/dashboard-history.module').then( m => m.DashboardHistoryPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
