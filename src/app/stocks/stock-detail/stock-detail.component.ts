import {Component, OnInit} from "@angular/core";
import {Stock} from "../stock.model";
import {StockService} from "../stock.service";
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  stock: Stock;
  id: number;

  constructor(private stockService: StockService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.stock = this.stockService.getStock(this.id);
        }
      )
  }

  onEditStock(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteStock(){
    this.stockService.deleteStock(this.id);
    this.router.navigate(['/stocks']);
  }

}
