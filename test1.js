const categories = require("../Kaizala%20payment%20Solution/Shared/bill-categories");

let intro = 'CON select the category you want:';

  let myLoop = function (element,idx){
    intro +=  `\n ${++idx}. ${element}`;
  
  }
  categories.forEach(myLoop); 
  console.log(intro);
  console.log(categories.length);

  // var a = "cool";
  // var b = "hi";
  // var c = "hello";

  // var result = "";
  // result += a;
  // result += b;
  // result += c; 
  // console.log(result);

const merchants = require("./")
const categories = require("../Kaizala%20payment%20Solution/Shared/bill-categories");
const merchants = require("../Kaizala%20payment%20Solution/Shared/bill-merchants");
const packages = require("../Kaizala%20payment%20Solution/Shared/bill-packages");

const fetchPackages = (merchants) => {
    let bills_merchant_text = 'CON select your payment category';
     
        let myLoop = function (element,idx){
            bills_merchant_text += `\n ${++idx}. ${element}`;      
        
        } 
      merchants[categories.forEach(myLoop)]
    
      console.log(bills_merchant_text);
        
    }
    fetchPackages(merchants);

    processor.billAmountMenu = async (sessionId, currentSession, merchants, categories,packages) => {
        console.log(text);
        currentSession.history.push('MENU13');
        // currentSession.meta.amount = text;
        currentSession.currentMenu = 'MENU13';
        let response = `CON enter your transaction pin`;
        saveSession(sessionId, currentSession);
        return response;
    }

    // airtime category
    const networkcategories = require("./Shared/network-categories");

const fetchNetworkCategories = () => {
    let airtime_purchase_text = 'CON select your mobile bundle';
    let myLoop = function (element,idx){
        airtime_purchase_text+=  `\n ${++idx}. ${element}`;
    }
    networkcategories.forEach(myLoop);
    console.log(airtime_purchase_text);

    // return airtime_purchase_text;
}
// console.log(myLoop);


module.exports = {
    AIRTIME_PURCHASE_TEXT: fetchNetworkCategories()
}


const networkcategories = require("./Shared/network-categories");
const providers = require("./Shared/network-provider");
// const fetchNetworkCategories = () => {
//     let airtime_purchase_text = 'CON select your mobile bundle';
//     let myLoop = function (element,idx){
//         airtime_purchase_text+=  `\n ${++idx}. ${element}`;
//     }
//     networkcategories.forEach(myLoop);
//     console.log(airtime_purchase_text);

//     return airtime_purchase_text;
// }
// console.log(myLoop);
// const { netcategory } = req.body;
// const provider = providers[netcategory];

// const fetchNetProvider = (netcategory) => {
//     let network_provider_text = 'CON select your payment merchant';
//     let provider = providers[netcategory];
//     let myLoop = function (element,idx){
//         network_provider_text +=  `\n ${++idx}. ${element}`;
//     }
//     provider.forEach(myLoop);
//     console.log(network_provider_text);
// }
//     // return network_provider_text;
//     // console.log(bills_merchant_text);
// }

// const fetchNetProvider = () => {
//     let network_provider_text = 'CON select your mobile bundle';
//     let myLoop = function (element,idx){
//         network_provider_text +=  `\n ${++idx}. ${element}`;
//     }
//     providers.forEach(myLoop);
//     console.log(network_provider_text);
//     // return network_provider_text;
// }

const fetchNetProvider = (netcategory) => {
    let network_provider_text = 'CON select your payment category';
    let provider = providers[netcategory];

        let myLoop = function (element,idx){
            network_provider_text += `\n ${++idx}. ${element}`;      
            
        } 
        provider.forEach(myLoop);
        // provider.forEach(myLoop);
        console.log(network_provider_text);   
    }
    // fetchNetProvider(providers);

module.exports = {
    // AIRTIME_PURCHASE_TEXT: fetchNetworkCategories(),
    NETWORK_PROVIDER_TEXT: fetchNetProvider
}
//menu handler
processor.networkProviderMenu = async (sessionId, currentSession, text, phoneNumber) => {
    console.log(text);
    const idx = text -1 ;
    const networkCategory = networkcategories[idx];
    console.log('providerCategory', newtworkCategory);
    let response = menuText.NETWORK_PROVIDER_TEXT(networkCategory);
    console.log('response', response);
    currentSession.history.push('MENU17');
    currentSession.meta.networkCategory = networkCategory;
    currentSession.currentMenu = 'MENU17';
    saveSession(sessionId, currentSession);
    return response;
}

//index js
let netIndex;
case 'MENU17'
    netIndex = processedText[1] - 1;
    networkCategory = networkcategories[netIndex];
    currentSession.meta = {
        networkCategory
    }