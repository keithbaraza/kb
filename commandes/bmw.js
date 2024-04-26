"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "huncho", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝒀𝒆𝒔😉 𝐀𝐦 𝐇𝐔𝐍𝐂𝐇𝐎-𝐌𝐃 𝐀 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐛𝐨𝐭 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐊𝐞𝐢𝐭𝐡 𝐭𝐞𝐜𝐡\n\n ' + "𝐈𝐟 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐮𝐬𝐞 𝐦𝐞 𝐣𝐮𝐬𝐭 𝐭𝐲𝐩𝐞 𝐦𝐞𝐧𝐮";
    let d = '                                                🏁𝐀𝐦 𝐭𝐡𝐞 𝐟𝐚𝐬𝐭𝐞𝐬𝐭 𝐛𝐨𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐰𝐨𝐫𝐥𝐝';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/d98532bb4aa4569e92afb.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
    
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *HUNCHO-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *HUNCHO-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/b775cf57391d69ffb50a9.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
