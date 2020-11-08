import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchComponent } from './filters/launch/launch.component';
import { LandingComponent } from './filters/landing/landing.component';
import { YearListComponent } from './filters/year-list/year-list.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { FilterComponent } from './filters/filter.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    YearListComponent,
    LaunchComponent,
    LandingComponent,
    LayoutComponent,
    FilterComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
