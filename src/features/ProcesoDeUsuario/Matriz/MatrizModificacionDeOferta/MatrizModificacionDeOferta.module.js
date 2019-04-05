//----Declaración de requerimientos

//const I = actor();
//const assert = require('assert');
//let wait = { retries: 5, minTimeout: 2000 };
//const utils= require('../../utils/utils');
//const config= require('./ValidarKitAutomatico.locator')
//-----------------------------------------------------------


//------------Proceso: Matriz Modificación de Oferta----------
const executeClick = require('../helpers/helperWebdriverIO');
const I = actor();

const Locators =
{
Url: '/ssiccpeespdp/index.xhtml',
Username: '//*[@id="usuario:input"]',
Password: '//*[@id="j_idt28:input"]',
ButtonSignIn: '//*[@id="j_idt35"]/span',
LinkProcesoUsuario:'//*[@id="menu"]/li[2]/a',
LinkMatriz:'MATRIZ', //*[@id="menu2"]/a
LinkModificarOfertas:'Modificacion de Ofertas', 
FechaCampana:'//iframe[@id="iframeCenter"]/input[@id="codigoPeriodo:campanya"]',
CodigoCVU:'//iframe[@id="iframeCenter"]/input[@id="CUV:input"]',
ButtonBusqueda:'//*[@id="j_idt23:linkBuscarAjax:linkImagen"]',
SeleccionaRegistro:'//tbody/*[@data-ri=0]',
ButtonModificar:'//*[@id="j_idt141:linkImagen"]',
SeleccionaRegistroDatosPrincipales:'//tbody/*[@data-ri=0]',
ButtonModificarDatosPrincipales:'//*[@id="j_idt124:linkImagen"]',
PrecioContableModificaionOfertas:'//iframe[@id="dataModificarProductoPrincipal"]/input[@id="preContable"]',
ButtonGuardarModificacionOfertas:'//*[@id="j_idt211:linkImagen"]',
MensajeModificarOfertas:'//*[@id="mensajesGrowl_container"]',
};

const Values = {
ComboOpcionConsultaPedidos:'CONSULTA PEDIDOS',
CodigodeConsultoraIngresado:'044176467'
}

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
    I.retry(wait).click(Locators.LinkProcesoUsuario);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkMatriz);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkModificarOfertas);
    console.log('Clic Modificación de Ofertas');
    I.retry(wait).wait(2);
  },

 async campana(FechaCampana)
  {
     console.log('Clic en Campo Campaña');
     I.retry(wait).wait(1);
     I.retry(wait).within({ frame:'//*[@id="iframeCenter"]' }, async() =>
       {
          I.retry(wait).clearField('//*[@id="codigoPeriodo:campanya"]');
            console.log('Limpia campo fecha campaña');
            I.retry(wait).fillField('//*[@id="codigoPeriodo:campanya"]', FechaCampana);//falta cambiarcodigo xpath  anterior
            console.log('Ingreso la fecha de campaña');
            I.retry(wait).wait(2);
       });
  },

  async ingCUV(CodigoCVU)
  {
     console.log('Clic en Campo Campaña');
     I.retry(wait).wait(1);
     I.retry(wait).within({ frame:'//*[@id="iframeCenter"]' }, async() =>
       {
            I.retry(wait).I.clearField('//*[@id="CUV:input"]');
            console.log('Ingresamos la Campaña  201903');
            I.retry(wait).wait(2);
            I.retry(wait).fillField('//*[@id="CUV:input"]', CodigoCVU);//falta cambiarcodigo xpath  anterior
            console.log('Ingresamos el CUV 29024 y le damos a la Lupa de buscar:');
            I.retry(wait).wait(2);
            I.retry(wait).click(Locators.ButtonBusqueda);
            console.log('Clic en el botón Busqueda');
            I.retry(wait).wait(3);
            I.retry(wait).click(Locators.SeleccionaRegistro);
            console.log('Seleccionamos el primer registro');
            I.retry(wait).click(Locators.ButtonModificar);
            console.log('Seleccionamos el modificar');
            I.retry(wait).wait(9);
            I.retry(wait).click(Locators.SeleccionaRegistroDatosPrincipales);
            console.log('Seleccionamos el primer registro de la sección “Datos Producto Principal”');
            I.retry(wait).wait(4);
            I.retry(wait).click(Locators.ButtonModificarDatosPrincipales);
            console.log('Seleccionamos el modificar');
            I.retry(wait).wait(3);
            console.log('Carga Ventana Modificación de Ofertas:');           
       });
  },

  async preContable(PrecioContable)
  {
     console.log('Carga Ventana Modificación de Ofertas----------');
     I.retry(wait).wait(3);
     I.retry(wait).within({ frame:'//*[@id="dataModificarProductoPrincipal"]' }, async() =>
       {            
            console.log('Ingresoo a VENTANA  Modificacionde  Ofertas   PRECIO CONTABLE----------');
            I.retry(wait).clearField('//*[@id="preContable"]');
            console.log('Limpia campo precio Contable');
            I.retry(wait).wait(3);
            I.retry(wait).fillField('//*[@id="preContable"]', PrecioContableModificaionOfertas);
            console.log('Ingresamos 100 en el precio contable y le damos en guardar:');;
            I.retry(wait).wait(3);
            I.retry(wait).click(Locators.ButtonGuardarModificacionOfertas);
            I.retry(wait).see('Producto actualizado satisfactoriamente','mensajesGrowl_container'); 
            console.log('El proceso culmina satisfactoriamente con el mensaje “Producto actualizado satisfactoriamente.”');
            //await I.saveScreenshot('resultSearch5.png',true);
            I.retry(wait).pressKey(['Control','w']);
            console.log('Cierra principalFormPopUp'); 
            //I.retry(wait).resizeWindow(maximize);
       }); 
  }
}