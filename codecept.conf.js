const steps= require("./src/features");

exports.config = {
  output: './report',
  helpers: {
    WebDriver: {
      url: "http://pelnx2090:7003/",
      browser: 'chrome',
      windowSize: 'maximize',
      restart: true,
      keepBrowserState: false,
      keepCookies: false,
      smartWait: 2000,
      timeouts: {
        "script": 60000,
        "page load": 10000
      },
      popupSize: 'maximize',
    },
    helperWebdriverIO:{
      require:'./src/helpers/helperWebdriverIO.js'
    },
    Mochawesome: {  
      uniqueScreenshotNames: true
    }
  },
  include: {},
  mocha: {
    reporterOptions: {
      reportDir: "./report/",
      reportFilename: 'SSSICCC',
      reportTitle: 'TestAutomation-SSICC',
      autoOpen:true,
      ts:'',
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/**/**/**/**/*.feature',
    steps: [
      ...steps
         ]
  },
  plugins: {
    allure: {},
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './tests/*_test.js',
  name: 'TestAutomation-SSICC',
  multiple: {
    parallel: {
        chunks: 1
    }
  }  
}