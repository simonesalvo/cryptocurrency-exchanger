import { Component, OnInit } from '@angular/core';
import { CalculatorCore } from './calculator-core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {

    this.dataService.buildCurrenciesStructure('EUR').subscribe(data => {
        console.log(new CalculatorCore().getMaxProfitCurrencyPath(500, data));
    });
  }
}
