import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPicksComponent } from './top-picks/top-picks.component';
import { TrendingComponent } from './trending/trending.component';
import { ChartsComponent } from './charts/charts.component';
import { SericeService } from './service/serice.service';
import { HttpClientModule } from '@angular/common/http';
import { MiniplayerComponent } from './miniplayer/miniplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPicksComponent,
    TrendingComponent,
    ChartsComponent,
    MiniplayerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SericeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
