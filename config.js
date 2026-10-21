const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

const bool = (v, def = 'false') => String(v ?? def).toLowerCase() === 'true';

module.exports = {
    // ── Bot identity ──────────────────────────────────────────
    BOT_NAME: process.env.BOT_NAME || 'FREE BASE DANUZZ',
    PREFIX: process.env.PREFIX || '.',
    OWNER_NUMBER: (process.env.OWNER_NUMBER || '94000000000').split(',').map(n => n.trim()),

    // ── Login ─────────────────────────────────────────────────
    // "qr"   → scan QR (terminal + web page at /qr)
    // "pair" → pairing code (needs PAIR_NUMBER, or you will be asked in terminal)
    CONNECT_MODE: (process.env.CONNECT_MODE || 'qr').toLowerCase(),
    PAIR_NUMBER: process.env.PAIR_NUMBER || '',      // e.g. 94712345678
    SESSION_ID: process.env.SESSION_ID || '',        // optional MEGA session (file id#key)

    // ── Behaviour ─────────────────────────────────────────────
    MODE: process.env.MODE || 'public',              // public | private | groups | inbox
    AUTO_READ_STATUS: bool(process.env.AUTO_READ_STATUS, 'false'),
    ALWAYS_OFFLINE: bool(process.env.ALWAYS_OFFLINE, 'false'),

    CONNECTED_IMAGE: process.env.CONNECTED_IMAGE || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0NS6vBULeyWdIIkNtPW71TDdQUiuFcRxSdS5MBlpKQ&s=10',   // optional image URL for the connected message
    TIMEZONE: process.env.TIMEZONE || 'Asia/Colombo',

    // ── Server ────────────────────────────────────────────────
    PORT: process.env.PORT || 8000,
};
