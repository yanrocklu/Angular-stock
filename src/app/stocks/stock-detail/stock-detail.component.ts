import {Component, OnInit} from "@angular/core";
import {Stock} from "../../model/stock.model";
import {StockService} from "../../services/stock.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  stock: Stock;
  id: number;

  constructor(private stockService: StockService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          if (this.stockService.getStock(this.id)) {
            this.stock = this.stockService.getStock(this.id);
            console.log('this.id: ' + this.id);
          }
          else{
            // this.stock = null;
            this.router.navigate(['../../not-found'], {relativeTo: this.route});
            console.log('cannot find ' + this.id);
          }
        }
      )
  }

  onEditStock() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteStock() {
    this.stockService.deleteStock(this.id);
    this.router.navigate(['/stocks']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
