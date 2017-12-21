import {NgModule} from "@angular/core";
import {DropdownDirective} from "./dropdown.directive";
import {PipesModule} from "./pipe/pipes.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    PipesModule
  ],
  declarations: [
    DropdownDirective
  ],
  providers: [],
  exports: [
    PipesModule,
    DropdownDirective,
    CommonModule]
})
export class SharedModule {
}
