import { NgStockPage } from './app.po';

describe('ng-stock App', () => {
  let page: NgStockPage;

  beforeEach(() => {
    page = new NgStockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
