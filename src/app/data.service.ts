import { Injectable } from '@angular/core';
import { Currency } from './currency';
import * as Collections from 'typescript-collections';
import { KrakenService } from './kraken.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/observer';
import { Response } from '@angular/http';
import 'rxjs/add/observable/forkJoin';
import { Ticker } from './ticker';
import { KrakenPairs } from './krakenPairs';

@Injectable()
export class DataService {

  constructor(private krakenService: KrakenService) { }


  public buildCurrenciesStructure(str?: string): Observable<Currency> {
    return this.associateTickerGettingDictionary();
  }

  private associateTickerGettingDictionary(): Observable<Currency> {

    return Observable.create((observer: Observer<Currency>) => {

      const currenciesDictionary: Collections.Dictionary<string, Currency> = new Collections.Dictionary<string, Currency>();

      this.krakenService.getAllCurrencies().subscribe((krakenCurrencies) => {
        krakenCurrencies.getAllPairs().forEach((currencyKey, currency) => {
          const convertableTo: string = currency.getBase();
          const fullChangeLabel: string = currency.getFullname();
          const convertableFrom: string = currency.getQuote();
          const currencyNode: Currency = new Currency(convertableTo);

          if (!currenciesDictionary.containsKey(convertableTo)) {
            currenciesDictionary.setValue(convertableTo, currencyNode);
          }

          this.krakenService.getValuePair(fullChangeLabel)
            .subscribe((ticker) => {
              currenciesDictionary.getValue(convertableTo).getConvertibles().setValue(currencyNode, ticker);

              if (!currenciesDictionary.containsKey(convertableFrom)) {
                currenciesDictionary.setValue(convertableTo, new Currency(convertableFrom));
              }

              currenciesDictionary.getValue(convertableFrom).getConvertibles().setValue(currencyNode, ticker.getInverted());
              observer.next(currenciesDictionary.getValue('EUR'));
            });
        });
      });
    });
  }
}
