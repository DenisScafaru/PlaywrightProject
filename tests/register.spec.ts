import { test, expect } from '@playwright/test';
import { CreateNewUser } from '../UI_Project/pages/CreateNewUser';

test('Verific deschidere pagina de inregistrare', async ({ page }) => {
    // 1. Inițializăm Page Object-ul
    const registerPage = new CreateNewUser(page);

    // 2. Executăm acțiunea de navigare
    await registerPage.navigateToRegister();

    // 3. Verificăm dacă browserul a ajuns unde trebuie
    await expect(page).toHaveURL('https://demoqa.com/register');
});