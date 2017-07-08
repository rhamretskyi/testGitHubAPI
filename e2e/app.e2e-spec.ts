import { TestGitHubAPIPage } from './app.po';

describe('test-git-hub-api App', () => {
  let page: TestGitHubAPIPage;

  beforeEach(() => {
    page = new TestGitHubAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
