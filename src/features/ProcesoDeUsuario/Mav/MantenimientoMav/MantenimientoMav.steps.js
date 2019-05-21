const modulo = require('./MantenimientoMav.module');
const login = require('./../../../../pages/Login/Login.module');
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given('Ingreso a Mantenimmiento MAV con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
	  this.Usuario=Usuario;
	  this.Password=Password;
	  login.IniciarSesion(this.Usuario, this.Password);
	  modulo.menuSsicc();
	  I.wait(1);    
});

When('Ingreso {string} {string} {string} {string} {string} {string} {string}', async function(Campania,UnidadesEstimadas,Producto,Precio,Observaciones,EdadDesde,EdadHasta){
	  this.Campania=Campania;
	  this.UnidadesEstimadas=UnidadesEstimadas;
	  this.Producto=Producto;
	  this.Precio=Precio;
	  this.Observaciones=Observaciones;
	  this.EdadDesde=EdadDesde;
	  this.EdadHasta=EdadHasta;
	  modulo.MantenimientoMAV(this.Campania, this.UnidadesEstimadas,this.Producto, this.Precio,this.Observaciones, this.EdadDesde,this.EdadHasta); 
	  I.wait(1);   
});

Then('Muestra el mensaje La configuración MAV ha sido creado satisfactoriamente', function(){
	  I.wait(1);
	  modulo.CerrarSesion();
});