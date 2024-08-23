import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `ꨄ ¡𝑯𝒐𝒍𝒂 𝒔𝒐𝒚 𝑫𝒓𝒂𝒌𝒐-𝑩𝒐𝒕, 𝒆𝒏 𝒒𝒖𝒆 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓 𝒉𝒐𝒚?\n\n✰ 𝒖𝒔𝒂 *!𝒎𝒆𝒏𝒖* 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒕𝒐𝒅𝒂𝒔 𝒎𝒊𝒔 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒆𝒔`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so y arroz* 👌🤌`, m, rcanal, )
}*/
/*if (/^sexo$/i.test(m.text)) {
conn.reply(m.chat, `*pervertido* 🫣`, m, rcanal, )
}*/
/*if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*rroz y pollo* 😄👌`, m, rcanal, )
}*/
if (!chat.isBanned && m.text.match(/(te amo|teamo|te amo bot|te amo 𝑫𝒓𝒂𝒌𝒐)/gi)) {
  conn.sendMessage(m.chat, {
 stiker:{ url: global.stickeramor}
}, { quoted: fakegif2});
}

if (/^bug$/i.test(m.text)) {
conn.reply(m.chat, `*tu mamá we* 😹`, m, rcanal, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*comes* 😹`, m, rcanal, )
}
return !0;
};
export default handler;
