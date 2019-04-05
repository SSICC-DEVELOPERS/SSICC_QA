
let Helper = codecept_helper;

class helperWebdriverIO extends Helper {

   async executeClick(selector) {
    let currentPage = this.helpers['WebDriver'];
    let elemento = await currentPage.browser.$(selector);
    await currentPage.browser.execute((button) => { button.click()}, elemento);    
  }
}

module.exports = helperWebdriverIO;