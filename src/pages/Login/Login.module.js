//----Declaración de requerimientos
const utils= require('./../../utils/utils');
const config= require('./Login.locator');
const I = actor();
let wait = { retries: 5, minTimeout: 2000 };
//-----------------------------------------------------------

module.exports = {

  cfg: config.config,

  async IniciarSesion(username, password)
  {
    I.retry(wait).amOnPage('/ssiccpeespdp/index.xhtml');    
    I.retry(wait).fillField(this.cfg.locator.Username, username);
    I.retry(wait).fillField(this.cfg.locator.Password, password);
    I.retry(wait).click(this.cfg.locator.BtnIniciar); 
  }
}