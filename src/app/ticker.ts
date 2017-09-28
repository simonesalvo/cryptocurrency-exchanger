export class Ticker {

  private static readonly price: number = 0;
  private static readonly volume: number = 1;

  private ask: number[];
  private bid: number[];
  private lastTrade: number;
  private openingPrice: number;

  constructor(ask: Array<number>, bid: Array<number>, lastTrade: number, openingPrice: number) {
    this.ask = ask;
    this.bid = bid;
    this.lastTrade = lastTrade;
    this.openingPrice = openingPrice;

  }

  public getInverted(): Ticker {
    const invertedTicker = new Ticker(this.ask, this.bid, this.lastTrade, this.openingPrice);
    invertedTicker.openingPrice = 1 / invertedTicker.getOpeningPrice();
    invertedTicker.bid[Ticker.price] = 1 / this.bid[Ticker.price];
    invertedTicker.ask[Ticker.price] = 1 / this.ask[Ticker.price];

    return invertedTicker;

  }

  public getOpeningPrice() {
    return this.openingPrice;
  }

  public getBidPrice(): number {
    return this.bid[Ticker.price];
  }

  public getBidVolume(): number {
    return this.bid[Ticker.volume];
  }
}
