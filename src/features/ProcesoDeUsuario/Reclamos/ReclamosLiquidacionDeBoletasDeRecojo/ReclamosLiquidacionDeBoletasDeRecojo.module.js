//----Declaración de requerimientos

//const I = actor();
//const assert = require('assert');
//let wait = { retries: 5, minTimeout: 2000 };
//const utils= require('../../utils/utils');
//const config= require('./ValidarKitAutomatico.locator')
//-----------------------------------------------------------




//------------Proceso: Reclamos Liquidacion de Boletas de Recojo----------
const executeClick = require('../helpers/helperWebdriverIO');
const I = actor();

const Locators =
{
Url: '/ssiccpeespdp/index.xhtml',
Username: '//*[@id="usuario:input"]',
Password: '//*[@id="j_idt28:input"]',
ButtonSignIn: '//*[@id="j_idt35"]/span',
LinkProcesoUsuario:'//*[@id="menu"]/li[2]/a',
LinkReclamos:'RECLAMOS',//       //*[@id="menu2"]/a
LinkLiquidacionBoletadeRecojo:'Liquidacion de Boletas de Recojo', ////*[@id="tabMenu:j_idt71:1:j_idt77:32:j_idt83:12:j_idt102"]
//OptionMostrarDatosCliente:'Mostrar Datos Cliente',
FechaCampana:'//iframe[@id="iframeCenter"]/input[@id="codigoClienteBuscar"]',//falta  ingresar xpath de campaña
//CodigoCVU:'',//falta  ingresar xpath de campaña
//ButtonModificar:'', //falta  ingresar xpath de campaña
//PrecioContable:'',//falta  ingresar xpath de campaña
//Mensaje:'',//falta  ingresar xpath de campaña

ButtonBusqueda:'//*[@id="botonBusqueda:linkBuscarAjax:linkImagen"]',
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
    I.retry(wait).click(Locators.LinkReclamos);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkLiquidacionBoletadeRecojo);
    I.retry(wait).wait(1);
    //I.retry(wait).click(Locators.OptionMostrarDatosCliente);
    //console.log('Clic en Mostrar Datos Cliente');
  },

 async consultora(CodigoClienteBuscar)
  {
     console.log('Clic en Campo Codigo');
     I.retry(wait).wait(1);
     I.retry(wait).within({ frame:'//*[@id="iframeCenter"]' }, async() =>
       {
            I.retry(wait).fillField('//*[@id="codigoClienteBuscar"]', FechaCampana);//falta cambiarcodigo xpath  anterior
            console.log('Ingrese el Código');
            I.retry(wait).wait(1);
            await  I.click(Locators.ButtonBusqueda);
            console.log('Clic en el botón Busqueda');
            I.retry(wait).wait(1);
            console.log('ingresa a metodo opcionconsulta');
            I.retry(wait).wait(1);
            I.retry(wait).click('//*[@id="opcionConsulta:select"]');
            I.retry(wait).fillField('//*[@id="opcionConsulta:select_filter"]', Values.ComboOpcionConsultaPedidos);
            I.retry(wait).click(Locators.ImagenDetalle);

//console.log('Ingresamos Periodo Inicial: 201818');
//console.log('Ingresamos Periodo Final: 201902');
//console.log('Seleccionamos Estado: Pendiente');
//console.log('Damos click en la Lupa');
//console.log('Seleccionamos: Si');
//console.log('Seleccionamos la primera fila de la grilla. ');
//console.log('Damos click en el icono check de Aprobar.');
//console.log('Damos click en Si.');
//console.log('El proceso culmina exitosamente cuando sale el mensaje “Se aprobaron las boletas de recojo satisfactoriamente”');


            //I.retry(wait).click('//*[@id="linkOpcionConsulta_HIP-16:linkImagen"]');NOCATURAELCODIGOXATH
            //I.retry(wait).wait(1);
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