config = {
    locator: {
        LinkProcesoUsuario: {xpath:'//*[@id="menu"]/li/a[contains(text(),"PROCESOS DE USUARIO")]'},
        LinkIncentivos: {xpath:'//*[@id="menu2"]/a[contains(text(),"INCENTIVOS")]'},
        LinkMantenimientoConcurso: {xpath:'//*[@id="menu4"]/a[contains(text(),"Mantenimiento Concurso")]'},     
				BtnNuevo: {xpath:'//*[starts-with(@aria-label,"Nuevo")]/child::img'},	
  			TxtNombreConcurso: {xpath:'//*[contains(text(),"*Nombre Concurso:")]//following::input[1]'},			
				TxtCampanaInicio: {xpath:'//*[@id="codigoPeriodoInicio:campanya"]'},
				TxtCampanaFinal: {xpath:'//*[@id="codigoPeriodoFin:campanya"]'},
				PestanaPremiacion: {xpath:'//*[@id="tabGeneral"]/ul/li[3]/a'},	
				Nivel1:{xpath:'//*[@id="tabGeneral:dataTablePremiacion_data"]/tr/td[1]'},      		
			  IconoDefinirPremio: {xpath:'//*[starts-with(@aria-label,"DefinirPremio")]/child::img'},
				TxtCodigoProducto: {xpath:'//*[@id="codigoSAP"]'},		
				IconoInsertar: {xpath:'//*[@id="accionesDefinirPremio"]/tbody/tr[1]/td[1]/a[1]/img[1]'},
				BtnFlechaAtras: {xpath:'//*[@id="accionesDefinirPremio"]/tbody/tr/td[4]/a/img'},		
				TxtPuntajeMinimo: {xpath:'//*[@id="tabGeneral:dataTablePremiacion:0:cantInicial"]'},
				TxtPuntajeMaximo: {xpath:'//*[@id="tabGeneral:dataTablePremiacion_data"]/tr/td[5]/input'},		
				BtnGuardar: {xpath:'//*[starts-with(@id,"botonSalvar")]/child::img'},
				BtnProcesarInformacion: {xpath:'//*[@id="confirmDialogConfirmarSave:btnAlertDialogAction"]'},  
				BtnAceptarMensajeCreacion: {xpath:'//*[@id="principalFormAlertAction:btnAlertDialogAction"]'}, 					
				Frame:{frame:'//*[@id="iframeCenter"]'},
				BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},		
    }
  }
  
  module.exports.config=config;