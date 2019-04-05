//----Declaración de requerimientos

//const I = actor();
//const assert = require('assert');
//let wait = { retries: 5, minTimeout: 2000 };
//const utils= require('../../utils/utils');
//const config= require('./ValidarKitAutomatico.locator')
//-----------------------------------------------------------


//------------Proceso: HIPERCONSULTA Consulta Pedidos----------
const executeClick = require('../helpers/helperWebdriverIO');
const I = actor();


module.exports = {

  async signIn(username, password)
  {
    console.log('Deseo loguearme en Belcorp');
    I.retry(wait).amOnPage(Locators.Url);
    I.retry(wait).wait(1);
    I.retry(wait).fillField(Locators.Username, username);
    I.retry(wait).fillField(Locators.Password, password);
    I.retry(wait).executeClick(Locators.ButtonSignIn);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkConsultaReportes);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkSistemaConsultasReportes);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkHiperConsulta);
    I.retry(wait).wait(1);
    I.retry(wait).click(Locators.LinkMostrarDatosCliente);
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
            I.retry(wait).wait(1);
            console.log('ingresa a metodo opcionconsulta select');
            I.retry(wait).wait(2);
            I.retry(wait).click('//*[@id="opcionConsulta:select"]');
            I.retry(wait).click('//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"CONSULTA PEDIDOS")]')
            console.log('Clic en Consulta Pedidos');
            I.retry(wait).wait(3);
            I.retry(wait).waitForVisible('/html/body');
            console.log('Carga principalFormPopUp');    
            I.retry(wait).wait(4);
            I.retry(wait).cancelPopup('/html/body');
            //console.log(Values.CodigodeConsultoraIngresado);  
            //I.retry(wait).pressKey(['Control','w']);
            //console.log('Cierra principalFormPopUp'); 
            I.retry(wait).wait(3);
            //I.retry(wait).click('//*[@id="opcionConsulta:select"]');
            I.retry(wait).click('//*[@id="linkOpcionConsulta_HIP-3:linkImagen"]');
            console.log('Clic en LUPA -- detalle');

       });
  }
}