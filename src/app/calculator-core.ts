import { Currency } from "./currency";
import * as Collections from 'typescript-collections';
import {Ticker} from "./ticker";

/**
 * Created by ssalvo on 30/08/2017.
 */

export class CalculatorCore {

  private inputOutputCurrency: string = "EUR";
  private returningPath: Collections.Dictionary<number, string[]> = null;

  constructor() {
    this.returningPath = new Collections.Dictionary<number,string[]>();
  }


  getMaxProfitCurrencyPath(price: number, currency: Currency, steps = 2, path?: string[]): Collections.Dictionary<number,string[]> {

    currency.getConvertibles().forEach((convertableCurrency: Currency, value: Ticker) => {

      if (steps > 0) {
        steps--;
        if (currency.getLabel().localeCompare(this.inputOutputCurrency)) {
          path = [convertableCurrency.getLabel()];
          this.getMaxProfitCurrencyPath(price * value.getBidVolume(), convertableCurrency, steps, path);
        }
      } else {
        let outputCurrency: Currency = convertableCurrency.convertTo(this.inputOutputCurrency);
        if (outputCurrency != null) {
          path.push(outputCurrency.getLabel());
          this.returningPath.setValue(convertableCurrency.getConvertibles().getValue(outputCurrency).getBidPrice() * price, path);
        }
      }
    });
    return this.returningPath;
  }
}


