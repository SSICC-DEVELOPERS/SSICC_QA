//-----------------------Declaración de requerimientos---------------
const config= require('./LiquidacionDeBoletasDeRecojo.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: Reclamos Liquidacion de  Boletas de Recojo----------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
          I.retry(wait).click(this.cfg.locator.LinkProcesoUsuario);
          I.retry(wait).click(this.cfg.locator.LinkReclamos);
          I.retry(wait).click(this.cfg.locator.LinkLiquidacionBoletasRecojo);
    //      await I.wait(1);
   },

  async LiquidacionBoletasRecojo(PeriodoInicial,PeriodoFinal)
  {
          within(this.cfg.locator.Frame, async() => 
          {
          I.retry(wait).fillField(this.cfg.locator.TxtPeriodoInicial, PeriodoInicial);
          I.retry(wait).fillField(this.cfg.locator.TxtPeriodoFinal, PeriodoFinal);
		      I.retry(wait).click(this.cfg.locator.TxtEstado);
		      I.retry(wait).click(this.cfg.locator.CmbOptionEstado);      
		      I.retry(wait).pressKey('Enter');                        
          await I.wait(1);          
          I.retry(wait).click(this.cfg.locator.BtnBusqueda);
          await I.wait(1);
        }); 	
   },

   async MensajesEmergentes()
  {
          within(this.cfg.locator.Frame, async() =>           
        {
          I.retry(wait).click(this.cfg.locator.BtnConfirmacionLBR);
    //      I.wait(5);            
          I.retry(wait).click(this.cfg.locator.RegistrosEncontradosLBR);
     //     I.wait(5);            
		      I.retry(wait).click(this.cfg.locator.BtnAprobarLBR);
      //    I.wait(5);            
          I.retry(wait).click(this.cfg.locator.BtnConfirmacionOpcionesLBR);
      //	  I.wait(5);  
          console.log('Se aprobaron las boletas de recojo satisfactoriamente');         

         });         
   },

   async CerrarSesion()
   { 
     I.retry(wait).click(this.cfg.locator.BtnSalir);
   }
}