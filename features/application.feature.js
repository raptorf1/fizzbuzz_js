require('../spec.helper');

describe ('User can input a value and get FizzBuzz results', () => {
  // Initialize a browser and visit the server's root path
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  // Reload before each test 
  beforeEach(async () => {
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after(() => {
    browser.close();
  });

  // Example test
  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", {with: "3"})
    await browser.clickOnButton("button[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql("Fizz");
  });
});