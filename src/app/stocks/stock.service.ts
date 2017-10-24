import {Injectable} from "@angular/core";
import {Stock} from "./stock.model";
import {Subject} from "rxjs";

@Injectable()
export class StockService{
  //use this stockChanged because the stock array changed
  stockChanged = new Subject<Stock[]>();

  private stocks: Stock[] = [
    new Stock(
      'Apple',
      'AAPL'
    ),
    new Stock(
      'Google',
      'googl'
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
    ),
    new Stock(
      'Boeing777',
      'BA777'
    ),
    new Stock(
      'Boeing747',
      'BA747'
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

  updateStock(index: number, newStock: Stock){
    this.stocks[index] = newStock;
    this.stockChanged.next(this.stocks.slice());
  }

  addStock(stock: Stock){
    this.stocks.push(stock);
    this.stockChanged.next(this.stocks.slice());
  }
}