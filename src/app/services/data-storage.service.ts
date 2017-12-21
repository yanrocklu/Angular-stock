import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {StockService} from "./stock.service";
import {Stock} from "../model/stock.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private stockService: StockService,
              private http: Http,
              private authService: AuthService) {
  }

  saveStocks() {
    const token = this.authService.getToken();
    // the put Method ony gives back an observable
    return this.http.put('https://ngstock-rock.firebaseio.com/stocks.json?auth=' +token, this.stockService.getStocks());
  }

  fetchStocks() {
    const token = this.authService.getToken();

    this.http.get('https://ngstock-rock.firebaseio.com/stocks.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          const stocks: Stock[] = response.json();
          this.stockService.setStocks(stocks);
        }
      )
  }

}
