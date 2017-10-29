import {NgModule} from "@angular/core";

import {DropdownDirective} from "./dropdown.directive";
import {PipesModule} from "./pipe/pipes.module";

@NgModule({
  imports: [
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
