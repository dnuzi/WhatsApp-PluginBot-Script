<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,18,24&height=220&section=header&text=FREE%20BASE%20DANUZZ&fontSize=52&fontAlignY=38&desc=Plugin%20type%20WhatsApp%20bot%20base&descAlignY=58&animation=fadeIn" width="100%"/>

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=900&color=25D366&center=true&vCenter=true&width=600&lines=QR+%2B+Pairing+Code+login+%F0%9F%94%90;Plugin+system+%E2%80%94+drop+a+file%2C+get+a+command+%F0%9F%A7%A9;Fast%2C+clean+and+beginner+friendly+%E2%9A%A1;Made+with+%E2%9D%A4%EF%B8%8F+by+DanuZz" alt="Typing SVG" /></a>

<br>

![Version](https://img.shields.io/badge/version-v0.0.1-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![Node](https://img.shields.io/badge/node-%E2%89%A522.12-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-ISC-blue?style=for-the-badge)
![Login](https://img.shields.io/badge/login-QR%20%7C%20PAIR-ff69b4?style=for-the-badge)

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

</div>

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🔐 | **QR Login** | Scan in the terminal or in your browser at `/qr` |
| 🔑 | **Pairing Code** | Link with a phone number, no scanning needed |
| 🧩 | **Plugin System** | Every `.js` file in `plugins/` is auto-loaded |
| ☁️ | **MEGA Session** | Optional `SESSION_ID` restore |
| 🛡️ | **Work Modes** | `public`, `private`, `groups`, `inbox` |
| 👀 | **Auto Status** | Optional auto read + react to statuses |
| 🔁 | **Auto Reconnect** | Reconnects safely without duplicating plugins |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 📁 Structure

```
free-base-danuzz/
├── index.js            # connection, login (QR/pair), message handler
├── config.js           # reads config.env / environment variables
├── command.js          # cmd() registry used by plugins
├── config.env.example  # copy to config.env
├── lib/
│   ├── functions.js    # helpers (getBuffer, fetchJson, runtime ...)
│   └── msg.js          # message serializer (sms, downloadMediaMessage)
└── plugins/
    └── ping.js         # example plugin
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🚀 Installation

```bash
git clone https://github.com/YOUR_USERNAME/free-base-danuzz
cd free-base-danuzz
npm install
cp config.env.example config.env
nano config.env      # set OWNER_NUMBER, CONNECT_MODE ...
npm start
```

## 🔐 Login Methods

### 1️⃣ QR Code (default)

```env
CONNECT_MODE=qr
```

1. Run `npm start`
2. Scan the QR shown in the terminal, **or** open `http://localhost:8000/qr`
3. WhatsApp → **Linked Devices** → **Link a Device**

### 2️⃣ Pairing Code

```env
CONNECT_MODE=pair
PAIR_NUMBER=94712345678
```

1. Run `npm start`
2. An 8 character code appears, for example `ABCD-1234`
3. WhatsApp → **Linked Devices** → **Link with phone number instead** → enter the code

> If `PAIR_NUMBER` is empty, the terminal asks for the number.
> The session is saved in `auth_info_baileys/`, so you only log in once.

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## ⚙️ Configuration

| Variable | Default | Description |
|---|---|---|
| `BOT_NAME` | `FREE BASE DANUZZ` | Bot display name |
| `PREFIX` | `.` | Command prefix |
| `OWNER_NUMBER` | – | Owner number(s), comma separated |
| `CONNECT_MODE` | `qr` | `qr` or `pair` |
| `PAIR_NUMBER` | – | Number used for pairing code |
| `SESSION_ID` | – | Optional MEGA session |
| `MODE` | `public` | `public` / `private` / `groups` / `inbox` |
| `AUTO_READ_STATUS` | `false` | Auto view + react to statuses |
| `ALWAYS_OFFLINE` | `false` | Hide online presence |
| `PORT` | `8000` | Web server port |

## 🧩 Creating a Plugin

Create `plugins/hello.js`:

```js
const { cmd } = require('../command');

cmd({
    pattern: "hello",          // .hello
    alias: ["hi"],             // .hi
    desc: "Say hello",
    react: "👋",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname, q, isOwner, isGroup, reply }) => {
    reply(`Hello ${pushname}! 👋`);
});
```

Restart the bot and `.hello` works.

### Available values in the 4th argument

`from` · `quoted` · `body` · `command` · `args` · `q` · `isGroup` · `sender` · `senderNumber` · `botNumber` · `pushname` · `isOwner` · `isMe` · `groupMetadata` · `groupName` · `participants` · `groupAdmins` · `isBotAdmins` · `isAdmins` · `reply`

### Event plugins

```js
cmd({ on: "body" }, async (conn, mek, m, { body, reply }) => {
    if (body === "hi") reply("Hello!");
});
```

Supported: `body`, `text`, `image`, `sticker`.

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## ☁️ Running 24/7 with PM2

```bash
npm run pm2       # start
npm run restart   # restart
npm run stop      # stop
```

## 🛡️ Security Tips

- Never commit `config.env` or `auth_info_baileys/` (already in `.gitignore`).
- Never hardcode session IDs, tokens or database passwords in code.
- If a secret was ever public, rotate it.

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| Pairing code not shown | Check `PAIR_NUMBER` has country code, no `+` |
| QR keeps changing | Normal, scan quickly or use `/qr` |
| Logged out | Session is deleted automatically, restart and link again |
| Plugin not loading | Check the terminal for `Plugin failed:` errors |

<div align="center">

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

**⭐ Star the repo if it helped you!**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,18,24&height=120&section=footer" width="100%"/>

</div>
