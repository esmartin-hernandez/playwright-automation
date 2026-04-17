import { test } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import users from '../../test-data/users.json';

test.describe('Login Tests', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo();
  });

  test('Login exitoso', async () => {

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await loginPage.validateSuccessfulLogin();
  });

  test('Login inválido', async () => {

    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await loginPage.validateErrorMessage();
  });

});