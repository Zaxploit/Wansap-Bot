const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./media/imgnya.jpg')
global.thumb2 = fs.readFileSync('./media/imgnya2.jpg')
global.linkgc = 'https://chat.whatsapp.com/Gr6Wy6OoRTP00YmV0x6pHr'
global.userB = []
global.ownerNumber = ['6283890107168','6281617945484']
global.ownerName = '© FxSx'
global.packname = 'RoF3X-MD'
global.author = '© FxSx'
global.prefa = ['','!','#','&','/','.']
global.sessionName = 'sesi'
global.mess = {
  admin: '*Fitur Khusus Admin Grup*',
  botAdmin: '*Jadikan Bot Admin Terlebih Dahulu*',
  botOwner: '*Fitur Khusus Owner*',
  group: '*Fitur Khusus Group*',
  private: '*Fitur Khusus Private Chat*',
  wait: '*Diproses...*',
  sukses: '*Sukses*',
  error: '*Error...*'
}
global.limitawal = {
  premium: "Infinity",
  free: 12,
  monayawal: 1000
}
global.rpg = {
  darahawal: 100,
  besiawal: 15,
  goldawal: 10,
  emeraldawal: 5,
  umpanawal: 5,
  potionawal: 1
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
