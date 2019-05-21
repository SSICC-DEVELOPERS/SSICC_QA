const modulo = require('./ModificacionDeOferta.module');
const login = require('./../../../../pages/Login/Login.module');
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given('Ingreso a Mantenimmiento de Oferta con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
	  this.Usuario=Usuario;
	  this.Password=Password;
	  login.IniciarSesion(this.Usuario, this.Password);
	  modulo.menuSsicc();
	  I.wait(1);    
});

When('Ingreso Campania {string} y CUV {string}', async function(Campania,CUV){
  	this.Campania=Campania;
    this.CUV=CUV;
    modulo.ModificarOferta(this.Campania,this.CUV);    
});

Then('Muestra {string} y el mensaje Producto actualizado satisfactoriamente', function(PContable){
    this.PContable=PContable;
    modulo.mostrarPopup(PContable);
    modulo.CerrarSesion();
});