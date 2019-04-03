exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: "http://pelnx2090:7003",
      browser: 'chrome',
      windowSize: 'maximize',
      timeouts: {
        "script": 60000,
        "page load": 10000
      },
      popupSize: 'maximize',
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    },
    helperWebdriverIO:{
      require:'./helpers/helperWebdriverIO.js'
    }    
  },

  include: {
    I: './steps_file.js',
    login: './pages/login.js'
  },  
  bootstrap: null,
  mocha: {},
  name: 'planit' 
}