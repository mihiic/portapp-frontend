import { MihiicFrontPage } from './app.po';

describe('mihiic-front App', () => {
  let page: MihiicFrontPage;

  beforeEach(() => {
    page = new MihiicFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
