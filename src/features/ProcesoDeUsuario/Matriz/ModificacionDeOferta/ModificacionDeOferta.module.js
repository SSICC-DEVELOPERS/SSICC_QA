//-----------------------Declaración de requerimientos---------------
const config= require('./ModificacionDeOferta.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: Matriz Modificación de Oferta  ----------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
    I.retry(wait).click(this.cfg.locator.LinkProcesoUsuario);
    I.retry(wait).click(this.cfg.locator.LinkMatriz);
    I.retry(wait).click(this.cfg.locator.LinkModificacionOferta);
    await I.wait(2);
   },

 async ModificarOferta(Campania,CUV)
  {
     within(this.cfg.locator.Frame, async() =>    
     {
            I.retry(wait).fillField(this.cfg.locator.TxtCampania, Campania);
            I.retry(wait).fillField(this.cfg.locator.TxtCVU, CUV);
     //       await I.wait(1);
            I.retry(wait).click(this.cfg.locator.BtnBusqueda);
            await I.wait(1);
            I.retry(wait).click(this.cfg.locator.RegistrosEncontrados);
            I.retry(wait).click(this.cfg.locator.BtnModificar);
     //       await I.wait(1);
            I.retry(wait).click(this.cfg.locator.REncontradosModificarRE);
     //       await I.wait(1);
            I.retry(wait).click(this.cfg.locator.BtnModificarRE);
     //       await I.wait(3);           
       });
  },  
 
  async mostrarPopup(PContable)
  {
    within(this.cfg.locator.Frame, async() =>    
    {
       
            I.retry(wait).seeElement(this.cfg.locator.CargaPopup); 
   //         await I.wait(1);
            I.retry(wait).fillField(this.cfg.locator.TxtPrecioContable, PContable); 
            I.retry(wait).click(this.cfg.locator.BtnGuardar);
    //        await I.wait(1);
            I.retry(wait).see('Producto actualizado satisfactoriamente.');
            console.log('Producto actualizado satisfactoriamente.');            

      });
  },

  async CerrarSesion()
  { 
     I.retry(wait).click(this.cfg.locator.BtnSalir);         
  }
}