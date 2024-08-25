import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let img = await (await fetch(`https://telegra.ph/file/aba3a1a11cc126177df23.jpg`)).buffer()
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)
let txt = `✎ *ησмвяє* ${name}\n\n`
txt += `❄︎ *ηινєℓ* ${user.level}\n`
txt += `✰ *єχρєяιєηɕια* ${user.exp - min} / ${xp}\n\n`
txt += `❉ ησ тιєηєѕ ѕυƒιɕιєηтє єχρ *${max - user.exp}* ¡ԃє ηυєνσ! ⇜`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)}
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
let txt = `♥︎ ƒ є ℓ ι ɕ ι ԃ α ԃ є ѕ ♥︎\n\n` 
txt += `*${before}* ➔ *${user.level}* [ ${user.role} ]\n\n`
txt += `• 🧬 𝕹𝖎𝖛𝖊𝖑 𝖆𝖓𝖙𝖊𝖗𝖎𝖔𝖗 : ${before}\n`
txt += `• 🧬 𝕹𝖚𝖊𝖛𝖔 𝖓𝖎𝖛𝖊𝖑 : ${user.level}\n`
txt += `• 📅 𝕱𝖊𝖈𝖍𝖆 : ${new Date().toLocaleString('id-ID')}\n\n`
txt += `🚩 *𝙽𝙾𝚃𝙰:* _🄲🅄🄰🄽🅃🄾 🄼🄰🅂 🄸🄽🅃🄴🅁🄰🄲🅃🅄🄴🅂 🄲🄾🄽 🄴🄻 🄱🄾🅃 🄽🄰🄺🄰🄽🄾, 🄼🄰🅈🄾🅁 🅂🄴🅁🄰 🅃🅄 🄽🄸🅅🄴🄻_`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)}}

handler.help = ['levelup']
handler.tags = ['rpg']
handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.group = true;
handler.register = true
export default handler
