let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ANOTENSE MANCOS CULIAOS🔥 ${pesan}`
let teks = `╭┈┈ ๑👻๑ •• ${oi} ๑👻๑ ••:\n`
for (let mem of participants) {
teks += ``}
teks += `ㅤ
│
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│       
│      ෆ 𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥𐐫:
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│      ෆ 𝘔𝘰𝘥𝘢𝘭𝘪𝘥𝘢𝘥:
│         ‧₊⌗ 10 🇲🇽 ⌇ 11 🇨🇴     
│
│ㅤㅤʚ 𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘦𝘴:
│ㅤ🥷🏻• 
│ㅤ🥷🏻• 
│ㅤ🥷🏻• 
│ㅤ🥷🏻•
│   ㅤㅤ
│ㅤㅤʚ 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:
│ㅤ🥷🏻•
│ㅤ🥷🏻•
│
│   ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳 𝘥𝘦 𝘴𝘢𝘭𝘢: 
│
╰───────────────`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsm23 <mesaje>','masc23 <mesaje>']
handler.tags = ['group']
handler.command = /^(masc10)$/i
handler.admin = true
handler.group = true
export default handler
