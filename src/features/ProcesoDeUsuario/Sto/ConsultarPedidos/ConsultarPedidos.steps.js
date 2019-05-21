const modulo = require('./ConsultarPedidos.module');
const login = require('./../../../../pages/Login/Login.module');
let wait = { retries: 10, minTimeout: 3000 };
const I = actor();

Given('Ingreso a Consultar Pedidos con el Usuario {string} y Contrasena {string}', async function (Usuario,Password){ 
    this.Usuario=Usuario;
    this.Password=Password;
    login.IniciarSesion(this.Usuario, this.Password);
    modulo.menuSsicc();    
  });

When('Ingreso {string} y {string} clic en buscar', async function(Periodo,CodigoCliente){
    this.Periodo=Periodo;
    this.CodigoCliente=CodigoCliente;
    modulo.ConsultarPedidos(this.Periodo,this.CodigoCliente);    
  });

Then('Validar GP5 {string}', function(GP5){
    this.GP5=GP5;
    modulo.ValidarRolGP5(this.GP5);
    modulo.CerrarSesion();
  });

