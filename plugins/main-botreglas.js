let handler = async (m, { conn, usedPrefix, command}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let yaemori = `🚩 *𝕽𝖊𝖘𝖕𝖊𝖙𝖆 𝖑𝖆𝖘 𝖗𝖊𝖌𝖑𝖆𝖘 𝖉𝖊 𝖑𝖆 𝖇𝖔𝖙 𝖓𝖆𝖐𝖆𝖓𝖔*\n
✰ 𝕹𝖔 𝖑𝖑𝖆𝖒𝖆𝖗 𝖆𝖑𝖆 𝕭𝖔𝖙
✰ 𝕹𝖔 𝖍𝖆𝖈𝖊𝖗 𝖘𝖕𝖆𝖒
✰ 𝖈𝖔𝖓𝖙𝖆𝖈𝖙𝖆𝖗 𝖆𝖑 𝖈𝖗𝖊𝖆𝖉𝖔𝖗 𝖘𝖎 𝖊𝖘 𝖓𝖊𝖘𝖊𝖘𝖆𝖗𝖎𝖔
✰ 𝕻𝖊𝖉𝖎𝖗 𝖕𝖊𝖗𝖒𝖎𝖘𝖔 𝖕𝖆𝖗𝖆 𝖆𝖓̃𝖆𝖉𝖎𝖗 𝖆𝖑𝖆 𝖇𝖔𝖙 𝖆 𝖚𝖓 𝖌𝖗𝖚𝖕𝖔

🍬 𝗡𝗼𝘁𝗮: *𝕾𝖎 𝖓𝖔 𝖈𝖚𝖒𝖕𝖑𝖊𝖘 𝖈𝖔𝖓 𝖑𝖆𝖘 𝖗𝖊𝖌𝖑𝖆𝖘 𝖉𝖊 𝖑𝖆 𝖇𝖔𝖙, 𝕾𝖊𝖗𝖆𝖘 𝖇𝖑𝖔𝖖𝖚𝖊𝖆𝖉𝖔.*

⚠️ 𝗔𝘃𝗶𝘀𝗼: *𝕻𝖚𝖊𝖉𝖊𝖘 𝖆𝖕𝖔𝖞𝖆𝖗𝖓𝖔𝖘, 𝖘𝖎𝖌𝖚𝖎𝖊𝖓𝖉𝖔𝖓𝖔𝖘 𝖊𝖓 𝖊𝖑 𝖈𝖆𝖓𝖆𝖑 𝖔𝖋𝖎𝖈𝖎𝖆𝖑 𝖉𝖊 𝖑𝖆 𝖇𝖔𝖙.*

${global.md}`.trim()
await conn.reply(m.chat, yaemori, m, fake)

}
handler.help = ['botreglas']
handler.tags = ['main']
handler.command = ['botreglas', 'reglasdelbot', 'reglasbot', 'reglas']
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
