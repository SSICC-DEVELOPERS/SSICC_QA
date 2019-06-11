config = {
    locator: {
            LinkProcesoUsuario: {xpath:'//*[@id="menu"]/li/a[contains(text(),"PROCESOS DE USUARIO")]'},
            LinkSTO: {xpath:'//*[@id="menu2"]/a[contains(text(),"STO")]'},
            LinkGestionEV: {xpath:'//*[@id="menu4"]/a[contains(text(),"Gestion de Errores de Validacion")]'},
            TxtPeriodo: {xpath:'//*[@id="idCodigoPeriodo:campanya"]'},    
            RadioBtnIA: {xpath:'//label[contains(@for,"flagAproba:selectOneRadio:1")]'},
            RadioBtnIG:  {xpath:'//label[contains(@for,"flagGestion:selectOneRadio:0")]'},               
            TxtTipoDocumento: {xpath:'//*[@id="cTipoDoc:select"]'},
            CmbTipoDocumento: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"CABECERA DE OC")]'},
            BtnBusqueda: {xpath:'//*[@id="botonBusqueda:linkImagen"]'}, 
            PrimerRegistroResultados: {xpath:'//*[@id="dataPrincipal_data"]/tr[1]/td[1]'},               
            TxtCmbResultados: {xpath:'//*[@id="cAccion:select"]'},                                                
            CmbResultados: {xpath:'//div[@class="ui-selectonemenu-items-wrapper"]/ul/li[contains(text(),"APROBAR REGISTROS SELECCIONADOS")]'},            
            BtnEjecutarProceso: {xpath:'//*[starts-with(@aria-label,"Ejecutar Proceso")]/child::img[1]'},
            BtnConfirmacionEP: {xpath:'//*[@id="confirmDialogGenerarProceso:btnAlertDialogSI"]'},   
            Frame:{frame:'//*[@id="iframeCenter"]'},
            BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},

    }
  }

  module.exports.config=config;