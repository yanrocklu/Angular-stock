import {Injectable} from "@angular/core";
import {Stock} from "../model/stock.model";
import {Subject} from "rxjs";

@Injectable()
export class StockService{
  //use this stockChanged because the stock array changed
  stockChanged = new Subject<Stock[]>();

  private stocks: Stock[] = [
    new Stock(
      0,
      'Netflix',
      'NFLX'
    ),
    new Stock(
      1,
      'Apple',
      'AAPL'
    ),
    new Stock(
      2,
      'Google',
      'googl'
    ),
    new Stock(
      3,
      'Facebook',
      'FB'
    ),
    new Stock(
      4,
      'Intel',
      'INTC'
    ),
    new Stock(
      5,
      'Boeing',
      'BA'
    ),
    new Stock(
      6,
      'Boeing777',
      'BA777'
    ),
    new Stock(
      7,
      'Boeing747',
      'BA747'
    )
  ];

  maxId = Math.max.apply(Math, this.stocks.map(function (stock) { return stock.id}));

  getStocks(){
    return this.stocks.slice();
  }

  setStocks(stocks: Stock[]){
    this.stocks = stocks;
    this.stockChanged.next(this.stocks.slice());
  }

  // todo: getStock, add, delete, update, need to rewrite with id

  getStock(id:number){
    // return this.stocks.slice()[id];
    // todo: Is there a better way?
    // return this.stocks.slice().filter(function (obj) {
    //   return obj.id == id;
    // });

    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    // The find() method returns the value of the first element in the array that satisfies the provided testing function.
    // console.log('this.stocks.slice().find(stock => stock.id === id)  ');
    // console.log(this.stocks.slice().find(stock => stock.id === id));

    return this.stocks.slice().find(stock => stock.id === id);
    // return this.stocks.slice().filter(stock => stock.id === id)[0];
  }



  deleteStock(id: number){
    // this.stocks.splice(id,1);
    this.stocks = this.stocks.slice().filter(stock => stock.id !== id);
    this.stockChanged.next(this.stocks.slice());
  }

  updateStock(id: number, newStock: Stock){
// todo: there must be some better way!!!
    let stockById = this.stocks.slice().find(stock => stock.id === id);
    let updateIndex = this.stocks.indexOf(stockById);
    this.stocks[updateIndex] = newStock;
    this.stockChanged.next(this.stocks.slice());
  }

  addStock(stock: Stock){
    this.stocks.push(stock);
    this.stockChanged.next(this.stocks.slice());
  }
}