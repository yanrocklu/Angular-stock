import {Injectable} from "@angular/core";
import {Stock} from "./stock.model";
import {Subject} from "rxjs";

@Injectable()
export class StockService{
  stockChanged = new Subject<Stock[]>();

  private stocks: Stock[] = [
    new Stock(
      'Apple',
      'AAPL'
    ),
    new Stock(
      'Google',
      'GOOGL'
    ),
    new Stock(
      'Facebook',
      'FB'
    ),
    new Stock(
      'Intel',
      'INTC'
    ),
    new Stock(
      'Boeing',
      'BA'
    )
  ];

  getStocks(){
    return this.stocks.slice();
  }

  getStock(index:number){
    return this.stocks.slice()[index];
  }

  deleteStock(index: number){
    this.stocks.splice(index,1);
    this.stockChanged.next(this.stocks.slice());
  }
}