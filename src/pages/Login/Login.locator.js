//const I = actor();

config = {
    locator: {        
        Url: {xpath:'http://pelnx2090:7003/ssiccpeespdp'},
        Username: {xpath:'//*[contains(@id,"usuario")]'},
        Password: {xpath:'//*[@class="formcontrol pass"]/child::input'},
        BtnIniciar: {xpath:'//*[text()="INGRESA TU CUENTA"]'},
        Frame:{frame:'//*[@id="iframeCenter"]'},
        
            }     
 } 
 module.exports.config=config;