//-----------------------Declaración de requerimientos---------------
const config= require('./MantenimientoMav.locator');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();
//--------------------------------------------------------------------
//------------Proceso: Mav Mantenimiento Mav---------

module.exports = {

  cfg: config.config,

  async menuSsicc()
  {
    I.retry(wait).click(this.cfg.locator.LinkProcesoUsuario);
    I.retry(wait).click(this.cfg.locator.LinkMav);
    I.retry(wait).click(this.cfg.locator.LinkMantenimientoMAV);
 //   await I.wait(2);
   },

 async MantenimientoMAV(Campania,UnidadesEstimadas,Producto,Precio,Observaciones,EdadDesde,EdadHasta)
  {
          within(this.cfg.locator.Frame, async() =>
       {
            
						I.retry(wait).click(this.cfg.locator.BtnNuevo);
				//		await I.wait(1);  
						I.retry(wait).fillField(this.cfg.locator.TxtCampania, Campania);	
						I.retry(wait).click(this.cfg.locator.TxtActividad);
						I.retry(wait).click(this.cfg.locator.CmbOptionActividad);      
						I.retry(wait).pressKey('Enter');                        
				//    await I.wait(2);	
						I.retry(wait).fillField(this.cfg.locator.TxtUnidadesEstimadas, UnidadesEstimadas);
						await I.wait(2);
						I.retry(wait).click(this.cfg.locator.TxtTipoOferta);
						I.retry(wait).click(this.cfg.locator.CmbOptionTipoOferta);   
						await I.wait(2);   
						I.retry(wait).pressKey('Enter');  
						I.retry(wait).pressKey('Enter');      
				  	await I.wait(1);
						I.retry(wait).fillField(this.cfg.locator.TxtProducto, Producto);
						await I.wait(1);
						I.retry(wait).fillField(this.cfg.locator.TxtPrecio, Precio);
						I.retry(wait).fillField(this.cfg.locator.TxtObservaciones, Observaciones);
						I.retry(wait).click(this.cfg.locator.PestanaConsideraciones);
						await I.wait(1);			
						I.retry(wait).click(this.cfg.locator.TxtConsideracion);
						I.retry(wait).click(this.cfg.locator.CmbOptionConsideracion);      
						I.retry(wait).pressKey('Enter');   			
						I.retry(wait).fillField(this.cfg.locator.TxtEdadDesde, EdadDesde);
						I.retry(wait).fillField(this.cfg.locator.TxtEdadHasta, EdadHasta);
						I.retry(wait).click(this.cfg.locator.BtnInsertar);
						await I.wait(1);  	
						I.retry(wait).click(this.cfg.locator.BtnGuardar);
				//		await I.wait(1); 	
						I.retry(wait).click(this.cfg.locator.BtnConfirmarInformacion);
					//	await I.wait(1);  	
						I.retry(wait).click(this.cfg.locator.BtnMensajeDatosInsertadosCorrectamente);
						await I.wait(1); 	
						console.log('La configuración MAV ha sido creado satisfactoriamente');	
     });

  },  
  
  	async CerrarSesion()
    { 
					I.retry(wait).click(this.cfg.locator.BtnSalir);  
    } 
}