import { Ngpro02Page } from './app.po';

describe('ngpro02 App', () => {
  let page: Ngpro02Page;

  beforeEach(() => {
    page = new Ngpro02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
