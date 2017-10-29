import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {StockEditComponent} from "./stock-edit/stock-edit.component";
import {StockDetailComponent} from "./stock-detail/stock-detail.component";
import {StocksComponent} from "./stocks.component";
import {StockListComponent} from "./stock-list/stock-list.component";
import {StockStartComponent} from "./stock-start/stock-start.component";
import {StockItemComponent} from "./stock-list/stock-item/stock-item.component";
import {PipesModule} from "../pipe/pipes.module";
import {AppRoutingModule} from "../app-routing/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    StocksComponent,
    StockListComponent,
    StockStartComponent,
    StockItemComponent,
    StockDetailComponent,
    StockEditComponent,]
})
export class StocksModule {
}
