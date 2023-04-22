import{ Selector,t } from "testcafe";
import { ClientFunction } from 'testcafe';

fixture`Test Automation for log in page`
    .page`https://practicetestautomation.com/practice-test-login/`;

test(' Log in User with valid Username and password, assertions of exist the log out button and the new URL', async t => {
    
    let username=Selector('#username')
    let password=Selector('#password')
    let submit=Selector('#submit')
    let text=Selector('strong').innerText
    let text2=Selector('h1').innerText
    let Logout=Selector('a').withExactText('Log out')
    
    await t
    .typeText(username,"student")
    .typeText(password,"Password123")
    .click(submit)
    .expect(text).contains('Congratulations')
    .expect(text2).contains('Logged In Successfully')
    .expect(Logout.exists).ok()
    .expect(Logout.visible).ok();
    
    const getURL = await ClientFunction(() => window.location.href)()
   await t 
  .expect(getURL).contains('practicetestautomation.com/logged-in-successfully/')
});