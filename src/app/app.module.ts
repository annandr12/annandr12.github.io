import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { ActivityComponent } from './element-left/activity/activity.component';
import { TypeFilterPipe } from './shared/pipes/type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeddyBearComponent,
    TemperaturComponent,
    ElementLeftComponent,
    ActivityComponent,
    TypeFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
