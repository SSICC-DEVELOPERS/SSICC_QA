const modulo = require('./MantenimientoDeConcurso.module');
const login = require('./../../../../pages/Login/Login.module');
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();

Given('Ingreso a Mantenimmiento de Concurso con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
	  this.Usuario=Usuario;
	  this.Password=Password;
	  login.IniciarSesion(this.Usuario, this.Password);
	  modulo.menuSsicc();
	  I.wait(1);    
});

When('Ingreso {string} {string} {string} {string} {string} {string}', async function(NombreConcurso, CampaniaInicio, CampaniaFinal, CodigoProducto, PuntajeMinimo, PuntajeMaximo){
	  this.NombreConcurso=NombreConcurso;
	  this.CampaniaInicio=CampaniaInicio;
	  this.CampaniaFinal=CampaniaFinal;
	  this.CodigoProducto=CodigoProducto;
	  this.PuntajeMinimo=PuntajeMinimo;
	  this.PuntajeMaximo=PuntajeMaximo;
	  modulo.MantenimientoConcurso(this.NombreConcurso, this.CampaniaInicio, this.CampaniaFinal, this.CodigoProducto, this.PuntajeMinimo, this.PuntajeMaximo); 
	  I.wait(1);   
});

Then('Muestra el mensaje El Concurso ha sido creado satisfactoriamente', function(){
	  I.wait(1);
	  modulo.CerrarSesion();
});