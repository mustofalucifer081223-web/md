// mdads.js - Modora Official Ads Manager
// Simpan file ini di ROOT direktori website (misal: htdocs/mdads.js)

function renderModoraAd(adId) {
    switch(adId) {
        case 1:
            // --- Iklan 1 - Script Head ---
            document.write('<script src="https://pl31036817.profitableratecpmnetwork.com/f9/70/a4/f970a46b183309b36373e5c26bed74d5.js"></script>');
            break;
            
        case 2:
            // --- Iklan 2 - ukuran 320x50 ---
            document.write('<script> atOptions = { "key" : "0af6a2610335a01689c21f89285db021", "format" : "iframe", "height" : 50, "width" : 320, "params" : {} }; </script>');
            document.write('<script src="https://www.highrevenueformat.com/0af6a2610335a01689c21f89285db021/invoke.js"></script>');
            break;
            
        case 3:
            // --- Iklan 3 - ukuran 468x60 ---
            document.write('<script> atOptions = { "key" : "0af6a2610335a01689c21f89285db021", "format" : "iframe", "height" : 60, "width" : 468, "params" : {} }; </script>');
            document.write('<script src="https://www.highrevenueformat.com/0af6a2610335a01689c21f89285db021/invoke.js"></script>');
            break;
            
        case 4:
            // --- Iklan 4 - ukuran 728x90 ---
            document.write('<script> atOptions = { "key" : "5b8d5cfd5cafadeaa56397313bfe57b8", "format" : "iframe", "height" : 90, "width" : 728, "params" : {} }; </script>');
            document.write('<script src="https://www.highrevenueformat.com/5b8d5cfd5cafadeaa56397313bfe57b8/invoke.js"></script>');
            break;
            
        case 5:
            // --- Iklan 5 - Native Async ---
            document.write('<script async="async" data-cfasync="false" src="https://pl31038288.profitableratecpmnetwork.com/e9417a0f3e69285b4700703b93903018/invoke.js"></script>');
            document.write('<div id="container-e9417a0f3e69285b4700703b93903018"></div>');
            break;
            
        case 6:
            // --- Iklan 6 - ukuran 300x250 ---
            document.write('<script> atOptions = { "key" : "9902ecf94a27a9d99d0952b5d75eaf98", "format" : "iframe", "height" : 250, "width" : 300, "params" : {} }; </script>');
            document.write('<script src="https://www.highrevenueformat.com/9902ecf94a27a9d99d0952b5d75eaf98/invoke.js"></script>');
            break;
            
        case 7:
            // --- Iklan 7 - Script Body ---
            document.write('<script src="https://pl31036818.profitableratecpmnetwork.com/04/3f/c3/043fc311eb7e36e5d240e74b44458e85.js"></script>');
            break;
    }
}