import{ Selector,t } from "testcafe";

fixture`Test Automation for log in page`
    .page`https://practicetestautomation.com/practice-test-login/`;

test.skip('Log in User with valid Username and password', async t => {
    
    let username=Selector('#username')
    let password=Selector('#password')
    let submit=Selector('#submit')
    await t
    .typeText(username,"student")
    .typeText(password,"Password123" )
    .click(submit)


});