//-----------------------Declaración de requerimientos---------------
const config= require('./MantenimientoDeConcurso.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: Incentivos Mantenimiento de Concurso----------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
          I.retry(wait).click(this.cfg.locator.LinkProcesoUsuario);
          I.retry(wait).click(this.cfg.locator.LinkIncentivos);
          I.retry(wait).click(this.cfg.locator.LinkMantenimientoConcurso);
  //        await I.wait(2);
   },
 async MantenimientoConcurso(NombreConcurso,CampaniaInicio,CampaniaFinal,CodigoProducto,PuntajeMinimo,PuntajeMaximo)
  {
         
		within(this.cfg.locator.Frame, async() =>    

		{            
			I.retry(wait).click(this.cfg.locator.BtnNuevo);
	//		await I.wait(1);           
			I.retry(wait).fillField(this.cfg.locator.TxtNombreConcurso, NombreConcurso);
			I.retry(wait).fillField(this.cfg.locator.TxtCampanaInicio, CampaniaInicio);
			I.retry(wait).fillField(this.cfg.locator.TxtCampanaFinal, CampaniaFinal);
			I.retry(wait).click(this.cfg.locator.PestanaPremiacion);
//			await I.wait(1);
			I.retry(wait).click(this.cfg.locator.Nivel1);
//			await I.wait(1);
			I.retry(wait).click(this.cfg.locator.IconoDefinirPremio);
//			await I.wait(1); 			
			I.retry(wait).fillField(this.cfg.locator.TxtCodigoProducto, CodigoProducto);
			I.retry(wait).click(this.cfg.locator.IconoInsertar);
//			await I.wait(1);    
			I.retry(wait).click(this.cfg.locator.BtnFlechaAtras);
//			await I.wait(1);  			
			I.retry(wait).fillField(this.cfg.locator.TxtPuntajeMinimo, PuntajeMinimo);
			I.retry(wait).fillField(this.cfg.locator.TxtPuntajeMaximo, PuntajeMaximo);
			I.retry(wait).click(this.cfg.locator.BtnGuardar);
//			await I.wait(1);   
			I.retry(wait).click(this.cfg.locator.BtnProcesarInformacion);
//			await I.wait(1);   
			I.retry(wait).click(this.cfg.locator.BtnAceptarMensajeCreacion);
//			await I.wait(1);  
      console.log('El Concurso ha sido creado satisfactoriamente');
		});			
  },  
  
  	async CerrarSesion()
    { 
			I.retry(wait).click(this.cfg.locator.BtnSalir);      
    }
}