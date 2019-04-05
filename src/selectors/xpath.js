const map =
{
  Selectors:
  {
    //Contains: (text, elementType) => { return `//${elementType}[contains(text(),'${text}')]`; }
    Contains: (text, elementType) => 
    { 
      //return `//div[contains(@class,'x-boundlist-floating') and not(contains(@style, 'display: none'))][descendant::${elementType}[contains(text(),'${text}')]]`; 
      return `//${elementType}[contains(text(),'${text}')]`;
    }
  },
  Navigation:
  {
    waitTimeRender: 10,
    waitTimePost: 30
  },
  Login: 
  {
    Url: '/',
    Username: '//*[@id="txtUsuario"]',
    Password: '//*[@id="txtContrasena"]',
    ButtonSignIn: '//*[@id="imgIngresar"]',
  },
  DialogBox:
  {
    AlertContent: '.x-window-body',
    //AlertContent: "//span[contains(text(),'Mensaje Notificacion')][ancestor::div[contains(concat(' ', normalize-space(@class), ' '), ' x-window ')]]",
    SelectorContent: '.x-boundlist-floating',
    Notification: "//span[contains(text(),'Mensaje Notificacion')]",
    ButtonOK: "//span[contains(text(),'OK')]",
    Loading: "//div[contains(@class,'mensajeCargaPlanitBackground') or contains(@class, 'mensajeCargaPlanit')]"
  },
  Main: 
  {
    Greeting: '//*[@id="divLayerPrincipalNombreUsuario"]',
    Head: (title) => { return `//div[@id="MenuOpciones"]/h2[contains(text(),'${title}')]` },
    Menu: {
      ButtonExpandir: '//*[@id="spanExpandir"]',
      ComboCanal: '//*[@id="slcCanalMenu"]',
      ComboRegion: '//*[@id="slcRegionMenu"]',
      ComboMarca: '//*[@id="slcMarcaMenu"]',
      ComboAnio: '//*[@id="slcAnioMenu"]',
      ComboEtapa: '//*[@id="slcEtapaMenu"]',
      OptionMatriz: 
      {
        Name: '//*[@id="divMenu"]/ul/li[1]',
        Options: 
        {
          Matriz: '//*[@id="divMenu"]/ul/li[1]/div/ul/li[1]/span/a'
        }
      }
    },
    Parameters:
    {
      ComboVista: '//*[@id="divComboVista"]',
      ComboMarca: '//*[@id="divComboMarca"]',
      ComboVinculaciones: '//*[@id="divComboVinculaciones"]',
      ComboCampania: '//*[@id="divComboCampania"]',
      ButtonProcesar: '//*[@id="imgProcesar"]'
    }
  },
  OfertaMultiple: 
  {
    Title: "//div[contains(text(),'Panel - Oferta Múltiple')]",
    ButtonNewOfertaMultiple: '//*[@id="lnkCrearRangoDeUnidadesOValores"]',
    ProductoVinculado: '//*[@id="NombreVinculacion"]',
    GridOferta:
    {
      Edit:
      {
        //NewProducto: (row) => { return '//*[@id="GrillaOferta"]/div[4]/textarea' },
        //PUP: (row) => { return '//*[@id="GrillaOferta"]/div[5]/textarea' }
        //return `//div[contains(@class,'x-boundlist-floating') and not(contains(@style, 'display: none'))][descendant::${elementType}[contains(text(),'${text}')]]`; 
        //NewProducto: (row) => { return `//div[contains(@class, 'handsontableInputHolder') and contains(@style, 'display: block')]` },
        NewProducto: (row) => { return `//textarea[contains(@class, 'handsontableInput')]` },
        //PUP: (row) => { return `//textarea[contains(@class, 'handsontableInput')]` }
        PUP: (row) => { return `//*[@id="GrillaOferta"]/div[5]/textarea` }
        //*[@id="GrillaOferta"]/div[5]/textarea
      },
      NewProducto: (row) => { return `//*[@id="GrillaOferta"]/div[1]/div/div/div/table/tbody/tr[${row}]/td[2]` },
      PUP: (row) => { return `//*[@id="GrillaOferta"]/div[1]/div/div/div/table/tbody/tr[${row}]/td[6]` },
      VerifyProducto: (row, text) => { return `//*[@id="GrillaOferta"]/div[1]/div/div/div/table/tbody/tr[${row}]/td[2][contains(text(),'${text}')]` },
      DropDownListProducto: () => { return `//div[contains(@class, 'ht_master handsontable')]` }
    },
    GridNiveles:
    {
      Edit: 
      {
        UU: (row) => { return '//*[@id="GrillaNiveles"]/div[5]/textarea' },
        Precio: (row) => { return '//*[@id="GrillaNiveles"]/div[5]/textarea' },
        PUP: (row) => { return '//*[@id="GrillaNiveles"]/div[5]/textarea' }                
      },
      UU: (row) => { return `//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[${row}]/td[2]` },
      Precio: (row) => { return `//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[${row}]/td[4]` },
      PUP: (row) => { return `//*[@id="GrillaNiveles"]/div[1]/div/div/div/table/tbody/tr[${row}]/td[11]` },
    },
    ButtonAgregarNivel: '//*[@id="lnkAgregarNivel"]',
    ButtonGuardar: '//*[@id="lnkGuardarPanel"]',
    ButtonCerrar: '//*[@id="btnCerrar"]'
  },
  PromocionSet: 
  {
    ButtonGuardar: '//*[@id="lnkGuardarPanel"]',    
    ButtonCerrar: '//*[@id="btnCerrar"]'
  }
}

module.exports = map;