import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './authlayout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthlayoutComponent,
    children: [
      {
        path: 'auth',
        component: AuthlayoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthlayoutRoutingModule { }
