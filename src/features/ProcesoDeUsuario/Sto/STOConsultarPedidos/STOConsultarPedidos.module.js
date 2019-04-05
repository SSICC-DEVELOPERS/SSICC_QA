//----Declaración de requerimientos

//const I = actor();
//const assert = require('assert');
//let wait = { retries: 5, minTimeout: 2000 };
//const utils= require('../../utils/utils');
//const config= require('./ValidarKitAutomatico.locator')
//-----------------------------------------------------------


//------------Proceso: STO Consultar Pedidos----------
const executeClick = require('../helpers/helperWebdriverIO');
const I = actor();

const Locators =
{
Url: '/ssiccpeespdp/index.xhtml',
Username: '//*[@id="usuario:input"]',
Password: '//*[@id="j_idt28:input"]',
ButtonSignIn: '//*[@id="j_idt35"]/span',
LinkProcesoUsuario:'//*[@id="menu"]/li[2]/a',
LinkSTO:'STO',//       //*[@id="menu2"]/a
LinkConsultarPedidos:'Consultar Pedidos', ////*[@id="tabMenu:j_idt71:1:j_idt77:32:j_idt83:12:j_idt102"]
//OptionMostrarDatosCliente:'Mostrar Datos Cliente',
FechaPeriodo: '//iframe[@id="iframeCenter"]/input[@id="codigoClienteBuscar"]',//falta  ingresar codigo  xpath
//FechaProgramadaFacturacionInicio:'',
//FechaProgramadaFacturacionFin:'',
//NumeroLote:'',
//CodigoCliente:'',
ButtonBusqueda:'//*[@id="botonBusqueda:linkBuscarAjax:linkImagen"]',
//RegistroGP5:'',

ImagenDetalle:'//*[@id="linkOpcionConsulta_HIP-16:linkAjaxPopUpIcon"]',
ConsultaOpciones:'CONSULTA PEDIDOS',
//ImagenDetalle:'//*[@id="linkOpcionConsulta_HIP-16:linkImagen"]',
//ButtonSalir:'//*[@id="j_idt40"]',
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
    I.retry(wait).click(Locators.LinkSTO);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkConsultarPedidos);
    I.retry(wait).wait(1);
   // I.retry(wait).click(Locators.OptionMostrarDatosCliente);
   // console.log('Clic en Mostrar Datos Cliente');
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
            console.log('ingresa a metodo opcionconsulta');
            I.retry(wait).wait(1);
            I.retry(wait).click('//*[@id="opcionConsulta:select"]');
            I.retry(wait).fillField('//*[@id="opcionConsulta:select_filter"]', Values.ComboOpcionConsultaPedidos);
            I.retry(wait).click(Locators.ImagenDetalle);
            //await I.click('//*[@id="linkOpcionConsulta_HIP-16:linkImagen"]');NOCATURAELCODIGOXATH
            I.retry(wait).wait(1);

            //console.log('Seleccionamos periodo 201902');
            //console.log('Dejamos la Fecha Inicio y Fecha Fin en blanco 044176467');
            //console.log('Ingresamos el cliente 044176467');
            //console.log('Seleccionamos en la lupa para buscar:');
            //console.log('En la sección de registros encontrados, validar el número 1 en la columna GP5, de ser 1 la prueba termina de forma satisfactoria.');

            //console.log('Clic en Consulta Pedidos');
            //I.retry(wait).wait(1);
            //I.retry(wait).waitForVisible('/html/body');
            //console.log('Carga principalFormPopUp');    
            //I.retry(wait).wait(4);
            //console.log(Values.CodigodeConsultoraIngresado);  
            //I.retry(wait).pressKey(['Control','w']);
            //console.log('Cierra principalFormPopUp'); 
       });
  }
}