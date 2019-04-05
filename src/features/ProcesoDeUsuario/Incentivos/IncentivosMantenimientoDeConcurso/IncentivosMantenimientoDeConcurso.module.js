//----Declaración de requerimientos

//const I = actor();
//const assert = require('assert');
//let wait = { retries: 5, minTimeout: 2000 };
//const utils= require('../../utils/utils');
//const config= require('./ValidarKitAutomatico.locator')
//-----------------------------------------------------------




//------------Proceso: Incentivos Mantenimiento de Concurso----------
const executeClick = require('../helpers/helperWebdriverIO');
const I = actor();

const Locators =
{
Url: '/ssiccpeespdp/index.xhtml',
Username: '//*[@id="usuario:input"]',
Password: '//*[@id="j_idt28:input"]',
ButtonSignIn: '//*[@id="j_idt35"]/span',
LinkProcesoUsuario:'//*[@id="menu"]/li[2]/a',
LinkIncentivos:'INCENTIVOS',//       //*[@id="menu2"]/a
LinkMantenimientoConcurso:'Mantenimiento Concurso', ////*[@id="tabMenu:j_idt71:1:j_idt77:32:j_idt83:12:j_idt102"]
//OptionMostrarDatosCliente:'Mostrar Datos Cliente',
FechaCampana:'//iframe[@id="iframeCenter"]/input[@id="codigoClienteBuscar"]',//falta  ingresar xpath de campaña
//CodigoCVU:'',//falta  ingresar xpath
//ButtonModificar:'', //falta  ingresar xpath
//PrecioContable:'',//falta  ingresar xpath
//Mensaje:'',//falta  ingresar xpath

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
    I.retry(wait).click(Locators.LinkIncentivos);
    I.retry(wait).wait(2);
    I.retry(wait).click(Locators.LinkMantenimientoConcurso);
    I.retry(wait).wait(1);
    // I.retry(wait).click(Locators.OptionMostrarDatosCliente);
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
            I.retry(wait).click(Locators.ButtonBusqueda);
            console.log('Clic en el botón Busqueda');
            I.retry(wait).wait(1);
            console.log('ingresa a metodo opcionconsulta');
            I.retry(wait).wait(1);
            I.retry(wait).click('//*[@id="opcionConsulta:select"]');
            I.retry(wait).fillField('//*[@id="opcionConsulta:select_filter"]', Values.ComboOpcionConsultaPedidos);
            I.retry(wait).click(Locators.ImagenDetalle);

//console.log('Seleccionamos el icono de Nuevo');
//console.log('Ingresamos en nombre del concurso: RXP C03/C07');
//console.log('Ingresamos en Campaña Inicio y Campaña Fin, 201903 y 201907 respectivamente.');
//console.log('Seleccionamos la pestaña “PREMIACION” y luego el nivel 1 de la sección Niveles, luego de esto en el icono “Definir Premio”');
//console.log('En el popup ponemos el “Cod. producto” 200091328 y le damos click en el icono de insertar.');
//console.log('Después regresamos, le damos click en la flecha hacia atrás.');
//console.log('Después ingresamos en Puntaje Mínimo x Nivel = 20 y Puntaje Máximo x Nivel = 500');
//console.log('Seleccionamos guardar');
//console.log('Confirmamos, damos click en “Si”');
//console.log('El proceso culmina de forma exitosa cuando se ve el mensaje “El Concurso ha sido creado satisfactoriamente”, le damos click en “Aceptar”');


            // I.retry(wait).click('//*[@id="linkOpcionConsulta_HIP-16:linkImagen"]');NOCATURAELCODIGOXATH
            // I.retry(wait).wait(1);
            //console.log('Clic en Consulta Pedidos');
            // I.retry(wait).wait(1);
            // I.retry(wait).waitForVisible('/html/body');
            //console.log('Carga principalFormPopUp');    
            // I.retry(wait).wait(4);
            //console.log(Values.CodigodeConsultoraIngresado);  
            // I.retry(wait).pressKey(['Control','w']);
            //console.log('Cierra principalFormPopUp'); 
       });
  }
}