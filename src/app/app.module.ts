import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StocksComponent,
    StockListComponent,
    StockStartComponent,
    StockItemComponent,
    StockDetailComponent,
    StockEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
