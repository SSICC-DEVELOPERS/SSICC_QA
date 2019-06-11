const modulo = require('./ConsultaPedidos.module');
const login = require('./../../../../../pages/Login/Login.module');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();

Given('Ingreso a Consulta Pedidos con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
  this.Usuario=Usuario;
  this.Password=Password;
  login.IniciarSesion(this.Usuario, this.Password);
  modulo.menuSsicc();    
  I.wait(1);
});

When('Ingreso {string}', async function(CodigoConsultora){
  this.CodigoConsultora=CodigoConsultora;
  modulo.consultora(this.CodigoConsultora);   
});

Then('Selecciona la Opcion', async function(){
  modulo.OpcionConsultar(); 
  I.wait(3);   
});

Then('Se verifica ConsultaPedidos', function(){
  modulo.mostrarPopup();
  modulo.CerrarSesion();
});
