const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🙈",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
👋 Hi*: ${pushname}

⏳ Uptime*: ${runtime(process.uptime())}

📟 RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB

ᬐ༂᳆╭𝐇𝐄𝐋𝐋𝐎 𝐈𝐌 𝐐𝐔𝐄𝐄𝐍 𝐁𝐔𝐍𝐍𝐘 𝐌𝐃 𝐕-2 𝐖𝐇𝐀𝐓𝐒𝐀𝐏 𝐁𝐎𝐓╮༂ᬐ

📍 ┗┉𝐂𝐀𝐑𝐑𝐄𝐂𝐓 𝐁𝐘=𝐌𝐀𝐍𝐔𝐒𝐇𝐀 𝐋𝐀𝐒𝐈𝐓𝐇┉┛🌹⃝✥⃟☺️᭄ꦿ

📍 ┝𝐅𝐎𝐋𝐋𝐎𝐖 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐂𝐇𝐀𝐍𝐄𝐋 https://whatsapp.com/channel/0029VbAXsYXIiRozOhimJZ0Z  ┦ 😮⃝৫⃟➤᭄᭄̊̊̊̊࿓࿔😓

📍 ┏𝐎𝐖𝐍𝐄𝐑┒=94773742779
📍╭𝐏𝐎𝐁𝐋𝐄𝐌 𝐇𝐄𝐋𝐏╮ = 94710808299

▛𝐍𝐄𝐖 𝐔𝐏𝐃𝐀𝐓𝐄 𝐂𝐎𝐌𝐈𝐍𝐆𝐒𝐎𝐎𝐍▜🦋⃝❉⃟࿔ꦿ


📍 *🦋⃝❉⃟࿔ꦿ𝐕𝐎𝐈𝐂𝐄=𝐒𝐀𝐃𝐔 𝐆𝐑𝐈𝐋⃝✤⃝ꦿ⃝✥᭄ꦿ࿔⃝༒⃝❤️᭄* 
         *𝐇𝐄𝐋𝐏= 𝐃𝐓𝐙 𝐓𝐄𝐀𝐌* 📍


📍 *🌹⃝✥⃟☺️᭄ꦿ🦋⃝❉⃟ ____𝐁____𝐔____𝐍___𝐍____𝐘
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/5hd2zv.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363385281017920@newsletter',
                    newsletterName: '𝙱𝚄𝙽𝙽𝚈-𝙼𝙳',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
