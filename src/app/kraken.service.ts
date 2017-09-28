import { Injectable } from '@angular/core';
import { Ticker } from './ticker';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { KrakenPairs } from './krakenPairs';

@Injectable()
export class KrakenService {
  public static price = 0;

  private readonly krakenAddress: string = 'https://api.kraken.com/0/public/';

  constructor(private http: Http) {
  }

  public getAllCurrencies(): Observable<KrakenPairs> {
    return this.http.get(this.krakenAddress + 'AssetPairs')
      .map((res: Response) => {
        return new KrakenPairs(res.json());
      })
      .catch((error: any) => {
        return Observable.throw(error || 'Server error');
      });
  }

  public getValuePair(pair: string): Observable<Ticker> {

    return this.http.get(this.krakenAddress + 'Ticker?pair=' + pair)
      .map((res: Response) => {
        const obj = res.json();
        return new Ticker(obj.a, obj.b, obj.c, obj.o);
      })
      .catch((error: any) => {
        return Observable.throw(error || 'Server error');
      });
  }
}
