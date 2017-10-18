import {Injectable} from "@angular/core";
import {Stock} from "./stock.model";

@Injectable()
export class StockService{

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
}