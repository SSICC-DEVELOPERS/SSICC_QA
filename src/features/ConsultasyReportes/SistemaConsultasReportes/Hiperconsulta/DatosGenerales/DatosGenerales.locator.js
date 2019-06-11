config = {
    locator: {         
    
        LinkConsultaReportes: {xpath:'//*[@id="menu"]/li/a[contains(text(),"CONSULTAS Y REPORTES")]'},
        LinkSistemaConsultasReportes: {xpath:'//*[@id="menu2"]/a[contains(text(),"SISTEMA CONSULTAS Y REPORTES")]'},
        LinkHiperConsulta: {xpath:'//*[contains(text(),"HIPERCONSULTA")]'},
        OptionMostrarDatosCliente: {xpath:'//*[@id="menu3"]/a[contains(text(),"Mostrar Datos Cliente")]'},
        TxtCodigoConsultora: {xpath:'//*[@id="codigoClienteBuscar"]'},
        BtnBusqueda: {xpath:'//*[starts-with(@id,"botonBusqueda")]/child::img'},  
        Frame:{frame:'//*[@id="iframeCenter"]'},
        BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},

            }
        }
  module.exports.config=config;