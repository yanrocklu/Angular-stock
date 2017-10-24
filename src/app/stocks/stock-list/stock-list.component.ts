import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

import {Stock} from "../stock.model";
import {StockService} from "../stock.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  stocks: Stock[];
  searchField = 'code';

  constructor(private stockService: StockService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.stockService.stockChanged.subscribe(
      (stocks: Stock[]) => {
        this.stocks = stocks;
      }
    )
    this.stocks = this.stockService.getStocks();
  }

  onAddNewStock() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
