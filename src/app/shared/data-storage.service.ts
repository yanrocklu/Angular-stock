import {Injectable} from "@angular/core";
import {StockService} from "../stocks/stock.service";
import {Http} from "@angular/http";

@Injectable()
export class DataStorageService {

  constructor(private stockService: StockService,
              private http: Http) {
  }

  saveStocks() {
    // the put Method ony gives back an observable
    return this.http.put('https://ngstock-rock.firebaseio.com/stocks.json/', this.stockService.getStocks());
  }
}
