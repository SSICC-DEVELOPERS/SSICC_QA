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