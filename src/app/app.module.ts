import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {StockService} from "./stocks/stock.service";
import {DropdownDirective} from "./shared/dropdown.directive";
import {CommonModule} from "@angular/common";
import { ErrorPageComponent } from './error-page/error-page.component';
import {DataStorageService} from "./shared/data-storage.service";
import { SaveDataComponent } from './popup/save-data/save-data.component';
import {AuthService} from "./auth/auth.service";
import {StocksModule} from "./stocks/stocks.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
// import {Ng2PopupModule} from "ng2-popup";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    SaveDataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    StocksModule,
    FormsModule,
    SharedModule,
    AuthModule
    // Ng2PopupModule
  ],
  exports: [AppRoutingModule],
  providers: [StockService,DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
