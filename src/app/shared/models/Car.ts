export class Car {
  public brand: string;
  public model: string;
  public price: number;
  public year: number;
  public url: string;
  public uniquePath: string;


  constructor(brand?: string, model?: string, price?: number, year?: number, url?: string, uniquePath?: string) {
    this.brand = brand ? brand : "";
    this.model = model ? model : "";
    this.price = price ? price : 0;
    this.year = year ? year : 0;
    this.url = url ? url : "";
    this.uniquePath = uniquePath ? uniquePath : "";
  }
}
