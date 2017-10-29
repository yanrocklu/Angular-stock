import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {DataStorageService} from "../services/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {SharedModule} from "../shared/shared.module";
import {StockService} from "../services/stock.service";
import {AppRoutingModule} from "../app-routing/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  providers: [
    StockService,
    DataStorageService,
    AuthService
  ],
  exports: [
    AppRoutingModule,
    // export this HeaderComponent because it's used in app.component.html
    HeaderComponent
  ]
})
export class CoreModule {
}
