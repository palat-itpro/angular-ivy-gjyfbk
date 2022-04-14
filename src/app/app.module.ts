import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppbarComponent } from '../layout/appbar/appbar/appbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FulllayoutModule } from '../layout/fulllayout/fulllayout.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FulllayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
