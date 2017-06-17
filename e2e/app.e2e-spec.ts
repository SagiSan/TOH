import { ToHPage } from './app.po';

describe('to-h App', () => {
  let page: ToHPage;

  beforeEach(() => {
    page = new ToHPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
