import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";

import {HomeComponent} from "../home/home.component";
import {StocksComponent} from "../stocks/stocks.component";
import {StockStartComponent} from "../stocks/stock-start/stock-start.component";
import {StockDetailComponent} from "../stocks/stock-detail/stock-detail.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stocks', component: StocksComponent,
    children: [
      {path: '', component: StockStartComponent},
      // {path: 'new', component: }
      {path: ':id', component: StockDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
