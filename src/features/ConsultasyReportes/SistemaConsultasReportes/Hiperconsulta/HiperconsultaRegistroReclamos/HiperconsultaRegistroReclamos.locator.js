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