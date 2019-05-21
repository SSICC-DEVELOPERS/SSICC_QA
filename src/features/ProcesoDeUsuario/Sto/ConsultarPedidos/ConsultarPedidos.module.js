//-----------------------Declaración de requerimientos---------------
const config= require('./ConsultarPedidos.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: Consultar Pedidos----------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
        I.retry(wait).click(this.cfg.locator.LinkProcesoUsuario);
        I.retry(wait).click(this.cfg.locator.LinkSTO);
        I.retry(wait).click(this.cfg.locator.LinkConsultarPedidos);
  },

 async ConsultarPedidos(Periodo,CodigoCliente)
  {
     within(this.cfg.locator.Frame, async() =>
    {  
     I.retry(wait).fillField(this.cfg.locator.TxtPeriodo, Periodo);
     I.retry(wait).click(this.cfg.locator.TxtFechaInicio);
     I.pressKey('Del');
     I.retry(wait).click(this.cfg.locator.TxtFechaFin); 
     I.pressKey('Del');    
     I.retry(wait).fillField(this.cfg.locator.TxtCliente, CodigoCliente);
     I.retry(wait).click(this.cfg.locator.BtnBusqueda); 
     await I.wait(2);
    });
  },

  async ValidarRolGP5(GP5){  
    within(this.cfg.locator.Frame, async() =>
    {  
      I.retry(wait).scrollTo('#panelDatateble',4,4);
      I.wait(10);
         let rencontradoGP5 = await I.grabTextFrom(this.cfg.locator.LblGP5);
         if(rencontradoGP5!=GP5)
         
     {
        I.see("GP5=" +rencontradoGP5)
     }
         console.log('Prueba Exitosa se encontro, para el registro el Valor 1 en Columana GP5');  
    });
},

  async CerrarSesion()
  { 
    I.retry(wait).click(this.cfg.locator.BtnSalir);    
  }
}