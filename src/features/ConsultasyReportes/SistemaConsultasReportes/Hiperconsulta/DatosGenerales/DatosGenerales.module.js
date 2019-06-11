//-----------------------Declaración de requerimientos---------------
const config= require('./DatosGenerales.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------  HIPERCONSULTA  Datos Generales  ---------------

module.exports = {

  cfg: config.config,

  async menuSsicc()
    {
        I.retry(wait).click(this.cfg.locator.LinkConsultaReportes);
        I.retry(wait).click(this.cfg.locator.LinkSistemaConsultasReportes);
        I.retry(wait).click(this.cfg.locator.LinkHiperConsulta);
        I.retry(wait).click(this.cfg.locator.OptionMostrarDatosCliente);
    },

 async consultora(CodigoConsultora)
  {
     within(this.cfg.locator.Frame, async() =>
       {  
           I.retry(wait).fillField(this.cfg.locator.TxtCodigoConsultora, CodigoConsultora);
           I.retry(wait).click(this.cfg.locator.BtnBusqueda); 
       //    await I.wait(3);
       });
  },

 async verificarDatosGenerales()
  {
     within(this.cfg.locator.Frame, async() =>
       {
            I.retry(wait).see('Datos de la Consultora');
            I.retry(wait).see('Estatus');
            I.retry(wait).see('Domicilio');
            I.retry(wait).see('Clasificación'); 
            console.log('Muestra Datos de la Consultora');  
          //  await I.wait(1);       
       });
  },
  async CerrarSesion()
  { 
           I.retry(wait).click(this.cfg.locator.BtnSalir);
  }
}