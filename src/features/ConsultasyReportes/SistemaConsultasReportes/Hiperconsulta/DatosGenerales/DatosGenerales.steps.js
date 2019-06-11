const modulo = require('./DatosGenerales.module');
const login = require('./../../../../../pages/Login/Login.module');
//const login = require('../../Login.module');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();

Given('Ingreso a Datos Generales con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
  this.Usuario=Usuario;
  this.Password=Password;
  login.IniciarSesion(this.Usuario, this.Password);    
});

When('Ingreso al menu', async function(){
  modulo.menuSsicc();    
  I.wait(1); 
});

Then('Ingreso {string}', function(CodigoConsultora){
  this.CodigoConsultora=CodigoConsultora;
  modulo.consultora(this.CodigoConsultora);   
  I.wait(1);
});

Then('se verifican los Datos Generales', function(){
  modulo.verificarDatosGenerales();
  I.wait(1);
  modulo.CerrarSesion();
});