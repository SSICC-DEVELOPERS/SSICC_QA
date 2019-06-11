const modulo = require('./LiquidacionDeBoletasDeRecojo.module');
const login = require('./../../../../pages/Login/Login.module');
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given('Ingreso a Liquidacion De Boletas De Recojo con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
	this.Usuario=Usuario;
	this.Password=Password;
	login.IniciarSesion(this.Usuario, this.Password);
	modulo.menuSsicc();
	I.wait(1);       
  }); 

When('Ingreso Periodo Inicial {string} y Periodo Final {string}', async function(PeriodoInicial,PeriodoFinal){
	  this.PeriodoInicial=PeriodoInicial;
	  this.PeriodoFinal=PeriodoFinal;
	  modulo.LiquidacionBoletasRecojo(this.PeriodoInicial, this.PeriodoFinal); 
	  I.wait(1);   
});
Then('Muestra el mensaje Se aprobaron las boletas de recojo satisfactoriamente', function(){
	  I.wait(1);
	  modulo.MensajesEmergentes(); 
      modulo.CerrarSesion();
});