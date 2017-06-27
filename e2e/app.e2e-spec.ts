import { InfotelIdeaBoxAppPage } from './app.po';

describe('infotel-idea-box-app App', () => {
  let page: InfotelIdeaBoxAppPage;

  beforeEach(() => {
    page = new InfotelIdeaBoxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
