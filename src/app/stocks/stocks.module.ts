import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StockEditComponent} from "./stock-edit/stock-edit.component";
import {StockDetailComponent} from "./stock-detail/stock-detail.component";
import {StocksComponent} from "./stocks.component";
import {StockListComponent} from "./stock-list/stock-list.component";
import {StockStartComponent} from "./stock-start/stock-start.component";
import {StockItemComponent} from "./stock-list/stock-item/stock-item.component";
import {SharedModule} from "../shared/shared.module";
import {StocksRoutingModule} from "../app-routing/stocks-routing.module";

@NgModule({
  declarations: [
    StocksComponent,
    StockListComponent,
    StockStartComponent,
    StockItemComponent,
    StockDetailComponent,
    StockEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    StocksRoutingModule,
  ],
})
export class StocksModule {
}
