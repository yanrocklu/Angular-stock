import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DropdownDirective} from "./dropdown.directive";
import {PipesModule} from "./pipe/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    DropdownDirective
  ],
  providers: [
  ],
  exports: [PipesModule]
})
export class SharedModule {
}
