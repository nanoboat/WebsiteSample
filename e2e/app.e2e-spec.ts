import { WebsiteSample1Page } from './app.po';

describe('website-sample1 App', () => {
  let page: WebsiteSample1Page;

  beforeEach(() => {
    page = new WebsiteSample1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
