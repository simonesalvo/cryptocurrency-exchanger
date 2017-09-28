/**
 * Created by ssalvo on 31/08/  getQuote(): any {
    throw new Error("Method not implemented.");
  }
2017.
 */

export class CurrencyDetail {

  constructor(private fullname: string, private base: string, private quote: string) {
  }

  public getBase(): string {
    return this.base;
  }

  public getFullname(): string {
    return this.fullname;
  }

  public getQuote(): string {
    return this.quote;
  }

}
