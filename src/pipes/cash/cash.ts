import { Pipe } from '@angular/core';
import {DecimalPipe} from "@angular/common";
@Pipe({
  name: 'cash',
})
export class CashPipe extends DecimalPipe {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
    if( Number(value) < 1000){
      return super.transform(value || 0) ;
    }
    else if(Number(value) >= 1000 && Number(value)<1000000){
      return super.transform(((value || 0)/ 1000), "1.1-2")+"K";
    }else if(Number(value) >= 1000000 && Number(value)<1000000000){
      return super.transform(((value || 0)/ 1000000), "1.1-2")+"M";
    }else{
      return super.transform(((value || 0)/ 1000000000), "1.1-2")+"B";
    }
  }
}
