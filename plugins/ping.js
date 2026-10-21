const { cmd } = require('../command');

cmd({
    pattern: "ping",
    alias: ["p"],
    desc: "Check bot response speed",
    react: "🏓", 
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const start = Date.now();
    await reply("Pong!");
    await reply(`⚡ Speed: ${Date.now() - start}ms`);
});
