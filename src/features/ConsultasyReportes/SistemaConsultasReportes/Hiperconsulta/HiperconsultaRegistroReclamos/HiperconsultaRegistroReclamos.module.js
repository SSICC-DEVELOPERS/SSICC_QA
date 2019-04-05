//----Declaración de requerimientos

//const I = actor();
//const assert = require('assert');
//let wait = { retries: 5, minTimeout: 2000 };
//const utils= require('../../utils/utils');
//const config= require('./ValidarKitAutomatico.locator')
//-----------------------------------------------------------


//------------Proceso: Hiperconsulta Registro Reclamos----------
const executeClick = require('../helpers/helperWebdriverIO');
const I = actor();

const Locators =
{
Url: '/ssiccpeespdp/index.xhtml',
Username: '//*[@id="usuario:input"]',
Password: '//*[@id="j_idt28:input"]',
ButtonSignIn: '//*[@id="j_idt35"]/span',
LinkConsultaReportes:'//*[@id="menu"]/li[4]/a',
LinkSistemaConsultasReportes:'SISTEMA CONSULTAS Y REPORTES',
LinkHiperConsulta:'HIPERCONSULTA',
OptionMostrarDatosCliente:'Mostrar Datos Cliente',
CodigoClienteBuscar: '//iframe[@id="iframeCenter"]/input[@id="codigoClienteBuscar"]',
ButtonBusqueda:'//*[@id="botonBusqueda:linkBuscarAjax:linkImagen"]',
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
    I.retry(wait).click(Locators.LinkConsultaReportes);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkSistemaConsultasReportes);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkHiperConsulta);
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
            I.retry(wait).click('//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"REGISTRO RECLAMOS")]')
            // I.retry(wait).fillField('//*[@id="opcionConsulta:select_filter"]', "CONSULTA PEDIDOS");
            // I.retry(wait).pressKey('Enter');
            I.retry(wait).wait(1);
            console.log('Clic en Consulta Cuenta Corriente');
            I.retry(wait).wait(1);
            // I.retry(wait).seeElement('#modal');
            


//console.log('Ingresamos el código de consultora: 044176467');  
//console.log('Seleccionamos el icono de la lupa (Buscar)');  
//console.log('Seleccionar la opción REGISTRO RECLAMOS');  
//console.log('En el campo Numero de CDR ingresar: 12345678');  
//console.log('Le damos click en la lupa para buscar el Nro del pedido:');  
//console.log('Seleccionamos el pedido que se encuentra en la primera fila de la grilla:');  
//console.log('Seleccionamos la operación : C. Devolución');  
//console.log('Seleccionamos la lupa para buscar el CUV');  
//console.log('Seleccionamos el segundo CUV, el 10431');  
//console.log('Ingresamos la cantidad 1');  
//console.log('Seleccionamos el motivo: 7. Mal estado, y le damos Enter para que cree salte de línea. ');  
//console.log('Seleccionamos guardar:');  
//console.log('Le damos click en Aceptar:');  
//console.log('El proceso termina exitosamente cuando sale el mensaje: “Reclamo registrado satisfactoriamente(Call Center)- El CDR se encuentra en GP1');  

//I.waitForVisible('#popup');
           // I.waitForVisible('#principalFormPopUp',3);
            I.retry(wait).waitForVisible('/html/body');
            // I.retry(wait).resizeWindow(1537, 824);
            console.log('Carga principalFormPopUp');  
            // I.retry(wait).ResizeWindow(1537,824);          
            I.retry(wait).wait(4);
            console.log(Values.CodigodeConsultoraIngresado);  
            // I.retry(wait).fillField(Values.CodigodeConsultoraIngresado);
            // I.retry(wait).saveScreenshot('resultSearch5.png',true);
            I.retry(wait).pressKey(['Control','w']);
            console.log('Cierra principalFormPopUp'); 
            // I.retry(wait).resizeWindow(maximize);
       });
  }
}