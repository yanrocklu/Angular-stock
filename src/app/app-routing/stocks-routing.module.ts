import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {StockEditComponent} from "../stocks/stock-edit/stock-edit.component";
import {StockStartComponent} from "../stocks/stock-start/stock-start.component";
import {StocksComponent} from "../stocks/stocks.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {StockDetailComponent} from "../stocks/stock-detail/stock-detail.component";


const stockRoutes: Routes = [
  {
    path: '', component: StocksComponent,
    children: [
      {path: '', component: StockStartComponent},
      {path: 'new', component: StockEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: StockDetailComponent},
      {path: ':id/edit', component: StockEditComponent, canActivate: [AuthGuardService]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(stockRoutes)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class StocksRoutingModule { }
