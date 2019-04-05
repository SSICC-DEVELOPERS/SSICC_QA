//Feature('HiperConsultaDatosGenerales')

//'use strict';
//const Interfaces = require('../selectors/xpath');
//const Interfaces = require('../codecept.conf');

/*

const Locators = 
{
  Url: '/ssiccpeespdp/index.xhtml',
  Username: '//*[@id="usuario:input"]',
  Password: '//*[@id="j_idt28:input"]',
  ButtonSignIn: '//*[@id="j_idt35"]/span',
  LinkConsultaReportes:'//*[@id="menu"]/li[4]/a', 
  LinkSistemaConsultasReportes:'SISTEMA CONSULTAS Y REPORTES',
  LinkHiperConsulta:'HIPERCONSULTA',
  OptionMostrarDatosCliente:'Mostrar Datos Cliente',
  CodigoClienteBuscar: '//iframe[@id="iframeCenter"]/input[@id="codigoClienteBuscar"]',
  ButtonBusqueda:'//*[@id="botonBusqueda:linkBuscarAjax:linkImagen"]',
  ButtonSalir:'//*[@id="j_idt40"]',
};



Scenario('test something', async (I,login) => {
  /*
    console.log("login sign in");
    await  login.signIn('ADMIN','BELCORP');
    await login.consultora('044176467'); 
  */
  /*
  console.log('Deseo loguearme en Belcorp');
    await I.amOnPage(Locators.Url);    
    await I.wait(5);
    console.log('Se ingreso a pagina Belcorp');
    await I.fillField(Locators.Username, username);
    console.log('Se Ingreso usuario');
    await I.fillField(Locators.Password, password);
    console.log('Se Ingreso contraseña');
    await I.executeClick(Locators.ButtonSignIn);
    console.log('dio click');
    await I.wait(15);
    console.log('Ingrese a pagina');
    await  I.click(Locators.LinkConsultaReportes);
    console.log('Click Consulta Reportes');
    await I.wait(3);
    await  I.click(Locators.LinkSistemaConsultasReportes);
    console.log('Clic Sistema Consultas Reportes');
    await I.wait(4);
    await  I.click(Locators.LinkHiperConsulta);
    console.log('Clic Hiper Consulta');
    await I.wait(5);
    await  I.click(Locators.OptionMostrarDatosCliente);
    console.log('Clic en Mostrar Datos Cliente');
    await I.wait(5);
    console.log('Clic en Campo Codigo');
    await I.wait(2);
    await within({frame:'//*[@id="iframeCenter"]'}, async() =>
      {
           await I.fillField('//*[@id="codigoClienteBuscar"]', CodigoClienteBuscar);
           console.log('Ingrese el Código');
           await I.wait(2);
           await  I.click(Locators.ButtonBusqueda);
           console.log('Clic en el botón Busqueda');
           await I.wait(6);
           console.log('ingresa a metodo opcionconsulta');
           await I.wait(3);
 
  });
  */
