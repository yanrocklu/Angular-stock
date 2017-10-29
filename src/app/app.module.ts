import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {SaveDataComponent} from "./popup/save-data/save-data.component";
import {StocksModule} from "./stocks/stocks.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
// import {Ng2PopupModule} from "ng2-popup";

@NgModule({
  declarations: [
    AppComponent,
    SaveDataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // AppRoutingModule,
    StocksModule,
    SharedModule,
    AuthModule,
    CoreModule
    // Ng2PopupModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
