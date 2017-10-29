import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {StockService} from "./services/stock.service";
import {CommonModule} from "@angular/common";
import {DataStorageService} from "./services/data-storage.service";
import {SaveDataComponent} from "./popup/save-data/save-data.component";
import {AuthService} from "./auth/auth.service";
import {StocksModule} from "./stocks/stocks.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";
// import {Ng2PopupModule} from "ng2-popup";

@NgModule({
  declarations: [
    AppComponent,
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
    AuthModule,
    CoreModule
    // Ng2PopupModule
  ],
  exports: [AppRoutingModule],
  providers: [StockService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
