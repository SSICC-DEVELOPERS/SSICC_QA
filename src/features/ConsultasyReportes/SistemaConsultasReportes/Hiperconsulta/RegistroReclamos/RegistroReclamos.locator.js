config = {
    locator: {
        LinkConsultaReportes: {xpath:'//*[@id="menu"]/li/a[contains(text(),"CONSULTAS Y REPORTES")]'},
        LinkSistemaConsultasReportes: {xpath:'//*[@id="menu2"]/a[contains(text(),"SISTEMA CONSULTAS Y REPORTES")]'},
        LinkHiperConsulta: {xpath:'//*[contains(text(),"HIPERCONSULTA")]'},		
        OptionMostrarDatosCliente: {xpath:'//*[@id="menu3"]/a[contains(text(),"Mostrar Datos Cliente")]'},	      
        TxtCodigoConsultora: {xpath:'//*[@id="codigoClienteBuscar"]'},		
        BtnBusqueda: {xpath:'//*[starts-with(@id,"botonBusqueda")]/child::img'},        
        TxtOptionConsultar: {xpath:'//*[@id="opcionConsulta:select"]'},
        CmbOptionConsultar: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"REGISTRO RECLAMOS")]'},    
        TxtNumeroCDR: {xpath:'//*[@id="numeroCDR"]'},
        BtnBuscarCDR: {xpath:'//*[starts-with(@id,"idRecDocRefPopup")]/child::img'},						
	    ResultadoBusquedaCDR: {xpath:'//*[@id="busquedaRECDocumentoReferencia:dataTableBusqueda2_data"]/tr[1]'},  
        CmbOperacion: {xpath:'//*[contains(text(),"C. Devolución")]'},
        BtnBuscar: {xpath:'//img[@id="listaPopupCuvCambia"]'},
        TxtCodigoVenta: {xpath:'//*[@id="codigoVenta:input"]'},
        BtnBuscarCodigoVenta: {xpath:'//*[@id="idCodigoVenta"]/div[2]/table[2]/tbody/tr/td[1]/a/img'},
        ResultadoBusquedaCodigoVenta: {xpath:'//*[@id="tablaPedido_data"]/tr/td[1]/a'}, 
        TxtCandidad: {xpath:'//*[@id="listaCantidadCambia" and @type="text"]'},
        CmbMotivo: {xpath:'//*[contains(text(),"7. Mal estado")]'},
        BtnGuardar: {xpath:'//*[starts-with(@id,"botonGrabar")]/child::img'},
        BtnAceptarMensaje: {xpath:'//*[@id="principalFormAlertAction:btnAlertDialogAction"]'}, 	        
        Frame:{frame:'//*[@id="iframeCenter"]'},
        BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},		

    }
  }
  
  module.exports.config=config;