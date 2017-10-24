import { Pipe, PipeTransform } from '@angular/core';
import {isNgTemplate} from "@angular/compiler";

@Pipe({
  name: 'stockCodeFilter'
  // the the filter result would update every time the search array changed, but this would cause performence issue
  ,
  pure: false
})
export class StockCodeFilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length == 0 || filterString === '' || !filterString){
      return value;
    }
    // const resultArray = [];
    // for (let item of value){
    //   if (item[propName] === filterString){
    //     resultArray.push(item);
    //   }
    // }
    // return resultArray;

    // includes, a wildcard search
    return value.filter(item => item[propName].toUpperCase().includes(filterString.toUpperCase()));
  }
}
