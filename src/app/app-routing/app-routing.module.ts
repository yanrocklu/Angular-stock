import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, PreloadAllModules, Routes} from "@angular/router";

import {HomeComponent} from "../home/home.component";
import {StocksComponent} from "../stocks/stocks.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stocks', component: StocksComponent}
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
