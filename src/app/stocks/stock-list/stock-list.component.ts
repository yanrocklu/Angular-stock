import {Component, OnInit, OnDestroy} from '@angular/core';

import {Stock} from "../stock.model"
import {StockService} from "../stock.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  stocks: Stock[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.subscription = this.stockService.stockChanged.subscribe(
      (stocks: Stock[]) => {
        this.stocks = stocks;
      }
    )
    this.stocks = this.stockService.getStocks();
  }

  onAddNewStock(){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
