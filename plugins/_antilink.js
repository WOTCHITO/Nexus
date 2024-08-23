let linkRegex = /(https?:\/\/(?:www\.)?(?:t\.me|telegram\.me|whatsapp\.com)\/\S+)|(https?:\/\/chat\.whatsapp\.com\/\S+)|(https?:\/\/whatsapp\.com\/channel\/\S+)/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `🏷 *𝐇𝐞𝐲!! 𝐄𝐥 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐞𝐬𝐭𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨 𝐩𝐞𝐫𝐨 𝐞𝐫𝐞𝐬 𝐚𝐝𝐦𝐢𝐧, ¡𝐒𝐚𝐥𝐯𝐚𝐝𝐨 𝐚𝐝𝐦𝐢𝐧 𝐜𝐨𝐫𝐫𝐮𝐩𝐭𝐨!*`, m, rcanal, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `📎 *¡𝐄𝐧𝐥𝐚𝐜𝐞 𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐨!*\n\n*${await this.getName(m.sender)} 𝐌𝐀𝐍𝐃𝐀𝐒𝐓𝐄 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐋𝐎 𝐂𝐔𝐀𝐋 𝐒𝐄𝐑𝐀𝐒 𝐌𝐀𝐍𝐃𝐀𝐃𝐎 𝐀 𝐕𝐈𝐎𝐋𝐀𝐑 𝐀 𝐓𝐔 𝐑𝐄𝐏𝐔𝐓𝐀 𝐌𝐀𝐃𝐑𝐄*`, m, rcanal, )
if (!isBotAdmin) return conn.reply(m.chat, `🌼 *𝐍𝐨 𝐩𝐮𝐞𝐝𝐨, 𝐧𝐨 𝐬𝐨𝐲 𝐚𝐝𝐦𝐢𝐧, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐧𝐢𝐧̃𝐨 𝐪𝐮𝐞𝐬𝐨*`, m, rcanal, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*¡Esta característica esta desactivada!*`, m, rcanal, )
}
return !0

}
