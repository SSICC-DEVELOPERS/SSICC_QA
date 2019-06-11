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
					I.retry(wait).fillField(this.cfg.locator.TxtNombreConcurso, NombreConcurso);
					I.retry(wait).fillField(this.cfg.locator.TxtCampanaInicio, CampaniaInicio);
					I.retry(wait).fillField(this.cfg.locator.TxtCampanaFinal, CampaniaFinal);
					I.retry(wait).click(this.cfg.locator.PestanaPremiacion);
					I.retry(wait).click(this.cfg.locator.Nivel1);
					I.retry(wait).click(this.cfg.locator.IconoDefinirPremio);
					I.retry(wait).fillField(this.cfg.locator.TxtCodigoProducto, CodigoProducto);
					I.retry(wait).click(this.cfg.locator.IconoInsertar);
					I.retry(wait).click(this.cfg.locator.BtnFlechaAtras);
					I.retry(wait).fillField(this.cfg.locator.TxtPuntajeMinimo, PuntajeMinimo);
					I.retry(wait).fillField(this.cfg.locator.TxtPuntajeMaximo, PuntajeMaximo);
					I.retry(wait).click(this.cfg.locator.BtnGuardar);
					I.retry(wait).click(this.cfg.locator.BtnProcesarInformacion);
					I.retry(wait).click(this.cfg.locator.BtnAceptarMensajeCreacion);
					console.log('El Concurso ha sido creado satisfactoriamente');
				});			
  },  
  
  	async CerrarSesion()
    { 
			I.retry(wait).click(this.cfg.locator.BtnSalir);      
    }
}