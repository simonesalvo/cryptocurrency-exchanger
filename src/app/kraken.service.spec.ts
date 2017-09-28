import { TestBed, inject } from '@angular/core/testing';

import { KrakenService } from './kraken.service';
import {Ticker} from "./ticker";
import {HttpModule} from "@angular/http";


describe('KrakenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [KrakenService]
    });
  });

  it('should be created', inject([KrakenService], (service: KrakenService) => {
    expect(service).toBeTruthy();
  }));
});

