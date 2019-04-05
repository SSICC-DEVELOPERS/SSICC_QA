Feature('StoConsultaPedidos')

//'use strict';
//const Interfaces = require('../selectors/xpath');
//const Interfaces = require('../codecept.conf');

Scenario('test something', async (I,login) => {
  console.log("login sign in");
  await  login.signIn('ADMIN','BELCORP');
  await login.consultora('044176467');
  /*
  await  I.executeClick(Locators.LinkConsultaReportes);
  console.log('Click Consulta Reportes');
  await  I.executeClick(Locators.LinkSistemaConsultasReportes);
  console.log('Clic Sistema Consultas Reportes');
  await  I.executeClick(Locators.LinkHiperConsulta);
  console.log('Clic Hiper Consulta');
  await  I.executeClick(Locators.OptionMostrarDatosCliente);
  console.log('Clic Mostrar Datos Cliente');
  await  I.click(Locators.txtCodigoClienteBuscar);
  console.log('Clic ingreso Código Cliente 044176467');
  await  I.click(Locators.ButtonBusqueda);
  console.log('Clic en el botón Busqueda');
  await  I.click(Locators.SelectConsultaCuentaCorriente);
  console.log('Clic en Consulta Cuenta Corriente');
  awSait  I.click(Locators.ButtonSalir);
  */
 });
