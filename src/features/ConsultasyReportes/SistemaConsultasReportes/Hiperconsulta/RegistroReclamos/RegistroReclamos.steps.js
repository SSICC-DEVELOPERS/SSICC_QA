const modulo = require('./RegistroReclamos.module');
const login = require('./../../../../../pages/Login/Login.module');

let wait = { retries: 10, minTimeout: 3000 };
const I = actor();

Given('Ingreso a Registro Reclamos con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
  this.Usuario=Usuario;
  this.Password=Password;
  login.IniciarSesion(this.Usuario, this.Password);
  modulo.menuSsicc();    
  I.wait(1);   
  });

When('Ingreso Codigo Consultora {string} con CDR {string} {string} {string}', async function(CodigoConsultora, NumeroCDR, CodigoVenta,Cantidad){
  this.CodigoConsultora=CodigoConsultora;
  modulo.consultora(this.CodigoConsultora);  
  modulo.OpcionConsultar();   
  this.NumeroCDR=NumeroCDR;
  this.CodigoVenta=CodigoVenta;
  this.Cantidad=Cantidad;
  modulo.mostrarPopup(this.NumeroCDR,this.CodigoVenta,this.Cantidad); 
  I.wait(1);     
  });

Then('Muestra el mensaje Reclamo registrado satisfactoriamente El CDR se encuentra en GP1', function(){
  I.wait(1);     
  modulo.CerrarSesion();
});