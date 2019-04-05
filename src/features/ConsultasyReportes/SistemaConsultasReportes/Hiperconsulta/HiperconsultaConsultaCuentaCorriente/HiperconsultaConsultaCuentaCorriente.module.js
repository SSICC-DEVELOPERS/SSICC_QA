//----Declaración de requerimientos

//const I = actor();
//const assert = require('assert');
//let wait = { retries: 5, minTimeout: 2000 };
//const utils= require('../../utils/utils');
//const config= require('./ValidarKitAutomatico.locator')
//-----------------------------------------------------------



//------------Proceso: HIPERCONSULTA Consulta Cuenta Corriente----------
const executeClick = require('../helpers/helperWebdriverIO');

module.exports = {

  async signIn(username, password)
  {
    console.log('Deseo loguearme en Belcorp');
    I.retry(wait).amOnPage(Locators.Url);
    I.retry(wait).wait(1);
    console.log('Se ingreso a pagina Belcorp');
    I.retry(wait).fillField(Locators.Username, username);
    console.log('Se Ingreso usuario');
    I.retry(wait).fillField(Locators.Password, password);
    console.log('Se Ingreso contraseña');
    I.retry(wait).executeClick(Locators.ButtonSignIn);
    console.log('dio click');
    I.retry(wait).wait(2);
    console.log('Ingrese a pagina');
    I.retry(wait).click(Locators.LinkConsultaReportes);
    console.log('Click Consulta Reportes');
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkSistemaConsultasReportes);
    console.log('Clic Sistema Consultas Reportes');
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkHiperConsulta);
    console.log('Clic Hiper Consulta');
    I.retry(wait).wait(1);
    I.retry(wait).click(Locators.OptionMostrarDatosCliente);
    console.log('Clic en Mostrar Datos Cliente');
  },

 async consultora(CodigoClienteBuscar)
  {
     console.log('Clic en Campo Codigo');
     I.retry(wait).wait(1);
     I.retry(wait).within({ frame:'//*[@id="iframeCenter"]' }, async() =>
       {
        I.retry(wait).fillField('//*[@id="codigoClienteBuscar"]', CodigoClienteBuscar);
            console.log('Ingrese el Código');
            I.retry(wait).wait(1);
            I.retry(wait).click(Locators.ButtonBusqueda);
            console.log('Clic en el botón Busqueda');
            I.retry(wait).wait(2);
            console.log('ingresa a metodo opcionconsulta');
            I.retry(wait).wait(3);
            I.retry(wait).click('//*[@id="opcionConsulta:select"]');
            I.retry(wait).click('//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"CONSULTA CUENTA CORRIENTE")]')
            //I.retry(wait).fillField('//*[@id="opcionConsulta:select_filter"]', "CONSULTA PEDIDOS");
            //I.retry(wait).pressKey('Enter');
            I.retry(wait).wait(1);
            console.log('Clic en Consulta Cuenta Corriente');
            I.retry(wait).wait(1);
            //I.retry(wait).seeElement('#modal');
            //I.waitForVisible('#popup');
           // I.waitForVisible('#principalFormPopUp',3);
            I.retry(wait).waitForVisible('/html/body');
            //I.retry(wait).resizeWindow(1537, 824);
            console.log('Carga principalFormPopUp');  
            //I.retry(wait).ResizeWindow(1537,824);          
            I.retry(wait).wait(4);
            console.log(Values.CodigodeConsultoraIngresado);  
            //I.retry(wait).fillField(Values.CodigodeConsultoraIngresado);
            //I.retry(wait).saveScreenshot('resultSearch5.png',true);
            I.retry(wait).pressKey(['Control','w']);
            console.log('Cierra principalFormPopUp'); 
            //I.retry(wait).resizeWindow(maximize);
       });
  }
}
