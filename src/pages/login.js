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
    await I.amOnPage(Locators.Url);
    await I.wait(1);
    await I.fillField(Locators.Username, username);
    await I.fillField(Locators.Password, password);
    await I.executeClick(Locators.ButtonSignIn);
    await I.wait(2);
    await I.click(Locators.LinkProcesoUsuario);
    await I.wait(2);
    await I.click(Locators.LinkSTO);
    await I.wait(2);
    await I.click(Locators.LinkConsultarPedidos);
    await I.wait(1);
   // await  I.click(Locators.OptionMostrarDatosCliente);
   // console.log('Clic en Mostrar Datos Cliente');
  },

 async consultora(CodigoClienteBuscar)
  {
     console.log('Clic en Campo Codigo');
     await I.wait(1);
     await within({ frame:'//*[@id="iframeCenter"]' }, async() =>
       {
            await I.fillField('//*[@id="codigoClienteBuscar"]', CodigoClienteBuscar);
            console.log('Ingrese el Código');
            await I.wait(1);
            await  I.click(Locators.ButtonBusqueda);
            console.log('Clic en el botón Busqueda');
            await I.wait(1);
            console.log('ingresa a metodo opcionconsulta');
            await I.wait(1);
            await I.click('//*[@id="opcionConsulta:select"]');
            await I.fillField('//*[@id="opcionConsulta:select_filter"]', Values.ComboOpcionConsultaPedidos);
            await I.click(Locators.ImagenDetalle);
            //await I.click('//*[@id="linkOpcionConsulta_HIP-16:linkImagen"]');NOCATURAELCODIGOXATH
            await I.wait(1);

            //console.log('Seleccionamos periodo 201902');
            //console.log('Dejamos la Fecha Inicio y Fecha Fin en blanco 044176467');
            //console.log('Ingresamos el cliente 044176467');
            //console.log('Seleccionamos en la lupa para buscar:');
            //console.log('En la sección de registros encontrados, validar el número 1 en la columna GP5, de ser 1 la prueba termina de forma satisfactoria.');

            //console.log('Clic en Consulta Pedidos');
            //await I.wait(1);
            //await I.waitForVisible('/html/body');
            //console.log('Carga principalFormPopUp');    
            //await I.wait(4);
            //console.log(Values.CodigodeConsultoraIngresado);  
            //await I.pressKey(['Control','w']);
            //console.log('Cierra principalFormPopUp'); 
       });
  }
}