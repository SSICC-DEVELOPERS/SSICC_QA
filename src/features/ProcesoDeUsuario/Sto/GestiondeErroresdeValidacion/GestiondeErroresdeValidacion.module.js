//-----------------------Declaración de requerimientos---------------
const config= require('./GestiondeErroresdeValidacion.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: Gestion de Errores de Validacion----------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
          I.retry(wait).click(this.cfg.locator.LinkProcesoUsuario);
          I.retry(wait).click(this.cfg.locator.LinkSTO);
          I.retry(wait).click(this.cfg.locator.LinkGestionEV);
    //      await I.wait(2);
   },

   async IngresoCriteriosEjecucion()
   {
     within(this.cfg.locator.Frame, async() =>       {        
         I.retry(wait).click(this.cfg.locator.TxtTipoDocumento);
         I.retry(wait).click(this.cfg.locator.CmbTipoDocumento); 
         I.retry(wait).pressKey('Enter');                             
         await I.wait(2);
         I.retry(wait).clearField(this.cfg.locator.TxtPeriodo);
        // I.pressKey('Backspace');
         await I.wait(2);
         I.retry(wait).click(this.cfg.locator.RadioBtnIA);
         I.wait(1);
         I.retry(wait).click(this.cfg.locator.RadioBtnIG);
         I.wait(1);
         I.retry(wait).click(this.cfg.locator.BtnBusqueda); 
         I.wait(4);       
       });
    },

 async ValidacionProceso()
  {
     within(this.cfg.locator.Frame, async() =>  {            
        
         I.retry(wait).scrollTo ('#panelAdicionalProceso', 5,5);
         I.wait(1);
         I.retry(wait).click(this.cfg.locator.PrimerRegistroResultados);
         I.retry(wait).click(this.cfg.locator.TxtCmbResultados);
         I.retry(wait).click(this.cfg.locator.CmbResultados);  
         I.retry(wait).pressKey('Enter'); 
         await I.wait(1);   
         I.retry(wait).click(this.cfg.locator.BtnEjecutarProceso);
         I.retry(wait).click(this.cfg.locator.BtnConfirmacionEP);
         //I.retry(wait).wait(5);   
   //      await I.wait(5); 
         I.retry(wait).see('Proceso Concluido, Revisar Ejecución'); 
         console.log('Proceso Concluido, Revisar Ejecución');      
       });
  },
  async CerrarSesion()
  { 
        I.retry(wait).click(this.cfg.locator.BtnSalir);
  }
}