const modulo = require('./GestiondeErroresdeValidacion.module');
const login = require('./../../../../pages/Login/Login.module');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();

Given('Ingreso a Gestion de Errores de Validacion con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
    
  this.Usuario=Usuario;
  this.Password=Password;
  login.IniciarSesion(this.Usuario, this.Password);
  modulo.menuSsicc();
  I.wait(1);    
});

When('Ingreso los criterios de Ejecuccion de Proceso', async function(){
   modulo.IngresoCriteriosEjecucion(); 
   I.wait(1);   
});

Then('Se realiza la aprobación de Resultados', function(){
 modulo.ValidacionProceso();
 modulo.CerrarSesion();
});