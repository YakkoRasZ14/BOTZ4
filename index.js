/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FRREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 


// BTW SEBAGIAN FITUR PERLU API lolhuman & xteam
// JADI BELI SENDIRI XIXIXI
// MAU AMBIL CASE CARI SINI YA???
// SILAHKAN BRO:)
// MHWHEHE GK ADA YG LANGKA OM

// BOSAN?? PUKULIN AJA ANAK YATIM
// MAU NGADU AMA SIAPA? ORANG TUANYA??

// CAPEK CAPEKK BIKIN CASE EHHH MALAH DIRECODEðŸ—¿

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
/*  
    THANKS FOR CREDIT api-self [ benny ]

    SPESIAL THX REST API :
âž» lolhuman
âž» onlydev
âž» lindow
âž» xteam
âž» rull
âž» xinzbot
âž» anu-team
âž» alpin
âž» some-random-api
âž» zeks
âž» videfikri
âž» jojo
   
     
     
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')  
const { exec, spawn, execSync } = require("child_process") 
const fetch = require('node-fetch')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const imgbb = require('imgbb-uploader')
const { nyz } = require('./reply')

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	   
 
const { removeBackgroundFromImageFile } = require('remove.bg')
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
apikey = nayz.apikey
prefix = setting.prefix
blocked = []
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz
tz = setting.tz 
cr1 = setting.cr1
cr2 = setting.cr2
numberbot = setting.numberbot
apivhtear = setting.apivhtear
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
naylachan = setting.naylachan
namebot = setting.namebot
ownername = setting.ownername
donasi = setting.donasi
l0lhuman = setting.l0lhuman
pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo
dana = setting.dana
welcome1 = setting.welcome1
welcome2 = setting.welcome2

// NOTE MAU UBAH??? SILAHKAN UBAH DI SRC + SETTINGS.JSON
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const antilink = JSON.parse(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./nayla/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./nayla/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./nayla/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))
const botx = JSON.parse(fs.readFileSync('./nayla/botx.json')) 

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	 
            async function starts() {
        	const nayla = new WAConnection()
	        nayla.logger.level = 'warn'
	        console.log(banner.string)
        	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Connecting...')
        	})
	        nayla.on('open', () => {
	    	success('2', 'Connected')
         	})
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
        	})
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
            nayla.on('group-participants-update', async (anu) => {
	    	if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    try {
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		    }
			teks = welcome1
			let buff = await getBuffer(ppimg)
		    nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
			ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = welcome2
			let buff = await getBuffer(ppimg)
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })
	        const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
            const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = nayBulan[moment().format('MM') - 1]
             
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	                 
	        
	        nayla.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.prefix
			global.blocked		
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	const nay1 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": fake1} } } 
			const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false
			const isPrem = prem.includes(sender) || isOwner	
			const isBotx = isGroup ? botx.includes(from) : false
			pushname = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined									            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR ${command} TIDAK TERDAFTAR DIDALAM MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: nay1})
			}
			const nayz = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}					 
            const buruh1 = ['ðŸ³','ðŸ¦ˆ','ðŸ¬','ðŸ‹','ðŸŸ','ðŸ ','ðŸ¦','ðŸ¦‘','ðŸ¦€','ðŸš']
            const buruh2 = ['ðŸ”','ðŸ¦ƒ','ðŸ¿','ðŸ','ðŸ','ðŸ–','ðŸ‘','ðŸŽ','ðŸº','ðŸ¦©']
            const buruh3 = ['ðŸ¦‹','ðŸ•·','ðŸ','ðŸ‰','ðŸ¦†','ðŸ¦…','ðŸ•Š','ðŸ§','ðŸ¦','ðŸ¦‡']
            const slot1 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’']
            const slot2 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’'] 
            const slot3 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’'] 
            const slot4 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’'] 
            const slot5 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’']
            const slot6 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’'] 
            const slot7 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’']
            const slot8 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’']   
            const slot9 = ['ðŸ‹','ðŸ','ðŸ“','ðŸ‡','ðŸ’']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: YakkoXCode BOT;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: YakkoXCode\n` 
            + `ORG: YakkoXCode;\n`
            + `TEL;type=CELL;type=VOICE;waid=6283803284713:+62 838-0328-4713\n`
            + 'END:VCARD' 
            colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mBOTZ3\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mBOTZ3\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mBOTZ3\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mBOTZ3\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'in', color(groupName), 'args :', color(args.length))
			switch (command) {
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
			        			       			        
			        			         			         
                  	case 'help':
			    	case 'menu':
                    runtime = process.uptime()
                    reply(nyz.menuZ(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    const SS1 = fs.readFileSync('sound/chann.mp3')
                    nayla.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    break
                    case 'fastmenu':
                    reply(nyz.fastmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'makerfoto':
                    reply(nyz.makerfoto(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'ownermenu':
                    reply(nyz.ownermenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'sertifikat':
                    reply(nyz.sertifikat(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'randomtext':
                    reply(nyz.randomtext(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'gamemenu':
                    reply(nyz.gamemenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'tagmenu':
                    reply(nyz.tagmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'cekmenu':
                    reply(nyz.cekmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'internalmenu':
                    reply(nyz.internalmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'pornmenuuu':
                    reply(nyz.pornmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'soundmenu':
                    reply(nyz.soundmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'downloadmenu':
                    reply(nyz.downloadmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'promenu':
                    reply(nyz.promenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'animemenu':
                    reply(nyz.animemenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'nsfwmenu':
                    reply(nyz.nsfwmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'makermenu':
                    reply(nyz.makermenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'grupmenu':                     	                       
                    reply(nyz.grupmenu(prefix, bulan, tchat, ownername, tz, author, namebot, apikey))                                    
                    break
                    case 'donasi':
                    donasi1 = `[ *${donasi}* ]\n`
                    donasi1 += `âž» *PULSA* : ${pulsa}\n`
                    donasi1 += `âž» *GOPAY* : ${gopay}\n`
                    donasi1 += `âž» *OVO* : ${ovo}\n`
                    donasi1 += `âž» *DANA* : ${dana}\n`
                    reply(donasi1)
                    break
		            case 'play':
					if (args.length < 1) return reply(`Contoh : ${prefix}play DJ 30 detik`)	
					reply(naylachan) 				 
					anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `*LAGU TELAH DITEMUKAN*\n`
                    anu1 += `âž¸ *JUDUL* : ${anu.judul}\n`
                    anu1 += `âž¸ *SIZE* : ${anu.size}\n`
                    anu1 += `âž¸ *SOURCE* : ${anu.source}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
				    nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay1 })
					break
				    case 'ytmp3':					 
					if (args.length < 1) return reply('Link Nya Mana Kak')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Nya Tidak Valid Kak')
					reply(naylachan) 
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `YTMP3 TELAH DITEMUKAN\n`
                    anu1 += `âž» *JUDUL* : ${anu.judul}\n`
                    anu1 += `âž» *SIZE* : ${anu.size}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay1 })
					break
				    case 'ytmp4':				 
					if (args.length < 1) return reply('Link Nya Mana Kak')
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Nya Tidak Valid Kak')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=${apixteam}`)
					reply(naylachan) 
					anu1 = `YTMP4 TELAH DITERMUKAN\n`
                    anu1 += `âž» *JUDUL* : ${anu.judul}\n`
                    anu1 += `âž» *SIZE* : ${anu.size}\n`                    
					anu2 = await getBuffer(anu.thumbnail)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu3, video, { mimetype: 'video/mp4', quoted: nay1 })
					break                    
                    case 'stalktwit':
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(naylachan) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `âž» *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `âž» *USER* : ${anu.result.username}\n`
                    anu2 += `âž» *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `âž» *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `âž» *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `âž» *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `âž» *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `âž» *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `âž» *JOIN* : ${anu.result.joined_on}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
                    case 'stalkgithub':
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `âž» *NAMA* : ${anu.result.username}\n`
                    anu2 += `âž» *ID* : ${anu.result.id}\n`
                    anu2 += `âž» *USER* : ${anu.result.fullname}\n`
                    anu2 += `âž» *COMPANY* : ${anu.result.company}\n`
                    anu2 += `âž» *BLOG* : ${anu.result.blog}\n`
                    anu2 += `âž» *LOCATION* : ${anu.result.location}\n`
                    anu2 += `âž» *EMAIL* : ${anu.result.email}\n`
                    anu2 += `âž» *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `âž» *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `âž» *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `âž» *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `âž» *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `âž» *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `âž» *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `âž» *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `âž» *URL* : ${anu.result.profile_url}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
                    case 'steam':
                    if (args.length < 1) return reply('MASUKKAN JUDUL') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `âž» *NAMA* : ${anu.result.name}\n`
                    anu1 += `âž» *USER* : ${anu.result.username}\n`
                    anu1 += `âž» *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `âž» *IMG* : ${anu.result.image}\n`
                    anu1 += `âž» *LEVEL* : ${anu.result.level}\n`
                    anu1 += `âž» *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `âž» *BADGES* : ${anu.result.badges}\n`
                    anu1 += `âž» *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `âž» *ON* : ${anu.result.onkah}\n`
                    nayla.sendMessage(from, anu1, text,{quoted: nay1})
                    break 
                    case 'fb':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `âž» *JUDUL* : ${anu.result.judul}\n`
                    nayla.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: nay1})
                    break 
                    case 'igfoto':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `âž» *NAME* : ${anu.result.full_name}\n`
                    anu2 += `âž» *USER* : ${anu.result.username}\n`
                    anu2 += `âž» *LIKE* : ${anu.result.like}\n`
                    anu2 += `âž» *COMENT* : ${anu.result.comment}\n`
                    anu2 += `âž» *DURASI* : ${anu.result.duration}\n`
                    anu2 += `âž» *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `âž» *[â—] FOTO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.image_text)
                    nayla.sendMessage(from, anu3, image, {quoted: nay1})
                    break
                    case 'igvideo':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `âž» *NAME* : ${anu.result.full_name}\n`
                    anu2 += `âž» *USER* : ${anu.result.username}\n`
                    anu2 += `âž» *LIKE* : ${anu.result.like}\n`
                    anu2 += `âž» *COMENT* : ${anu.result.comment}\n`
                    anu2 += `âž» *DURASI* : ${anu.result.duration}\n`
                    anu2 += `âž» *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `âž» *[â—] VIDEO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.video)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay1})
                    break                          
                    case 'ytsearch':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.data.thumbnail)
                    anu2 = `âž» *NAME* : ${anu.result.data.judul}\n`
                    anu2 += `âž» *ID* : ${anu.result.data.id}\n`                    
                    anu2 += `âž» *DURASI* : ${anu.result.data.duration}\n`
                    anu2 += `âž» *CHANEL* : ${anu.result.data.id}\n`
                    anu2 += `âž» *PUBLIC.AT* : ${anu.result.data.published_at}\n`
                    anu2 += `âž» *VIEWS* : ${anu.result.data.views}\n`
                    anu2 += `âž» *DESK* : ${anu.result.data.description}\n`  
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                    break    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
                    case 'hurufkebalik':
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break    
                    case 'jumlah':
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break       
                    case 'hilih':
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ RANDOM CEK ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜Ž`
                    reply(N)
                    break 
                    case 'cantikcek':
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}% ðŸ˜*`
                    reply(N)
                    break
                    case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ¤¢`
                    reply(N)
                    break 
                    case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ¤£`
                    reply(N)
                    break 
                    case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜‚`
                    reply(N)
                    break 
                    case 'pintercek': 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜—`
                    reply(N)
                    break 
                    case 'jagocek': 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ’ª`
                    reply(N)
                    break 
                    case 'nolepcek': 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ§`
                    reply(N)
                    break 
                    case 'babicek': 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ¤ª`
                    reply(N)
                    break 
                    case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ¤¬`
                    reply(N)
                    break 
                    case 'baikcek': 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜‡`
                    reply(N)
                    break 
                    case 'jahatcek': 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜ˆ`
                    reply(N)
                    break 
                    case 'anjingcek': 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ‘€`
                    reply(N)
                    break                      
                    case 'haramcek':
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ¥´`
                    reply(N)
                    break  
                    case 'kontolcek': 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ™‚`
                    reply(N)
                    break 
                    case 'pakboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜`
                    reply(N)
                    break 
                    case 'pakgirlcek':	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜`
                    reply(N)
                    break             
                    case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ¤¤`
                    reply(N)
                    break
                    case 'bapercek':
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜˜`
                    reply(N)
                    break                   
                    case 'pacarsayacek':
                    N = `PACAR *SAYA*\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜˜`
                    reply(N)
                    break                   
                    case 'wibucek':
                    N = `JIWA *WIBU* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* ðŸ˜˜`
                    reply(N)
                    break                   
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
                    case 'spamemail':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN EMAIL&NOMER&PESAN') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
                    case 'spamcall':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply('MASUKKAN NOMER') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        
                    case 'quotes':
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `âž» *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `âž» *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    case 'fakta': 
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `âž» *FAKTA* : ${anu.result.fakta}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                  
                    case 'gcard':
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `âž» *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `âž» *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `âž» *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `âž» *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `âž» *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `âž» *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `âž» *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `âž» *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `âž» *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `âž» *COUNTRY* : ${anu.result.customer.country}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                                                                                                                                                                                                                                                        
                    case 'tebakgambar':
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `âž» *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, image,{caption: 'JAWAB BRO... WAKTU 60 DETIK', quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           

/* ======================================================[ ANIME-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                    case 'neko':
                    reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/anime/neko`)
                    anu1 = await getBuffer(anu.result.url_gbr)
                    nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                    break
                    case 'quotesnime':
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `âž» *ANIME* : ${anu.result.anime}\n`
                    anu1 += `âž» *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `âž» *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    
/* ======================================================[ ANJAY-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                   case 'lazimedia':
                   if (args.length < 1) return reply('MASUKKAN NAMA PRODUK')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
                   case 'covid':
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `âž» *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `âž» *KOTA* : ${x.region}\n`
                   anu1 += `âž» *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `âž» *ALAMAT* : ${x.address}\n`
                   anu1 += `âž» *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
                   case 'wikiid':
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `âž» *JUDUL* : ${x.judul}\n`
                   anu1 += `âž» *PAGEID* : ${x.pageid}\n`
                   anu1 += `âž» *ULASAN* : ${x.isi_konten}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break  
                   case 'wikien':
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `âž» *JUDUL* : ${x.title}\n`
                   anu1 += `âž» *PAGEID* : ${x.pageid}\n`
                   anu1 += `âž» *ULASAN* : ${x.desc}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break   
                   case 'covidid':
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `âž» *NEGARA* : ${anu.result.country}\n`
                   anu1 += `âž» *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `âž» *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `âž» *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `âž» *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
                   case 'kbbi':
                   if (args.length < 1) return reply('MASUKKAN QUERY')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `âž» *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
                   case 'infogempa':                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `âž» *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `âž» *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `âž» *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `âž» *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `âž» *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `âž» *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `âž» *MAP* : ${anu.result.map}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break
                   case 'randomquran':
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `âž» *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `âž» *NAMA* : ${anu.result.nama}\n`
                   anu1 += `âž» *ASMA* : ${anu.result.asma}\n`
                   anu1 += `âž» *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `âž» *NAME* : ${anu.result.name}\n`
                   anu1 += `âž» *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `âž» *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `âž» *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `âž» *ARTI* : ${anu.result.arti}\n`
                   anu1 += `âž» *KETERANGAN* : ${anu.result.keterangan}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break                    
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case '8bit':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} kamu&aku*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'google':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} kamu & aku & dia*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break 
                   case 'fire':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break 
                   case 'burn':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break 
                   case 'battle':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break 
                   case 'mug':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break 
                    case 'love':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                   break 
                   case 'mug1':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                   break 
                   case 'naruto':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                   break 
                   case 'glass':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                   break 
                   case 'romance':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                   break 
                   case 'shadow':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break 
                   case 'tiktok':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'coffe':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break  
                   case 'coffe1':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'neon':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break  
                   case 'pubg':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'water':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break 
                   case 'silk':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'potter':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'candy':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break                     
                   case 'block':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                    
                   
  
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    case 'artinama':
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `âž» *ARTI* : ${anu.result.arti}\n`
                    anu1 += `âž» *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
                    case 'artimimpi':
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `âž» *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
                    case 'artijadian':
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `âž» *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
                    case 'chord':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `âž» *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
                    case 'lirik':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `âž» *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `âž» *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API   ............... ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                
/* ==================================================[ GK TAU v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   case 'randomwaifu':
                   reply(naylachan) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu`)
                   anu1 = await getBuffer(anu.image)
                   anu2 = `âž» *NAMA* : ${anu.name}\n`
                   anu2 += `âž» *DESC* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})	                
                   break
                   case 'randomwaifu1':
                   reply(naylachan)  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
                   anu1 = await getBuffer(anu.img)                    
                   nayla.sendMessage(from, anu1, image, {quoted: nay1})
                   break
                   case 'neko1':
                   reply(naylachan) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kack`, quoted: nay1})
                   break
                   case 'kusonime':
                   reply(naylachan) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `âž» *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
                   case 'renungan': 
                   reply(naylachan) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `âž» *JUDUL* : ${anu.judul}\n`
                   anu1 += `âž» *PESAN* : ${anu.pesan}\n`
                   anu1 += `âž» *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
                   case 'samehadaku':
                   reply(naylachan)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `âž» *JUDUL* : ${anu.title}\n`
                   anu1 += `âž» *LINK* : ${anu.link}\n`
                   anu1 += `âž» *DESK* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay })
                   break
                   case 'neon1':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break  
                   case 'text3d':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break                   
                   case 'galaxy':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'gaming':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'colors':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'kling':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1})
                   break
                   case 'infonomer':
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `âž» *NOMER* : ${anu.nomor}\n`
                   anu1 += `âž» *JUDUL* : ${anu.op}\n`
                   anu1 += `âž» *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
                   case 'jadwaltv':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `âž» *JAM* : ${anu.result.jam}\n`
                   anu1 += `âž» *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
                   case 'tvjadwal':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `âž» *JAM* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'fml': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `âž» *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
                   case 'cinta': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `âž» *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
                   case 'twich': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `âž» *THWICH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'loli':
                   reply(naylachan)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'randomhusbu':
                   reply(naylachan)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
                   anu1 = `âž» *NAMA* : ${anu.waifu}`
                   anu2 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay1})                  
                   break
                   case 'fake':
		            if (!isPrem) return reply(nyz.prem1(command))
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `âž» *NAMA* : ${anu.name}\n`
                   anu1 += `âž» *GENDER* : ${anu.gender}\n` 
                   anu1 += `âž» *AGE* : ${anu.age}\n`
                   anu1 += `âž» *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `âž» *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `âž» *ADDRESA* : ${anu.address}\n`
                   anu1 += `âž» *CODE* : ${anu.zip_code}\n`
                   anu1 += `âž» *STATE* : ${anu.state}\n`
                   anu1 += `âž» *COUNTRY* : ${anu.country}\n`
                   anu1 += `âž» *EMAIL* : ${anu.email}\n`
                   anu1 += `âž» *PASS* : ${anu.password}\n` 
                   anu1 += `âž» *PHONE* : ${anu.phone}\n` 
                   anu1 += `âž» *CARD* : ${anu.card}\n`
                   anu1 += `âž» *CODE* : ${anu.code}\n`
                   anu1 += `âž» *DATE* : ${anu.date}\n`
                   anu1 += `âž» *PIN* : ${anu.pin_code}\n`
                   anu1 += `âž» *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `âž» *HEIGHT* : ${anu.height}\n` 
                   anu1 += `âž» *TYPE* : ${anu.blood_type}\n`
                   anu1 += `âž» *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
                   case 'pin':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} https://link*`)
                   reply(naylachan)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'qrcode':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'resepmasakan':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `âž» *NAMA* : ${anu.title}\n`
                   anu2 += `âž» *STATUS* : ${anu.langkah}\n`
                   anu2 += `âž» *BAHAN* : ${anu.bahan}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
                   case 'barcode':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'cersex':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `âž» *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `âž» *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
                   case 'cerpen':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `âž» *JUDUL* : ${anu.result.title}\n`
                   anu1 += `âž» *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `âž» *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `âž» *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break
                   case 'anime':
                   reply(naylachan)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_baguette`)
                   nayla.sendMessage(from, anu, image, {quoted: nay1})
                   break
                   case 'anime1':
                   reply(naylachan)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_dva`)
                   nayla.sendMessage(from, anu, image, {quoted: nay1})
                   break
                   case 'yuri':
                   reply(naylachan)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_yuri`)
                   nayla.sendMessage(from, anu, image, {quoted: nay1})
                   break
                   case 'tongue':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `âž» *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'jadwalsholat':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `âž» *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `âž» *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `âž» *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `âž» *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `âž» *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `âž» *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `âž» *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
                   case 'pantun':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `âž» *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
                   case 'cuaca': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `âž» *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `âž» *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `âž» *DESK* : ${anu.result.desk}\n` 
                   anu1 += `âž» *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `âž» *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `âž» *UDARA* : ${anu.result.udara}\n`
                   anu1 += `âž» *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
                   case 'namaninja':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `âž» *NAMA* : ${anu.your_name}\n`
                   anu1 += `âž» *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
                   
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
                   case 'stalkig':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `âž» *NAMA* : ${anu.username}\n`
                   anu2 += `âž» *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `âž» *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `âž» *FOLLOWING* : ${anu.following}\n`
                   anu2 += `âž» *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `âž» *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `âž» *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `âž» *BIO* : ${anu.bio}\n`
                   anu2 += `âž» *SOURCE* : ${anu.source}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
                   case 'quran':
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `âž» *ASMA* : ${anu.result.asma}\n`
                   anu1 += `âž» *ARTI* : ${anu.result.arti}\n`
                   anu1 += `âž» *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `âž» *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `âž» *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `âž» *TYPE* : ${anu.result.type}\n`
                   anu1 += `âž» *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `âž» *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
                   case 'estetikpic':
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'memeindo':
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'darkjokes':
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'nickff':
		            if (!isPrem) return reply(nyz.prem1(command))
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `âž» *NIHH* : ${anu.result}\n`
                   anu1 += `âž» *NIHH* : ${anu.result}\n`
                   anu1 += `âž» *NIHH* : ${anu.result}\n`
                   anu1 += `âž» *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'neon2':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break                    
                   case 'wall':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break   
                   case 'wolf':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=YakkoXCodebotz&text2=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break 
                   case 'tfire':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break                
                   case 'ytgold':
		            if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(8)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'ytsilver':
		            if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(10)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 't3d':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(5)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'logoa':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'pornhub':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'marvel':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'leavest':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break                    
                   case 'phcoment':
		            if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'nulis':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'shortener':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(naylachan)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `âž» *SHORT* : ${anu.short}\n`
                   anu1 += `âž» *LONG* : ${anu.long}\n`
                   anu1 += `âž» *DATE* : ${anu.created_at.date}\n`
                   anu1 += `âž» *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `âž» *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort':
		            if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(naylachan)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `âž» *SATU* : ${anu.result_1}\n`
                   anu1 += `âž» *DUA* : ${anu.result_2}\n`
                   anu1 += `âž» *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   case 'fox':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
                   case 'dog':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
                   case 'cat':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
                   case 'panda':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
                   case 'panda1':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
                   case 'bird':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
                   case 'koala':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
                   case 'meme':
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: nay1})
                   break
                   
              
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                              
                   case 'indo1':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'indo2':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'indo3':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'indo4':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'indo5':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'indo6':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'indo7':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'indo8':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'indo9':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
				   case 'indo10':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'indo11':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'indo12':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'indo13':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'indo14':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'indo15':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'indo16':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'indo17':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'indo18':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'indo19':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'indo20':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'indo21':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'indo22':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'indo23':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'indo24':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
				   case 'indo25':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok': case 'bego': case 'pinter': case 'jago': case 'nolep': 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'monyet': case 'haram': 
                   case 'kontol': case 'pakboy': case 'pakgirl':	case 'sadboy': case 'sadgirl': case 'wibu': case 'hebat':
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
				   case 'kapankah':
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
		           case 'apakah':
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break
				   case 'slot':    				    				    
				   slot = `â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•\n`
				   slot += `â•‘â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€[ *SLOT* ]â”€â”€â”€\n`
				   slot += `â•‘â”‚âž» ${slot11} â•‘ ${slot22} â•‘ ${slot33}\n`
				   slot += `â•‘â”‚âž» ${slot44} â•‘ ${slot55} â•‘ ${slot66} <====\n`
				   slot += `â•‘â”‚âž» ${slot77} â•‘ ${slot88} â•‘ ${slot99}	\n`			  				    
				   slot += `â•‘â”‚âž» GAME : SLOT [ *NEW* ] <==>\n`
				   slot += `â•‘â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€\n`
				   slot += `â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•\n`
				   nayla.sendMessage(from, slot, text, {quoted: nay})
				   break				  
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                                                                                                                                                                                                                                                                                                                                                          
                   case 'wallteknologi': case 'walteknologi':
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/teknologi?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'wallpegunungan': case 'walpegunungan':
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/pegunungan?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'wallmuslim': case 'walmuslim':
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/muslim?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'wallcyber': case 'walcyber':
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/cyberspace?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'wallhacker': case 'walhacker':
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/programming?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'quotes1':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/randomquote/muslim?apikey=alpin1`)
                   anu1 = `âž» *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'quotes2':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/quotes/kanye?apikey=alpin1`)
                   anu1 = `âž» *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'wallpaper': case 'walpaper':
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/random/wallpaper?apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'imo': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(5)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/lmo?text=${F}&theme=bintang&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'scary': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=scary-njir&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'metal': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=metal-epek&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'metal1': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=metal-wolf&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'daun': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=daun-kaki&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case '3dwhite': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(9)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/neon9?text=${F}&theme=3dwhite&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'robot': 
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/maker/special/transformer?text=${F}&apikey=alpin11`)
                   anu1 = await getBuffer(anu.result.results)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'caklontong':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/kuis/caklontong?apikey=alpin1`)                 
                   anu1 = `âž» *SOAL* : ${anu.result.soal}\nJAWAB CUYY WAKTU 60 DETIK`
                   anu2 = `âž» *JAWABAN* : ${anu.result.jawaban}\n`
                   anu2 += `âž» *DESK* : ${anu.result.deskripsi}`
                   setTimeout( () => {
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   }, 1)
                   setTimeout( () => {
                   costum('50 DETIK LAGI', text, tescuk, cr)
                   }, 10000)                                                                                                                                   
                   setTimeout( () => {
                   costum('40 DETIK LAGI', text, tescuk, cr)
                   }, 20000)    
                   setTimeout( () => {
                   costum('30 DETIK LAGI', text, tescuk, cr)
                   }, 30000)    
                   setTimeout( () => {
                   costum('20 DETIK LAGI', text, tescuk, cr)
                   }, 40000)                                       
                   setTimeout( () => {
                   costum('10 DETIK LAGI', text, tescuk, cr)
                   }, 50000)                                                                                                                                                     
                   setTimeout( () => {
                   nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                   }, 60000)                                                                          
                   break               
                                                                                                                                                        
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   
                   case 'ssweb':
		            if (!isPrem) return reply(nyz.prem1(command))
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} https://google.com*`)                  
                   reply(naylachan)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay1})
                   break
                   case 'smoke':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break 
                   case 'rainbow':
                   if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
                    case 'toimg': 
					reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'nihh kack'})
				    fs.unlinkSync(ran)
					})					
			    	break 
                    case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'chatlist':
		         	case 'cekchat':
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `ALL CHAT BOTZ`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	                case 'addsticker':          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay1})
      				break
		        	case 'addvn':
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
		         	case 'getvn':
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
			        case 'getsticker':
		        	case 'gets':
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
		        	case 'listvn':
	         		case 'vnlist':
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		        	case 'addimage':
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
		        	case 'getimage':
                    case 'getimg':
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		        	case 'imagelist':
		        	case 'listimage':
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
		        	case 'addvideo':
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
			        case 'getvideo':
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
		           	case 'listvideo':
	           		case 'videolist':
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
                    case 'setprefix':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
					case 'setreply':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    naylachan = body.slice(10)
                    reply(`Change reply To ${naylachan} SUCCESS!`)					 
					break 
					case 'setpp':
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Sukses')
			        break 
			        case 'setthum':
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef1.png', delb)
		            reply('Sukses')
			        break 
					case 'setwelcome':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome1 = body.slice(12)
                    reply(`Change welcome To ${welcome1} SUCCESS!`)					 
					break
					case 'setout':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome2 = body.slice(8)
                    reply(`Change out To ${welcome2} SUCCESS!`)					 
					break  
					case 'settz':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    tz = args[0]
                    reply(`Change tz To ${tz} SUCCESS!`)					 
					break 
                    case 'admin':
         	        case 'owner':
         	        case 'creator':
                    nayla.sendMessage(from, {displayname: "YakkoXCode", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'TUHH NOMER OWNER KU [(>_<)] OPEN JASA PEMBUATAN BOT JUGA KOK :V',MessageType.text, { quoted: nay} )				
					break  
					case 'other':
         	        case 'author':         	       
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vnayla}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'TUHH NOMER AUTHOR KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: nay} )				
					break    
                    case 'sticker':
				    case 'stiker':
				    case 'stickergif':
				    case 'stikergif':
				    case 'sgif':
				    case 's':					 
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(naylachan)
					})
					.on('end', function () {
					console.log('Finish')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(naylachan)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('Finish')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
                    case 'bc': 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `â® ð™‹ð™€ð™Žð˜¼?? ð˜½??ð™Šð˜¼ð˜¿ð˜¾ð˜¼ð™Žð™ â¯\n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*ã€Œ BROADCAST BOT ã€*\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
					case 'clearall':
					if (!isOwner) return reply(`lu owner??`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break					 
                    case 'linkgc':
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
				    case 'tagall': 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `âžª @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				    case 'delete':
				    case 'del':
				    case 'd':
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
				    case 'kick':
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeeeðŸƒ :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
					nayla.groupRemove(from, mentioned)
					}					
					break 
					case 'hidetag':              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(9)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					break
			    	case 'add':
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nayla.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}  
					break 
				     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                                    
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                    case 'bug':
                    if (args.length < 1) return reply(`contoh ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
                   reply('REPORT BUG TELAH TERSAMPAIKAN. TERIMAKASIH TELAH MELAPORKAN FITUR')                     
					break   
					case 'chat':
                    if (args.length < 1) return reply(`contoh ${prefix}chat halo min apa kabar`)
                    const cet1 = body.slice(6)
                    if (cet1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ CHAT PENGGUNA ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    // INI SILAHKAN UBAH DI SETTINGS 
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*ADA YANG CHAT NIHH*`} } } })                                    
                    reply(`PESAN ANDA SUDAH MASUK`)
                    break
                    case 'asupan':
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${apixteam}`)
                    anu1 = `âž» *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 = `âž» *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `âž» *ID* : ${anu.result.profile_id}\n`
                    anu1 += `âž» *BIO* : ${anu.result.biography}\n`
                    anu1 += `âž» *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `âž» *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `âž» *URL* : ${anu.result.external_url}\n`
                    anu1 += `âž» *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `âž» *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `âž» *TYPE* : ${anu.result.type}\n`
                    anu1 += `âž» *COMENT* : ${anu.result.comment}\n`
                    anu1 += `âž» *LIKE* : ${anu.result.like}\n`
                    anu1 += `âž» *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `âž» *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
                    break
                    case 'asupan1':
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `âž» *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `âž» *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `âž» *ID* : ${anu.result.profile_id}\n`
                    anu1 += `âž» *BIO* : ${anu.result.biography}\n`
                    anu1 += `âž» *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `âž» *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `âž» *URL* : ${anu.result.external_url}\n`
                    anu1 += `âž» *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `âž» *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `âž» *TYPE* : ${anu.result.type}\n`
                    anu1 += `âž» *COMENT* : ${anu.result.comment}\n`
                    anu1 += `âž» *LIKE* : ${anu.result.like}\n`
                    anu1 += `âž» *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `âž» *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'asupan2':
		            if (!isPrem) return reply(nyz.prem1(command))
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `âž» *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `âž» *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `âž» *ID* : ${anu.result.profile_id}\n`
                    anu1 += `âž» *BIO* : ${anu.result.biography}\n`
                    anu1 += `âž» *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `âž» *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `âž» *URL* : ${anu.result.external_url}\n`
                    anu1 += `âž» *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `âž» *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `âž» *TYPE* : ${anu.result.type}\n`
                    anu1 += `âž» *COMENT* : ${anu.result.comment}\n`
                    anu1 += `âž» *LIKE* : ${anu.result.like}\n`
                    anu1 += `âž» *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `âž» *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'ngakak':
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
                    case 'nulis1':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(naylachan)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nih kak`, quoted: nay})
                    break
                    case 'nulis2':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis3':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis4':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis5':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis6':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break                     
                    case 'video1':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: nay1}) 
                    break
                    case 'video2':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: nay1}) 
                    break
                    case 'video3':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: nay1}) 
                    break
                    case 'video4':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: nay1}) 
                    break
                    case 'video5':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: nay1}) 
                    break
                    case 'video6':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: nay1}) 
                    break
                    case 'orgy':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/orgy?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'nsfwneko':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/nsfwneko?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'mstrb':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'manga':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/manga?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'jahy':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/jahy?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'hentaigif':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/hentaigif?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'hentai':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/hentai?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'glasses':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/glasses?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'gangbang':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/gangbang?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'ero':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/ero?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'cuckold':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/cuckold?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'blowjob':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/blowjob?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'bdsm':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'ass':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/ass?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'ahegao':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/ahegao?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'zettairyouiki':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/zettairyouiki?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'wpnsfwmobile':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/wpnsfwmobile?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'wpmobile':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/wpmobile?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'wallpaper':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/wallpaper?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'thighs':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/thighs?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'uniform':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/uniform?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'tentacles':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/tentacles?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'sfwneko':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/sfwneko?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'pussy':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/pussy?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    case 'panties':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/panties?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay1}) 
                    break
                    
  /* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':
                    case 'gon': case 'killua': case 'sagiri': case 'YakkoXCode': case 'natsu': case 'genos': case 'saitama': case 'miku':
                    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
                    case 'foto': case 'pinterest':              
				    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args[0]}`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
                    case 'ramalnomer':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `âž» *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'ramalcinta':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `âž» *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `âž» *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `âž» *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `âž» *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `âž» *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `âž» *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `âž» *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'ramaljodoh':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `âž» *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `âž» *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `âž» *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `âž» *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `âž» *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `âž» *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'jodohbali':
			 	    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `âž» *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `âž» *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `âž» *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `âž» *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `âž» *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `âž» *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'ramalnikah':
			 	    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `âž» *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `âž» *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `âž» *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `âž» *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `âž» *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `âž» *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `âž» *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
                    case 'taksirmimpi':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `âž» *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'suit':
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `âž» *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `âž» *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `âž» *HASIL* : ${anu.hasil}\n`
                    anu1 += `âž» *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakangka':
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `âž» *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `âž» *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `âž» *HASIL* : ${anu.hasil}\n`
                    anu1 += `âž» *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakbendera':
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `âž» *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `âž» *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break     
                    case 'kata':
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ TEXT PRO XIXIXI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'sound1':
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    nayla.sendMessage(from, sound2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
                    case 'sound3':
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    nayla.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
                    case 'sound4':
                    const sound4 = fs.readFileSync('sound/sound4.mp3')
                    nayla.sendMessage(from, sound4, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
                    case 'sound5':
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    nayla.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
                    case 'sound6':
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    nayla.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound7':
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    nayla.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound8':
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    nayla.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound9':
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    nayla.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound10':
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    nayla.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound11':
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    nayla.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound12':
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    nayla.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound13':
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    nayla.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound14':
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    nayla.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound15':
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    nayla.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound16':
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    nayla.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound17':
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    nayla.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound18':
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    nayla.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound19':
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    nayla.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound20':
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    nayla.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound21':
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    nayla.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound22':
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    nayla.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound23':
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    nayla.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
                    case 'sound24':
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    nayla.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
                    case 'sound25':
                    const sound25 = fs.readFileSync('sound/sound25.mp3')
                    nayla.sendMessage(from, sound25, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
                    break                  
                     
     
                     case 'maker1':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(8)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker2':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     const Q = args.join(' ')
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/snowtext?text=${Q}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker3':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     const A = args.join(' ')
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${A}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker4':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(8)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dluxury?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker5':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(8)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dgradient?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker6':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(8)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker7':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(8)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/realisticvintage?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker8':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(8)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/realisticcloud?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker9':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(8)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cloudsky?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker10':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker11':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandwriting?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker12':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandengraved?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker13':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/summerysandwriting?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker14':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/balloontext?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker15':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dglue?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker16':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/balloontext?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker17':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgold?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker19':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/1917?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker20':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/minion3d?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker21':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/holographic3d?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker22':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metalpurpledual?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker23':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/deluxesilver?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker24':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/glossybluemetal?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker25':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/deluxegold?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker26':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/glossycarbon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker27':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/fabric?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker28':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/stone?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker29':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3davengers?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker30':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/marvelstudios?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay1})
                     break
                     case 'maker31':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/marvel?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker32':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/happnewyearfirework?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker33':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/newyear3d?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker34':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/neontext?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker35':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgoldeffect?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker36':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker37':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker38':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/xmas3d?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker39':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalsilver?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker40':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalrosegold?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker41':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalgalaxy?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker42':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalgold?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker43':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode & bot`)                      
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/lionlogomascot?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker44':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wolflogoblackwhite?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker45':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wolflogogalaxy?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker46':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker47':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/jokerlogo?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker48':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wicker?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker49':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/naturalleaves?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker50':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/fireworksparkle?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker51':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker52':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/redfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker53':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/purplefoilballon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker54':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker55':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/greenfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker56':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker57':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/bluefoilballon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker58':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/goldfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker59':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/steel?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker60':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/ultragloss?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker61':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/denim?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker62':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/decorategreen?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker63':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/decoratepurple?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker64':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/peridotstone?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker65':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/rock?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker66':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/lava?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker67':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/yellowglass?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker68':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/purpleglass?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker69':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/orangeglass?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker70':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/greeglass?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker71':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cyanglass?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                     case 'maker72':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     reply(naylachan)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/blueglass?text=${F}&APIKEY=${apixteam}`)
                     nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                     break
                    
                                                                                                                           
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                     
                      
                     case 'attp':
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nayla.sendMessage(from, atetepe, sticker, {quoted: nay})
                     break                     
                     case 'katailham':
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`)
                     anu1 = `âž» *KATA ILHAM* : ${anu.result}`
                     reply(anu1)
                     break
                     case 'citacita':
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                     break
                     case 'blackpink':
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                     break
                     case 'exo':
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/exo?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                     break
                     case 'bts':
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/bts?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                     break
                     case 'simi':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} hai sayang`)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/simi?text=Halo&lang=id&apikey=LindowApi`)
                     anu1 = `${anu.response.text}`
                     reply(anu1)
                     break
                     case 'textfont':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'kapital':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                      
                     case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode`)
                     F = body.slice(7)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/${command}?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'boomtext':  
                     if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} YakkoXCode&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     
                     
                                                                                                                          
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                   	case 'welcome':
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*SUDAH AKTIF* !!!')
					welkom.push(from)
					fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
					reply('[â—] SUKSES AKTIF WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
				    reply('[â—] SUKSES NONAKTIF WELCOME')
					} else {
					reply(`......`)
					}
					break  
                    case 'antilink': 
                    if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antilink.push(from)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[â—] ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[â—] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break					 
					case 'botx': 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					botx.push(from)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[â—] ACTIVATED BOTX*')
					} else if (Number(args[0]) === 0) {
					botx.splice(from, 1)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[â—] DEACTIVATED BOTX*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antigay':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[â—] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[â—] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antibocil':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[â—] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[â—] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antiwibu': 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[â—] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[â—] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antijawa':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[â—] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[â—] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE LOLTEAM ]==============================================================*/                    	 
        					
					case 'tebak':
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `âž» *SOAL* : ${anu.pertanyaan}`
                    anu2 = `âž» *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break 
                    case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
                    case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
                    case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break
                    case 'ttp1':
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
                    case 'ttp2':
                    case 'ttp3':
                    case 'ttp4':                     
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/${command}?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
                    case 'info1':
                    reply(nyz.info1())
                    break
                    case 'info2':
                    reply(nyz.info2())
                    break
                    case 'info3':
                    reply(nyz.info3())
                    break
                    case 'character': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `Id : ${anu.id}\n`
                    anu2 += `Name : ${anu.name.full}\n`
                    anu2 += `Native : ${anu.name.native}\n`
                    anu2 += `Favorites : ${anu.favourites}\n`
                    anu2 += `Media : \n`
                    ini_media = anu.media.nodes
                    for (var x of ini_media) {
                        anu2 += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(anu.image.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break
                    case 'manga1': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `âž» Id : ${anu.id}\n`
                    anu2 += `âž» Id MAL : ${anu.idMal}\n`
                    anu2 += `âž» Title : ${anu.title.romaji}\n`
                    anu2 += `âž» English : ${anu.title.english}\n`
                    anu2 += `âž» Native : ${anu.title.native}\n`
                    anu2 += `âž» Format : ${anu.format}\n`
                    anu2 += `âž» Chapters : ${anu.chapters}\n`
                    anu2 += `âž» Volume : ${anu.volumes}\n`
                    anu2 += `âž» Status : ${anu.status}\n`
                    anu2 += `âž» Source : ${anu.source}\n`
                    anu2 += `âž» Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
                    anu2 += `âž» end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
                    anu2 += `âž» Genre : ${anu.genres.join(", ")}\n`
                    anu2 += `âž» Synonyms : ${anu.synonyms.join(", ")}\n`
                    anu2 += `âž» Score : ${anu.averageScore}%\n`
                    anu2 += `âž» Characters : \n`
                    ini_character = anu.characters.nodes
                    for (var x of ini_character) {
                        anu2 += `- ${x.name.full} (${x.name.native})\n`
                    }
                    anu2 += `\nDescription : ${anu.description}`
                    thumbnail = await getBuffer(anu.coverImage.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break                     
                    case 'tiktoknowm': 
		            if (!isPrem) return reply(nyz.prem1(command))
                    reply(naylachan)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${l0lhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    nayla.sendMessage(from, ini_buffer, video, { quoted: nay1})
                    break
                    case 'tiktokmusic': 
		            if (!isPrem) return reply(nyz.prem1(command))
                    reply(naylachan) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: nay1})
                    break
                    case 'telesticker':
		            if (!isPrem) return reply(nyz.prem1(command)) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    case 'nhentai':
		            if (!isPrem) return reply(nyz.prem1(command)) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                    case 'semoji': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay1})
                    break                    
                    case 'phkomen': 
		            if (!isPrem) return reply(nyz.prem1(command))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${l0lhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    nayla.sendMessage(from, buffer, image, { quoted: nay1})
                    break
                    case 'art':
                    case 'bts':
                    case 'exo':
                    case 'elf':
                    case 'loli':
                    case 'neko':
                    case 'waifu':
                    case 'shota':
                    case 'husbu':
                    case 'sagiri':
                    case 'shinobu':
                    case 'megumin':
                    case 'wallnime':
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, buffer, image, { quoted: nay1})
                    break                     
                    case 'bj':
                    case 'ero':
                    case 'cum':
                    case 'feet':
                    case 'yuri':
                    case 'trap':
                    case 'lewd':
                    case 'feed':
                    case 'eron':
                    case 'solo':
                    case 'gasm':
                    case 'poke':
                    case 'anal':
                    case 'holo':
                    case 'tits':
                    case 'kuni':
                    case 'kiss':
                    case 'erok':
                    case 'smug':
                    case 'baka':
                    case 'solog':
                    case 'feetg':
                    case 'lewdk':
                    case 'waifu':
                    case 'pussy':
                    case 'femdom':
                    case 'cuddle':
                    case 'hentai':
                    case 'eroyuri':
                    case 'cum_jpg':
                    case 'blowjob':
                    case 'erofeet':
                    case 'holoero':
                    case 'classic':
                    case 'erokemo':
                    case 'fox_girl':
                    case 'futanari':
                    case 'lewdkemo':
                    case 'wallpaper':
                    case 'pussy_jpg':
                    case 'kemonomimi':
                    case 'nsfw_avatar': 
                    if (!isBotx) return reply(nyz.botx(prefix))
                    reply(naylachan) 
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, ini_buffer, image, { quoted: nay1})
                    break
                    case 'katajago':
                    if (args.length < 1) return reply(`[â—] CONTOH??\n*${prefix}${command} cantik`)
                    anu = await fetchJson(`https://api-self.herokuapp.com/api/jagokata?kata=${args[0]}`)
                    anu1 = `âž» *KATA* : ${anu.result}`
                    reply(anu1)
                    break                     
                    case 'test':
                    reply(`oke`)
                    break
                    case 'addprem':
					if (!isOwner) return reply(`LU OWNER?`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
					case 'dellprem': 
					if (!isOwner) return reply(`LU OWNER?`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
					case 'group':
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (!isBotGroupAdmins) return reply(`LU ADMIN?`)
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
					case 'hidetag10':              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VHTEAR ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    					
					 
					case 'tololserti': 				
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=muzharzain&name=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'fuckboyserti': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=muzharzain&name=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'fuckgirlserti': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=muzharzain&name=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'bucinserti': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(11)
					zhain = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=muzharzain&name=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'fftourserti': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'fftourserti2': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'fftourserti3': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'fftourserti4': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'fftourserti5': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break			
					case 'mltourserti': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mltourserti2': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mltourserti3': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mltourserti4': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mltourserti5': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(13)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgtourserti': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(14)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgtourserti2': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(15)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgtourserti3': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan)					 
					ct = body.slice(15)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgtourserti4': 					
					if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
					reply(naylachan) 
					ct = body.slice(15)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgtourserti5': 										 				 
				    if (args.length < 1) return reply(`[â—] CONTOH??\n${prefix}${command} whatsapp`)
				    reply(naylachan) 
					ct = body.slice(15)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ingfo':              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text, {quoted: nay1})					 
					break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
					
					case 'wanted':	 
	                var imgbb = require('imgbb-uploader')
                  	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan) 
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	               	} else {
	           	    reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	               	break
	               	case 'deteksiwajah':	 
	               	var imgbb = require('imgbb-uploader')
	               	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	             	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	              	reply(naylachan)
		            owgi = await nayla.downloadAndSaveMediaMessage(ted)
		            anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	             	hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	nayla.sendMessage(from, hehe, image, {quoted:nay1})
		            } else {
		            reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	                break
	            	case 'removebg':	 
                   	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${l0lhuman}&img=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
	                reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                	}
	                break	 
	                case 'deteksiumur': 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	                nayla.sendMessage(from, gender, text, {quoted:nay1})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                	}
	                break
                	case 'gtav':	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
	                break
                 	case 'facebookpage':	 
	                var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
	                break
	                case 'costumwp':	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
                	break
                	case 'pantaimalam':	 
                 	var imgbb = require('imgbb-uploader')
                	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted: nay1})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
                	break
	                case 'pensil':	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                 	break 
	                case 'bakar':	 
                 	var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
                 	 reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted:nay1})
                  	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                	break
                	case 'crossgun':	 
                	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
                	break
	 
					 case 'demote':
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*ðŸƒ :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					}					 
					break
				    case 'promote':
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `ð—¦ð—²ð—¹ð—®ð—ºð—®ð˜ðŸ¥³ ð—®ð—»ð—±ð—® ð—»ð—®ð—¶ð—¸ ð—ºð—²ð—»ð—·ð—®ð—±ð—¶ ð—®ð—±ð—ºð—¶ð—» ð—´ð—¿ð—¼ð˜‚ð—½ (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`ð—¦ð—²ð—¹ð—®ð—ºð—®ð˜ðŸ¥³ @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	
                    case 'brainly':					 
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = 'â‰â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‰\n'
					for (let Y of res.data) {
					teks += `\n*ã€Œ _BRAINLY_ ã€*\n\n*âž¸ Pertanyaan:* ${Y.pertanyaan}\n\n*âž¸ Jawaban:* ${Y.jawaban[0].text}\nâ‰â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â‰\n`
					}
					nayla.sendMessage(from, teks, text, {quoted: nay, detectLinks: false})
                    console.log(res)
                    })
                    break 
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    default:
                    if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				   
                    if (budy.includes("syg")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				     
				    if (budy.includes("ayan")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("love ")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("chan(")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("tempek")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("matamu")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("jancok")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("aing")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan ðŸ˜Ž EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6283803284713")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }				    
				    if (budy.includes("cekprefix")){
				    reply(`BOT PREFIX ${prefix}`)
				    }
				    if (budy.includes("gak")){
				    const F2 = fs.readFileSync('sound/F2.mp3')
                    nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if (budy.includes(`${numberbot}`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				    if (budy.includes(`${ownerrf}`)){
                    const F3 = fs.readFileSync('menu/tag2.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`ayla`)){
                    const F3 = fs.readFileSync('menu/tag3.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    
                       
                    if (body.startsWith(`${prefix}${command}`)) {
                    const SS1 = fs.readFileSync('sound/chann.mp3')
                    nayla.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay2})
                    }
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 
