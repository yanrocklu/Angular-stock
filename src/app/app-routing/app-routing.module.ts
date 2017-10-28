import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";

import {HomeComponent} from "../home/home.component";
import {StocksComponent} from "../stocks/stocks.component";
import {StockStartComponent} from "../stocks/stock-start/stock-start.component";
import {StockDetailComponent} from "../stocks/stock-detail/stock-detail.component";
import {StockEditComponent} from "../stocks/stock-edit/stock-edit.component";
import {ErrorPageComponent} from "../error-page/error-page.component";
import {SigninComponent} from "../auth/signin/signin.component";
import {SignupComponent} from "../auth/signup/signup.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stocks', component: StocksComponent,
    children: [
      {path: '', component: StockStartComponent},
      {path: 'new', component: StockEditComponent},
      {path: ':id', component: StockDetailComponent},
      {path: ':id/edit', component: StockEditComponent}
    ]
  },
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  // points: redirecting anf wildcard route
  // todo: cannot redirect to an error page with route 'http://localhost:4200/stocks/25', 25 is not existing
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
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
