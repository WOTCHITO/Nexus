let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*💞 𝕲𝖗𝖚𝖕𝖔𝖘 𝖔𝖋𝖎𝖈𝖎𝖆𝖑𝖊𝖘 𝖓𝖆𝖐𝖆𝖓𝖔*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙🌸̶̩ܻᝒ̷̸꯭͙𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙❄︎⋰⋰𝝣⃯ᵴͦ𝛒⃨ᷫ𝛆ͨ🄲⃪⃯𝛊ᷨ𝛂⃨ͦꝆ᷽ͭ🍁⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔̶̷̸_*
  ┃🧸❏ ${gp1}

   *⋰∴⋱⋰∴⋱𝕲𝖗𝖚𝖕𝖔 𝖔𝖋𝖎𝖈𝖎𝖆𝖑 𝖉𝖊 𝖑𝖆 𝕭𝖔𝖙✍︎ꨄ*
┃🧸❏ https://chat.whatsapp.com/KM5pJJnApir7TgkCnVIIoS
   
   *❄︎𝕲𝖗𝖚𝖕𝖔𝖘 𝕺𝕱𝕮 𝖉𝖊𝖑 𝖑𝖆 𝕭𝖔𝖙*
┃🧸❏ https://chat.whatsapp.com/KM5pJJnApir7TgkCnVIIoS

   *✎𝕮𝖆𝖓𝖆𝖑 𝖔𝖋𝖎𝖈𝖚𝖆𝖑 𝖉𝖊 𝖑𝖆 𝕭𝖔𝖙*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩ꪶꪾ𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙⋰⋰𝕭𝖞 𝕷𝖔𝖇𝖔ꫂৎ୭࠱࠭ \n` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['⏤𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙࿐', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler
