let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

if (!text) return m.reply(`🔱 𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐄𝐋 𝐋𝐈𝐍𝐊 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎 𝐉𝐄𝐅𝐄.`)
let [_, code] = text.match(linkRegex) || []
if (!code) return m.reply('🎗️ 𝐄𝐍𝐋𝐀𝐂𝐄 𝐈𝐍𝐕𝐀𝐋𝐈𝐃𝐎 𝐏𝐀𝐓𝐑𝐎𝐍.')
let res = await conn.groupAcceptInvite(code)
m.reply(`✅ 𝐋𝐎 𝐐𝐔𝐄 𝐔𝐒𝐓𝐄𝐃 𝐃𝐈𝐉𝐀 𝐉𝐄𝐅𝐄, 𝐘𝐀 𝐌𝐄 𝐔𝐍𝐈 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄`)
}
handler.help = ['join <link>']
handler.tags = ['mods']
handler.command = ['join', 'entrar'] 
handler.rowner = true

export default handler
