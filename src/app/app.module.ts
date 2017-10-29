import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StocksComponent } from './stocks/stocks.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockStartComponent } from './stocks/stock-start/stock-start.component';
import {StockService} from "./stocks/stock.service";
import { StockItemComponent } from './stocks/stock-list/stock-item/stock-item.component';
import { StockDetailComponent } from './stocks/stock-detail/stock-detail.component';
import { StockEditComponent } from './stocks/stock-edit/stock-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {PipesModule} from "./pipe/pipes.module";
import {CommonModule} from "@angular/common";
import { ErrorPageComponent } from './error-page/error-page.component';
import {DataStorageService} from "./shared/data-storage.service";
import { SaveDataComponent } from './popup/save-data/save-data.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from "./auth/auth.service";
import {StocksModule} from "./stocks/stocks.module";
// import {Ng2PopupModule} from "ng2-popup";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DropdownDirective,
    ErrorPageComponent,
    SaveDataComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    StocksModule,
    FormsModule
    // Ng2PopupModule
  ],
  exports: [AppRoutingModule],
  providers: [StockService,DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
