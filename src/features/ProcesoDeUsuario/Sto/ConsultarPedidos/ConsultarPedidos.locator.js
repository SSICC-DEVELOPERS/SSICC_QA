config = {
    locator: {
        LinkProcesoUsuario: {xpath:'//*[@id="menu"]/li/a[contains(text(),"PROCESOS DE USUARIO")]'},
        LinkSTO: {xpath:'//*[@id="menu2"]/a[contains(text(),"STO")]'},
        LinkConsultarPedidos: {xpath:'//*[@id="menu4"]/a[contains(text(),"Consultar Pedidos")]'},                
        TxtPeriodo: {xpath:'//*[@id="codigoCampanhaCDR:campanya"]'},
        TxtFechaInicio :{xpath:'//*[@id="fechaInicioProceso:calendar"]'},
        TxtFechaFin : {xpath:'//*[@id="fechaFinProceso:calendar"]'},
        TxtCliente: {xpath:'//*[@id="codigoCliente"]'}, 
        BtnBusqueda: {xpath:'//*[starts-with(@id,"botonBusqueda")]/child::img'},
        Frame:{frame:'//*[@id="iframeCenter"]'},
        BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},
        LblGP5: {xpath:'//*[@id="dataTableTest1_data"]/tr[1]/td[23]'},
    }
  }
  
  module.exports.config=config;