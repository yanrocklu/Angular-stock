import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";

import {HomeComponent} from "../core/home/home.component";
import {ErrorPageComponent} from "../core/error-page/error-page.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  // lazy loading
  {path: 'stocks', loadChildren: '../stocks/stocks.module#StocksModule'},
  // WAS a bug (fixed by safe navigation operator): cannot redirect to an error page with route 'http://localhost:4200/stocks/25', 25 is not existing
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [
    // preloading lazy loaded routes
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
