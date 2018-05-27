const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
const request = require('request');


  client.on("ready", () =>{
    console.log("ON");
  });
  var prefix = config.prefix;


  client.on("message", (message) => {

    if (message.content.startsWith(prefix + "skin fallen")){
    message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376548806033418/fallen_angel_skins.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin alien")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376556976799744/alien_sk.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin serenity")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376552551809052/Serenity_Skins.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin camo")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376570570276874/camo.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin chrome")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376348448456714/chrome_1.PNG");
    message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376469147811851/chrome_2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin chris")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376136711733279/christmas.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin autu")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376153601933322/autumn.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin battle")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376160602488852/battle_royal.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin hallo")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376224636665856/halloween.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin elite")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376262435733506/elite_skin.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin winter")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376339556663297/winter.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin world")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376344665063444/world.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin hynx")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376353921892352/hynx.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin invi")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376358707855370/invisible.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin modern")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376366874165289/modern_black.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin skinb")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376373438251020/skinbox.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376379532574732/skinbox2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin valent")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376388495540225/valentine.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin neon")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376439418847243/neon_dragon.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin dread")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376443084537857/dreadnought.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin hynx v")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376446582456322/hynx_v2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin infini")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376450391146506/infinity.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin light")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376454753222656/light_saber1.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376459056578590/light_saber_2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin skully")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376464085286913/skully_pink.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin comm")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376476710273027/community.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin red")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376487699349505/red_dragon.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin destruc")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376545119240213/destruction_1.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376252881240074/destruction_2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin red s")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376560344825859/red_strike.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin black")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376565679980559/black_night.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin fun")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376575511429120/fun_edition.PNG");
    message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376582813712404/fun_edition_2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "skin easter")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376257377533962/easter.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "p ammo")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376140788334592/ammo1.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376146245255178/ammo3.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376146022825984/ammo2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "p attach")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376151181819904/attachments.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376148069908501/attachments_2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "p backp")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376156437282826/backpacks.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "p armor")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376166591954944/body_armor.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376227656826880/helmets.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376247927635969/nvg_helmet.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "p msc")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376240537534464/msc_1.PNG");
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376244739964969/msc_2.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "p grena")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376265455632385/grenades.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "p snip")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450376383223562260/sniperws.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida amr2")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450390643815088148/AMR2.jpg");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida ots")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450390644544765962/OTS.jpg");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida svd")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391700251213835/svd.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida blaser")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391701660631051/blaser.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida m200")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391703061397526/m200.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida srg")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391705045172224/srg.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida awm")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391706509246476/awm.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida vss")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391707717074955/vss.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida ots")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450390644544765962/OTS.jpg");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida sp66")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391709608837180/sp66.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida awp")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391711399542797/awp.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida m107")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391712968343562/m107.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "caida toda")){
  message.channel.send("https://cdn.discordapp.com/attachments/450374276999151626/450391699726794763/todas.PNG");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "cross")){
  message.channel.send("https://infestationnewz.gamepedia.com/Custom_Crosshair");
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "list sk")){

  const embed = new Discord.RichEmbed()
  .setColor(0x66ff66)

  .addField(`LISTADO DE SKINS`,`Fallen AngeL, Serenity, Alien, Red Strike, Black Night, Camo Skins, Chrome, Community, Red Dragon, Neon Dragon, Dreadnought, Hynx, Hynx v2, Infinity, Light Saber, Skully Pink, Invisible, Fun Edition, Modern Black, Destruction, Christmas, Valentine, Autumn, Winter, Easter, Halloween, Elite, Battle Royale, Premium, World, Skinboxes`)
    message.channel.send({embed});
  }
  //____________________________________________________________________________
  if (message.content.startsWith(prefix + "list sni")){

  const embed = new Discord.RichEmbed()
  .setColor(0x66ff66)

  .addField(`LISTADO DE SKINS`,`SVD, BLASER, M200, OTS, SRG, AWM, AMR2, VSS, SP66, AWP, M107, QLB`)
    message.channel.send({embed});
  }
  //____________________________________________________________________________

  if (message.content.startsWith(prefix + "help")){

const embed = new Discord.RichEmbed()
.setColor(0x66ff66)

.setAuthor(`Bot info`)
.addField(`COMANDOS`,`.help`)
.addField(`Prefijo`, `.`)
.addField(`.skin `, `nombre del skin`)
.addField(`.p ammo`, `municiones`)
.addField(`.p attachments`, `adaptaciones al arma`)
.addField(`.p backpacks`, `mochilas`)
.addField(`.p armors`, `armaduras y cascos`)
.addField(`.p grenades `, `granadas`)
.addField(`.p snipers `, `precios snipers`)
.addField(`.caida + nombre de la sniper `, `caidas de la sniper`)
.addField(`.cross `, `descargar miras`)
.addField(`.list skins `, `listado de las skins`)
.addField(`.list snip `, `nombre de las snipers`)


message.channel.send({embed});

  }
  //____________________________________________________________________________
});
client.login(config.token);
