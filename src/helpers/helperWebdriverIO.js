
const assert = require('assert');
const Helper = codecept_helper;
const HelperName = "WebDriver";

class helperWebdriverIO extends Helper {

  async executeClick(locator) {
    let currentPage = this.helpers[HelperName];
    let selector = "";
    if (locator.xpath) selector = locator.xpath;
    if (locator.css) selector = locator.css;
    if (locator.id) selector = "#" + locator.id;
    if (locator.name) selector = locator.name;
    if (locator.link) selector = locator.link;
    if (locator.linkText) selector = locator.linkText;
    if (locator.partialLinkText) selector = locator.partialLinkText;
    if (locator.class) selector = locator.class;
    if (locator.cssSelector) selector = locator.cssSelector;
    if (locator.aria-label) selector = locator.cssSelector;
    let elemento = await currentPage.browser.$(selector);
    await currentPage.browser.execute((button) => { button.click()}, elemento);
  }

  async selectPopup(title) {
    let driver = this.helpers[HelperName];
    driver.browser.switchWindow(title);
  } 
  
  async selectPopupID(id) {

    let driver = this.helpers[HelperName];
    driver.browser.switchTo(id);
  } 
  
  async alertText() {
    let driver = this.helpers[HelperName];
    return driver.browser.getAlertText();
  }

  fail(message) {
    assert.fail(message);
  }

  async acceptAlert() 
  {   
    let driver = this.helpers[HelperName];
    driver.acceptAlert();
	//driver.browser.acceptAlert()
  }

  async forceAcceptAlert() {
    let driver = this.helpers[HelperName];
    
        try {
        let texto = await driver.browser.getAlertText();
        if (texto)
        {
          driver.browser.acceptAlert();
        }
        
        await driver.browser.pause(2000);
        return texto;
        
      } catch (error) {
        return null;
      }

   
}

async grabPopupText() {
  try {
    const dialog = await this.browser.switchTo().alert();

    if (dialog) {
      return dialog.getText();
    }
  } catch (e) {
    if (e.message.indexOf('no alert open') > -1) {
      // Don't throw an error
      return null;
    }
    throw e;
  }
}

}

module.exports = helperWebdriverIO;