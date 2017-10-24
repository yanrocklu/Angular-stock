export class Stock {
  public id: number;
  public name: string;
  public code: string;

  constructor(id: number, name: string, code: string) {
    this.id = id;
    this.name = name;
    this.code = code;
  }
}