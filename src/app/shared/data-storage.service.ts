import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {StockService} from "../stocks/stock.service";
import {Stock} from "../stocks/stock.model";

@Injectable()
export class DataStorageService {

  constructor(private stockService: StockService,
              private http: Http) {
  }

  saveStocks() {
    // the put Method ony gives back an observable
    return this.http.put('https://ngstock-rock.firebaseio.com/stocks.json/', this.stockService.getStocks());
  }

  fetchStocks(){
    this.http.get('https://ngstock-rock.firebaseio.com/stocks.json/')
      .subscribe(
        (response: Response) => {
          const stocks: Stock[] = response.json();
          this.stockService.setStocks(stocks);
        }
      )
  }

}
