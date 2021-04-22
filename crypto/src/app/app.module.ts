import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListCoinComponent } from './list-coin/list-coin.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CoinService } from './services/coin.service';
import { AlertComponent } from './alert/alert.component'
import { AlertService } from './services/alert.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListCoinComponent,
    AlertComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    AlertService,
    CoinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
