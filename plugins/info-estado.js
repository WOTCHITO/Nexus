const handler = async (m, {conn}) => {
  try {
    const pp = imagen10;
    const img = await(await fetch('https://images3.alphacoders.com/125/1251707.png')).buffer();
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    await conn.sendMessage(m.chat, { react: { text: '🤠', key: m.key } })
    const str = `
┏✧ » ◇ « ✧ » ✦ « ✧ » ◇ « ✧
┃⍣ ✎𝕹𝖆𝖐𝖆𝖓𝖔 𝕭𝖔𝖙ꨄ
┃
┃⍣👋🏻𝘏𝘰𝘭𝘢: ${taguser}
┃
┃⍣ *ꨄ︎ ⏳️ 𝕬𝖈𝖙𝖎𝖛𝖆:* ${uptime}
┃⍣ *ꨄ︎ ✅ 𝕭𝖔𝖙 𝖕𝖚𝖇𝖑𝖎𝖈𝖔*
┃⍣ *ꨄ︎ 🦁 𝕺𝖜𝖓𝖊𝖗: 𝕷𝖔𝖇𝖔*
┃⍣ *ꨄ︎ 🔗 𝕮𝖚𝖊𝖓𝖙𝖆𝖘 𝖔𝖋𝖎𝖈𝖎𝖆𝖑𝖊𝖘:* https://chat.whatsapp.com/KM5pJJnApir7TgkCnVIIoS
╰✧ » ◇ « ✧ » ✦ « ✧ » ◇ « ✧`.trim();
        const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://chat.whatsapp.com/KM5pJJnApir7TgkCnVIIoS` },
    mimetype: `application/${document}`,
    fileName: `「 𝕹𝖆𝖐𝖆𝖓𝖔-𝕭𝖔𝖙💞 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
showAdAttribution: !![],
            mediaType: 0x1,
            previewType: "PHOTO",
        title: "𝕳𝖊𝖗𝖒𝖆𝖓𝖆𝖘 𝖓𝖆𝖐𝖆𝖓𝖔",
        thumbnail: imagen10,
        renderLargerThumbnail: !![],
        sourceUrl: "https://chat.whatsapp.com/KM5pJJnApir7TgkCnVIIoS",
      },
    },
    caption: str,
    footer: wm,
    headerType: 6,
  };
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: Message.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://youtube.com/@davidchian4957`, "sourceUrl": `https://youtube.com/@davidchian4957`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": ``, "sourceUrl": `https://youtube.com/@davidchian4957`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.help = ['estado'];
handler.tags = ['main'];
handler.command = ['estado','status','estate','state','stado','stats','runtime','uptime'];
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n│ *=> 💥 ` + d, ' Día(s)* ', `\n│ *=> 💫 ` + h, ' Hora(s)* ', `\n│ *=> 💠 ` + m, ' Minuto(s)* ', `\n│ *=> ♦ ` + s, ' Segundo(s)* '].map((v) => v.toString().padStart(2, 0)).join('');
}
