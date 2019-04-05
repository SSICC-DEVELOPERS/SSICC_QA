config = {
    locator: {
        // fieldCantidadVal: {xpath:'//*[@id="tbobyDetallePedido"]/div[1]/div[2]/div[2]'},
        // fieldCantidadVal: {xpath:''},
        Url: {xpath:'/ssiccpeespdp/index.xhtml'},
        Username: {xpath:'//*[@id="usuario:input"]'},
        Password: {xpath:'//*[@id="j_idt28:input"]'},
        ButtonSignIn: {xpath:'//*[@id="j_idt35"]/span'},
        LinkConsultaReportes: {xpath:'//*[@id="menu"]/li[4]/a'},
        LinkSistemaConsultasReportes: {xpath:'SISTEMA CONSULTAS Y REPORTES'},
        LinkHiperConsulta: {xpath:'HIPERCONSULTA'},
        LinkMostrarDatosCliente: {xpath:'Mostrar Datos Cliente'},
        CodigoClienteBuscar: {xpath:'//iframe[@id="iframeCenter"]/input[@id="codigoClienteBuscar"]'},
        ButtonBusqueda: {xpath:'//*[@id="botonBusqueda:linkBuscarAjax:linkImagen"]'},
        ImagenDetalle: {xpath:'//*[@id="linkOpcionConsulta_HIP-16:linkAjaxPopUpIcon"]'},
        ComboOpcionConsulta: {xpath:'CONSULTA PEDIDOS'},
        //ImagenDetalle: {xpath:'//*[@id="linkOpcionConsulta_HIP-16:linkImagen"]'},
        //ButtonSalir: {xpath:'//*[@id="j_idt40"]'},
        //ConsultaOpciones:  {xpath:'CONSULTA CUENTA CORRIENTE'},
        ////ButtonSalir:  {xpath:'//*[@id="j_idt40"]'},
    }
  }
  
  module.exports.config=config;
  
  const Values = {
  ComboOpcionConsulta:'CONSULTA PEDIDOS',
  CodigodeConsultoraIngresado:'044176467'
  }
