import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FulllayoutComponent } from './fulllayout/fulllayout.component';
import { AppbarComponent } from '../appbar/appbar/appbar.component';
import { MaterialModule } from '../../app/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppbarComponent,
    FulllayoutComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FulllayoutModule { }
