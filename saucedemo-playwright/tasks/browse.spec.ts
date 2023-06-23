import { test, expect, Page } from '@playwright/test';

class BrowseTheWeb {
  readonly page: Page
  name
  constructor(page) {
    this.page = page;
    this.name = "Browse the web";
  }

  static with(page) {
    return new BrowseTheWeb(page);
  }

  async visit(url) {
    await this.page.goto(url);
  }
}
export default BrowseTheWeb
