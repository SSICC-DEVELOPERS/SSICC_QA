config = {
    locator: {
        LinkProcesoUsuario: {xpath:'//*[@id="menu"]/li/a[contains(text(),"PROCESOS DE USUARIO")]'},
        LinkMav: {xpath:'//*[@id="menu2"]/a[contains(text(),"MAV")]'},
        LinkMantenimientoMAV: {xpath:'//*[@id="menu4"]/a[contains(text(),"Mantenimiento MAV")]'},     
		BtnNuevo: {xpath:'//*[starts-with(@aria-label,"Nuevo")]/child::img'}, 
		TxtCampania: {xpath:'//*[starts-with(@id,"codigoPeriodo:campanya")]'},		
		TxtActividad: {xpath:'//*[@id="oidActividad:select"]'},
        CmbOptionActividad: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"CONSULTORAS: PRODUCTOS GRATIS")]'},	 
		TxtUnidadesEstimadas: {xpath:'//*[@id="unidadesEstimadas:input"]'},								
		TxtTipoOferta: {xpath:'//*[@id="oidActividadTipoOferta:select"]'},
        CmbOptionTipoOferta: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"077 - MUESTRAS PARA REGALO - PEDIDOS")]'},
		TxtProducto: {xpath:'//*[starts-with(@id,"codigoProducto")]'},
		TxtPrecio: {xpath:'//*[@id="precio:input"]'},
		TxtObservaciones: {xpath:'//*[contains(@id,"j_idt102:inputtextarea")]'},
		PestanaConsideraciones: {xpath:'//*[@id="tabGeneral"]/ul/li[1]/a'},			
		TxtConsideracion: {xpath:'//*[@id="tabGeneral:codigoConsideracion:select"]'},
        CmbOptionConsideracion: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"EDAD")]'},
		TxtEdadDesde: {xpath:'//*[@id="tabGeneral:condicion1:input"]'}, 
		TxtEdadHasta: {xpath:'//*[@id="tabGeneral:condicion2:input"]'},		
		BtnInsertar: {xpath:'//*[@id="tabGeneral:tabConsideracion"]/table[2]/tbody/tr/td[2]/table/tbody/tr/td[1]/a/img'}, 
    	BtnGuardar: {xpath:'//*[starts-with(@id,"botonSalvar")]/child::img'},
		BtnConfirmarInformacion: {xpath:'//*[@id="confirmDialogConfirmarSave:btnAlertDialogAction"]'},  
		BtnMensajeDatosInsertadosCorrectamente: {xpath:'//*[@id="principalFormAlertAction:btnAlertDialogAction"]'}, 
        Frame:{frame:'//*[@id="iframeCenter"]'},
		BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},			
    }
  }
  
  module.exports.config=config;