import { NgModule } from '@angular/core';
import {DateFormatterPipe} from "./date-formatter.pipe";
import {DatePipe} from "@angular/common";
import { StockCodeFilterPipe } from './stock-code-filter.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    DateFormatterPipe,
    StockCodeFilterPipe
  ],
  providers: [
    DatePipe
  ],
  exports:[
    DateFormatterPipe,
    StockCodeFilterPipe
  ]
})
export class PipesModule { }
