import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {DataStorageService} from "../services/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  providers: [
    DataStorageService,
    AuthService
  ],
  exports: [
    // export this HeaderComponent because it's used in app.component.html
    HeaderComponent
  ]
})
export class CoreModule {
}
