import { Component,NgModule } from '@angular/core';
import { WorkerAppModule } from '@angular/platform-webworker';

@NgModule({
  imports: [WorkerAppModule],
  providers: [],
  bootstrap: [App],
  declarations: [App]
})
export class AppModule {
}

var NUM_ITEMS_PER_ROUND: number = 30;
const MAX_ITEMS = 100000;

@Component({
  selector: 'app', 
  templateUrl: 'app.component.html',
  host: {
    '(window:scroll)': 'createData($event)'
    }
  })
export class App {  

  lastNum = Math.pow(2, 25);
  items: Array<DataRow>  = [];

  constructor() {
    this.createData();
  }

  public createData(): void {
    console.log("Generating data");
    if (this.items.length > MAX_ITEMS) {
      return;
    }
    for (var i = 0; i < NUM_ITEMS_PER_ROUND; i++){
      var num = this.lastNum * 1.05;
      var factor = this._findLargestPrimeFactor(num);
      this.items.push({
        num: num,
        factor: factor
      });

      this.lastNum = num;
    }
    console.log("Generated data");
  }

  private _findFactors(num: number): Array<number> {
    var factors = [];
    for (var i = 1; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  private _isPrime(num: number): boolean {
    return this._findFactors(num).length === 1;
  }

  private _findLargestPrimeFactor(num: number): number {
    var factors = this._findFactors(num);
    if (factors.length === 0) {
      // number is prime
      return num
    }
    var primeFactors = factors.filter((num: number) => this._isPrime(num));
    return primeFactors[primeFactors.length - 1];
  }
}

class DataRow {
  num: number;
  factor: number;
}



