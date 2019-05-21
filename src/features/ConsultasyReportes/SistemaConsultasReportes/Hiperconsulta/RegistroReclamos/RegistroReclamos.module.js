//-----------------------Declaración de requerimientos---------------
const config= require('./RegistroReclamos.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: Registro Reclamos ----------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
        I.retry(wait).click(this.cfg.locator.LinkConsultaReportes);
        I.retry(wait).click(this.cfg.locator.LinkSistemaConsultasReportes);
        I.retry(wait).click(this.cfg.locator.LinkHiperConsulta);
        I.retry(wait).click(this.cfg.locator.OptionMostrarDatosCliente);
	    	I.wait(2);
   },

   async consultora(CodigoConsultora)
  {
        within(this.cfg.locator.Frame, async() =>
       {  
        I.retry(wait).fillField(this.cfg.locator.TxtCodigoConsultora, CodigoConsultora);
        I.retry(wait).click(this.cfg.locator.BtnBusqueda); 
      //  I.retry(wait).wait(1);   
       });
  }, 

   async OpcionConsultar()
   {
          within(this.cfg.locator.Frame, async() =>
      {
         I.wait(1);
         I.retry(wait).click(this.cfg.locator.TxtOptionConsultar);
         I.retry(wait).click(this.cfg.locator.CmbOptionConsultar);      
         I.retry(wait).pressKey('Enter');                        
         await I.wait(1);
         //I.retry(wait).wait(1); 
      });
   },

  async mostrarPopup(NumeroCDR,CodigoVenta,Cantidad)
  {
        //await I.wait(10);     
        I.wait(5);
        I.selectPopup("http://pelnx2090:7003/ssiccpeespdp/pages/spusicc/reclamos/mantenimientoRECDigitacionCDRAjaxForm.xhtml"); 
        //I.retry(wait).wait(1);  
        I.wait(1); 
        I.retry(wait).fillField(this.cfg.locator.TxtNumeroCDR, NumeroCDR);  
        I.retry(wait).click(this.cfg.locator.BtnBuscarCDR);
        I.wait(1);
        I.retry(wait).click(this.cfg.locator.ResultadoBusquedaCDR);        
        I.wait(5); 
        I.retry(wait).click(this.cfg.locator.CmbOperacion);
        I.retry(wait).click(this.cfg.locator.BtnBuscar);
        I.wait(4);   
        I.retry(wait).waitForVisible('#idCodigoVenta');
        I.retry(wait).fillField(this.cfg.locator.TxtCodigoVenta, CodigoVenta);
        I.wait(1);
        I.retry(wait).click(this.cfg.locator.BtnBuscarCodigoVenta);
        I.wait(1);
        I.retry(wait).click(this.cfg.locator.ResultadoBusquedaCodigoVenta);
        I.wait(1);    
        I.retry(wait).fillField(this.cfg.locator.TxtCandidad, Cantidad);
        I.retry(wait).click(this.cfg.locator.CmbMotivo);
        I.retry(wait).pressKey('Enter');
        I.retry(wait).pressKey('Enter');
        I.retry(wait).click(this.cfg.locator.BtnGuardar);
        I.wait(1); 
        I.acceptPopup();
        console.log('clic Aceptar');
        console.log('Reclamo registrado satisfactoriamente(Call Center)- El CDR se encuentra en GP1');             

    },   
   

   async CerrarSesion()
  { 
     I.selectPopup("http://pelnx2090:7003/ssiccpeespdp/main.xhtml");   
     I.wait(1);    
     I.retry(wait).click(this.cfg.locator.BtnSalir);   

  }  
}