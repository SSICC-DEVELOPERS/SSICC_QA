config = {
    locator: {
        // fieldCantidadVal: {xpath:'//*[@id="tbobyDetallePedido"]/div[1]/div[2]/div[2]'},
        // fieldCantidadVal: {xpath:''},
        Url: {xpath:'/ssiccpeespdp/index.xhtml'},
        Username: {xpath:'//*[@id="usuario:input"]'},
        Password: {xpath:'//*[@id="j_idt28:input"]'},
        ButtonSignIn: {xpath:'//*[@id="j_idt35"]/span'},
        ButtonBusqueda: {xpath:'//*[@id="botonBusqueda:linkBuscarAjax:linkImagen"]'},
        LinkConsultaReportes: {xpath:'//*[@id="menu"]/li[4]/a'},
        LinkSistemaConsultasReportes: {xpath: 'SISTEMA CONSULTAS Y REPORTES'},
        LinkHiperConsulta: {xpath:'HIPERCONSULTA'},
        OptionMostrarDatosCliente: {xpath:'Mostrar Datos Cliente'},
        CodigoClienteBuscar: {xpath:'//iframe[@id="iframeCenter"]/input[@id="codigoClienteBuscar"]'},
        
        //ConsultaOpciones:'CONSULTA CUENTA CORRIENTE',
        ////ButtonSalir:'//*[@id="j_idt40"]',
    }
  }
  
  module.exports.config=config;

const Values = {
    ComboOpcionConsultaCuentaCorriente:'CONSULTA CUENTA CORRIENTE',
    CodigodeConsultoraIngresado:'044176467'
   }
   

/* ya esta este codigo
//const I = actor();

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
//ConsultaOpciones:'CONSULTA CUENTA CORRIENTE',
////ButtonSalir:'//*[@id="j_idt40"]',
};

*/

