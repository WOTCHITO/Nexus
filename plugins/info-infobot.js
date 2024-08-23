import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
    await conn.sendMessage(m.chat, { react: { text: '🥀', key: m.key } })
  const info = `

╭━━━━━━･❪ ❁ ❫ ･━━━━━━
│➸ *⏰️𝕬𝖈𝖙𝖎𝖛𝖎𝖉𝖆𝖉 𝖉𝖊𝖑 𝖇𝖔𝖙*
│➸ *${uptime}*
│
│•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•
│
│➸ *🪄𝖁𝖍𝖆𝖙𝖘*
│➸ 𝕮𝖍𝖆𝖙 𝖕𝖗𝖎𝖛𝖆𝖉𝖔: *${chats.length - groups.length}*
│➸ 𝕮𝖍𝖆𝖙 𝖉𝖊 𝖌𝖗𝖚𝖕𝖔𝖘: *${groups.length}* 
│➸ 𝕮𝖍𝖆𝖙 𝖙𝖔𝖙𝖆𝖑𝖊𝖘: *${chats.length}* 
│
│•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•
│
│➸ ✎𝐃𝐫𝐚𝐤𝐨⋰✰𝐁𝐨𝐭💎
╰━━━━━━･❪ ❁ ❫ ･━━━━━━❖`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://chat.whatsapp.com/Jjs2l4X3LdP7RHr06WsasW` },
    mimetype: `application/${document}`,
    fileName: `「 𝐃𝐫𝐚𝐤𝐨-𝐁𝐨𝐭 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
showAdAttribution: !![],
            mediaType: 0x1,
            previewType: "PHOTO",
        title: "𝐒𝐞𝐫𝐦𝐚𝐧𝐚 𝐃𝐫𝐚𝐤𝐨",
        thumbnail: imagen10,
        renderLargerThumbnail: !![],
        sourceUrl: "https://chat.whatsapp.com/Jjs2l4X3LdP7RHr06WsasW",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: fakegif2 });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = ['infobot'];
handler.register = true
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
