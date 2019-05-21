//-----------------------Declaración de requerimientos---------------
const config= require('./ConsultaPedidos.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: HIPERCONSULTA Consulta Pedidos----------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
        I.retry(wait).click(this.cfg.locator.LinkConsultaReportes);
        I.retry(wait).click(this.cfg.locator.LinkSistemaConsultasReportes);
        I.retry(wait).click(this.cfg.locator.LinkHiperConsulta);
        I.retry(wait).click(this.cfg.locator.OptionMostrarDatosCliente);
   //     await I.wait(2);
  },

  async consultora(CodigoConsultora)
  {
        within(this.cfg.locator.Frame, async() =>
       {  
        I.retry(wait).fillField(this.cfg.locator.TxtCodigoConsultora, CodigoConsultora);
        I.retry(wait).click(this.cfg.locator.BtnBusqueda); 
     //   await I.wait(1);
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
   //     await I.wait(2);
     });
  },

  async mostrarPopup()
  {
        within(this.cfg.locator.Frame, async() =>
     {
        I.retry(wait).waitForVisible('/html/body');
        console.log('Aplicación muetra Popup con los pedidos de la Consultora');

    //    await I.wait(1);
     });
  },

  async CerrarSesion()
  { 
   I.retry(wait).click(this.cfg.locator.BtnSalir);    
  }
}