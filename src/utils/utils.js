//const configLocator= require('./configLocator')
let fs = require('fs');

function fnGetFiles (dir, filter='', files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            fnGetFiles(name, filter, files_);
        } else if(name.indexOf(filter)>=0) {
            files_.push(name);
        }
    }
    return files_;
}

function fnGetConfig(CodigoPais) {
  let config="";
  switch(CodigoPais) {
      case "ARL":
      config= Object.assign(configLocator.ARL,configLocator.Global);
      break;
     case "BOE":
        // code block
        config= Object.assign(configLocator.BOE,configLocator.Global);
        break;
       case "CLE":
        // code block
        config= Object.assign(configLocator.CLE,configLocator.Global);
        break;
        case "COE":
        // code block
        config= Object.assign(configLocator.COE,configLocator.Global);
        break;
        case "COL":
        // code block
        config= Object.assign(configLocator.COL,configLocator.Global);
        break;
        case "CRL":
        // code block
        config= Object.assign(configLocator.CRL,configLocator.Global);
        break;
        case "DOL":
        // code block
        config= Object.assign(configLocator.DOL,configLocator.Global);
        break;
        case "ECE":
        // code block
        config= Object.assign(configLocator.ECE,configLocator.Global);
        break;
        case "ECL":
        // code block
        config= Object.assign(configLocator.ECL,configLocator.Global);
        break;
        case "SVE":
        // code block
        config= Object.assign(configLocator.SVE,configLocator.Global);
        break;
        case "SVL":
        // code block
        config= Object.assign(configLocator.SVL,configLocator.Global);
        break;
        case "GTE":
        // code block
        config= Object.assign(configLocator.GTE,configLocator.Global);
        break;
        case "GTL":
        // code block
        config= Object.assign(configLocator.GTL,configLocator.Global);
        break;
        case "MXE":
        // code block
        config= Object.assign(configLocator.MXE,configLocator.Global);
        break;
        case "MXL":
        // code block
        config= Object.assign(configLocator.MXL,configLocator.Global);
        break;
        case "PAL":
        // code block
        config= Object.assign(configLocator.PAL,configLocator.Global);
        break;
        case "PE":
        // code block
        config= Object.assign(configLocator.PE,configLocator.Global);
        break;
        case "PEL":
        // code block
        config= Object.assign(configLocator.PEL,configLocator.Global);
        break;
        case "PRL":
        // code block
        config= Object.assign(configLocator.PRL,configLocator.Global);
        break;
        case "VEE":
        // code block
        config= Object.assign(configLocator.VEE,configLocator.Global);
        break;   
      case "VEL":
        // code block
        config= Object.assign(configLocator.VEL,configLocator.Global);
        break;
      //default:
        // code block
    }
    return config;
}

module.exports.fnGetConfig=fnGetConfig;
module.exports.fnGetFiles=fnGetFiles;