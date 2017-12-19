import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";

import {HomeComponent} from "../core/home/home.component";
import {ErrorPageComponent} from "../core/error-page/error-page.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'stocks', component: StocksComponent},
  {path: 'stocks', loadChildren: '../stocks/stocks.module#StocksModule'},
  // points: redirecting any wildcard route
  // todo: cannot redirect to an error page with route 'http://localhost:4200/stocks/25', 25 is not existing
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
