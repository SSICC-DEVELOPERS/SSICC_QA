config = {
    locator: {
        
        LinkProcesoUsuario: {xpath:'//*[@id="menu"]/li/a[contains(text(),"PROCESOS DE USUARIO")]'},
        LinkMatriz: {xpath:'//*[@id="menu2"]/a[contains(text(),"MATRIZ")]'},
        LinkModificacionOferta: {xpath:'//*[@id="menu4"]/a[contains(text(),"Modificacion de Ofertas")]'},
        TxtCampania: {xpath:'//*[contains(@id,"codigoPeriodo:campan")]'},
        TxtCVU:{xpath:'//*[contains(@id,"CUV")]'},
        BtnBusqueda: {xpath:'//*[starts-with(@aria-label,"Buscar")]/child::img[1]'},       
        RegistrosEncontrados: {xpath:'//*[@id="idTablaCambioCodigoVenta01_data"]/tr'},   
        BtnModificar: {xpath:'//*[starts-with(@aria-label,"Modificar Datos de CUV")]/child::img[1]'},
        REncontradosModificarRE: {xpath:'//*[@id="idTablaPrincipal_data"]/tr'},   
        BtnModificarRE: {xpath:'//*[@id="idBotonesPrincipal"]/tbody/tr/td/a/img'}, 
        CargaPopup: {xpath:'//*[@id="idModificarProductoPrincipal"]'}, 
        TxtPrecioContable: {xpath:'//*[@id="preContable"]'},
        BtnGuardar: {xpath:'//*[@id="dataModificarProductoPrincipal"]/tbody/tr[9]/td/table/tbody/tr/td[1]/a/img[1]'},        
        Frame:{frame:'//*[@id="iframeCenter"]'},
        BtnSalir: {xpath:'//*[starts-with(@id,"idSalirSistema")]/child::img'},		

    }
  }
  
  module.exports.config=config;