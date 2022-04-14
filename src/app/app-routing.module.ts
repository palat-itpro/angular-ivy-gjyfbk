import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout
import { AuthlayoutComponent } from './layout/auth/authcomponents/authlayout.components';
import { FulllayoutComponent } from '';

const routes: Routes = [
  {
    // Auth
    path: '',
    component: AuthlayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./layout/auth/authlayout/authlayout.module').then(
            (m) => m.AuthlayoutModule
          ),
      },
    ],
  },
  {
    // App
    path: '',
    component: FulllayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full',
      },
      {
        path: 'app',
        loadChildren: () =>
          import('../layout/fulllayout/fulllayout.module').then(
            (m) => m.FulllayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
