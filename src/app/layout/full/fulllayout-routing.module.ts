import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FulllayoutComponent } from './fulllayout/fulllayout.component';

const routes: Routes = [
  {
    path: '',
    component: FulllayoutComponent,
    children: [
      {
        path: 'app',
        component: FulllayoutComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FulllayoutRoutingModule { }
