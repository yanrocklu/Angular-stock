import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router, Params} from "@angular/router";

import {StockService} from "../stock.service";

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  id: number;
  editMode = false;
  stockForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private stockService: StockService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          // use + to convert string to number
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          //  call initForm whenever the route params change, because that indicates we reload the page.
          this.initForm();
          console.log(this.id);
          console.log(this.stockForm);
          console.log(this.stockForm.value);
        }
      )
  }

  private initForm(){
    let stockName = '';
    let stockCode = '';

    if (this.editMode){
      let stock = this.stockService.getStock(this.id);
    }

    this.stockForm = new FormGroup({
      'name': new FormControl(stockName, Validators.required),
      'code': new FormControl(stockCode, Validators.required)
    })
  }

  getStockForms(){
    return this.stockForm;
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  onSubmit(){
    if (this.editMode){
      this.stockService.updateStock(this.id, this.stockForm.value);
    }
    else{
      this.stockService.addStock(this.stockForm.value);
    }
    this.onCancel();
  }

}
