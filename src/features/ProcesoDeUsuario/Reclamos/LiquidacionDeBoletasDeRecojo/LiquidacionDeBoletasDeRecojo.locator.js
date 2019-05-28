config = {
    locator: {
        LinkProcesoUsuario: {xpath:'//*[@id="menu"]/li/a[contains(text(),"PROCESOS DE USUARIO")]'},
        LinkReclamos: {xpath:'//*[@id="menu2"]/a[contains(text(),"RECLAMOS")]'},
        LinkLiquidacionBoletasRecojo: {xpath:'//*[@id="menu4"]/a[contains(text(),"Liquidacion de Boletas de Recojo")]'},
       
        TxtPeriodoInicial: {xpath:'//*[@id="idPeriodoInicial:campanya"]'}, 
       //TxtPeriodoInicial: {xpath:'//*[starts-with(@id,"idPeriodoInicial")]'},
                                   
        TxtPeriodoFinal: {xpath:'//*[@id="idPeriodoFinal:campanya"]'},	
        //TxtPeriodoFinal: {xpath:'//*[starts-with(@id,"idPeriodoFinal")]'},
      
        TxtEstado: {xpath:'//*[starts-with(@id,"j_idt117")]'},
        CmbOptionEstado: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"Rechazado")]'},        
      //  CmbOptionEstado: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"Pendiente")]'},        


        BtnBusqueda: {xpath:'//*[starts-with(@aria-label,"Buscar")]/child::img'},      
        BtnConfirmacionLBR: {xpath:'//*[@id="dialogConfirmarBuscar:btnAlertDialogSI"]'},   
        RegistrosEncontradosLBR: {xpath:'//*[@id="tablaMuestraDatos_data"]/tr[1]/td[1]/div/div[2]'},
        BtnAprobarLBR: {xpath:'//*[starts-with(@aria-label,"Aprobar")]/child::img'},
        BtnConfirmacionOpcionesLBR: {xpath:'//*[@id="dialogConfirmarOpciones:btnAlertDialogSI"]'},  
        Frame:{frame:'//*[@id="iframeCenter"]'},
				BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},	

    }
  }
  
  module.exports.config=config;