import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateNewUser extends BasePage {

  constructor(page: Page) {
    super(page); 

  }
  //Navigam la site si dupa la register page
  async navigateToRegister() {
    await this.navigateTo('/register'); 
}

}