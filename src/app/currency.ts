/**
* Created by ssalvo on 29/08/2017.
*/

import * as Collections from 'typescript-collections';
import { Ticker } from './ticker';

export class Currency {

  private convertible: Collections.Dictionary<Currency, Ticker>;

  constructor(private label: string) {
    this.convertible = new Collections.Dictionary<Currency, Ticker>();
  }

  public getConvertibles(): Collections.Dictionary<Currency, Ticker> {
    return this.convertible;
  }

  public getLabel(): string {
    return this.label;
  }

  convertTo(compareCurrency: string): Currency {
    this.convertible.forEach((key: Currency, value: Ticker) => {
      if (key.getLabel().localeCompare(compareCurrency)) {
        return this.convertible.getValue(key);
      }
    });
    return null;
  }
}
