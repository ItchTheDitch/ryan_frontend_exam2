import { RyanExamJCPage } from './app.po';

describe('ryan-exam-jc App', () => {
  let page: RyanExamJCPage;

  beforeEach(() => {
    page = new RyanExamJCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
