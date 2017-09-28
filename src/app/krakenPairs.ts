import * as Collections from 'typescript-collections';
import { CurrencyDetail } from './currencyDetail';

/**
 * Created by ssalvo on 31/08/2017.
 */



export class KrakenPairs {

  private err: Array<string> = null;
  private result: Collections.Dictionary<string, CurrencyDetail> = null;

  public getAllPairs(): Collections.Dictionary<string, CurrencyDetail> {
    return this.result;
  }

  constructor(krakenInput: any) {

    this.err = krakenInput.error;
    this.result = new Collections.Dictionary<string, CurrencyDetail>();

    for (const prop in krakenInput.result) {
      if (krakenInput.result.hasOwnProperty(prop)) {
        this.result.setValue(prop, new CurrencyDetail(prop.toString(), krakenInput.result[prop].base, krakenInput.result[prop].quote));
      }
    }
  }
}
