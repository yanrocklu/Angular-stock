import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";

import {HomeComponent} from "../core/home/home.component";
import {StocksComponent} from "../stocks/stocks.component";
import {StockStartComponent} from "../stocks/stock-start/stock-start.component";
import {StockDetailComponent} from "../stocks/stock-detail/stock-detail.component";
import {StockEditComponent} from "../stocks/stock-edit/stock-edit.component";
import {ErrorPageComponent} from "../core/error-page/error-page.component";
import {AuthGuardService} from "../auth/auth-guard.service";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stocks', component: StocksComponent,
    children: [
      {path: '', component: StockStartComponent},
      {path: 'new', component: StockEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: StockDetailComponent},
      {path: ':id/edit', component: StockEditComponent, canActivate: [AuthGuardService]}
    ]
  },
  // points: redirecting anf wildcard route
  // todo: cannot redirect to an error page with route 'http://localhost:4200/stocks/25', 25 is not existing
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
