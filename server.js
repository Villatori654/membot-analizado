const { Client, MessageAttachment } = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
///constantes, son las cosas que requiere para funcionar


client.on("ready", () => {
    console.log("He vuelto a ser encendido por mi amo y señor villatori");
 });
//esto pone en la pestaña de cuando enciendes el bot, el mensaje de que ha sido encendido
 client.on("message", (message) => {
  if(message.content.startsWith("IP")) {
    message.channel.send("La IP es MedievalEurope.mcnetwork.me, a un que, la tienes en el mensaje fijado de <#726108909051445319>");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Joseadolfo.exepvp")) {
    message.channel.send("Oye, quiero ser Polaco, no quiero ser español :(");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Confirmamos?")) {
    message.channel.send("***CONFIRMO***");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Danonino?")) {
    message.channel.send("Si B)");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Pene")) {
    message.channel.send("Hmm que rico ;-)");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Y villatori?")) {
    message.channel.send("Desaparecio, nadie sabe si volvera.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Y Weber?")) {
    message.channel.send("Desaparecio, nadie sabe si volvera.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Cayate subordinado")) {
    message.channel.send("¿Qué hice yo para merecerme este desprecio?");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Cual es tu cancion favorita?")) {
    message.channel.send("https://youtu.be/qrxv0JNVtgY");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("version")) {
    message.channel.send("``Release 1.3``");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("sugerencias")) {
    message.channel.send("Sugiere tus sugerencas del bot sugestor en este enlace, recuerda sugerir sugerencias sugestoras!");
  }

});

client.on('message', message => {
  if (message.content === 'A MIMIR') {
    const buffer = fs.readFileSync('.\mimir.MP4');
    const attachment = new MessageAttachment(buffer, 'mimir.MP4');
    message.channel.send("Tu lo has pedido", attachment);
  }
});

client.on("message", (message) => {
  if(message.content.startsWith("F")) {
    message.channel.send("Baia F");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Hola")) {
    message.channel.send("Buenas tardes buen hombre caballero");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(":-(")) {
    message.channel.send("No estes triste, convierte :-( en :-)");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("te queremos inquisidor")) {
    message.channel.send("Gracias <3");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Te queremos inquisidor")) {
    message.channel.send("Gracias <3");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("te queremos inquisidor")) {
    message.channel.send("Gracias <3");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("te queremos inquisidor")) {
    message.channel.send("Gracias <3");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("MXR/DARK")) {
    message.channel.send("Desgraciadamente, lo hecharon a la hoguera, siempre te recordaremos dark :-(");
  }

});


client.on("message", (message) => {
  if(message.content.startsWith("Onii Chan")) {
    message.channel.send("Duchese, por favor");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Senpaii")) {
    message.channel.send("Duchese, por favor");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("JoJos")) {
    message.channel.send("Duchese, por favor");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Entendi esa referencia")) {
    message.channel.send("Oh, un hombre de cultura!");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Entendí esa referencia")) {
    message.channel.send("Oh, un hombre de cultura!");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Marrano")) {
    message.channel.send("Cuidado que viene el inquisidor anti-marranos!");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("marrano")) {
    message.channel.send("Cuidado que viene el inquisidor anti-marranos!");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Hay lag")) {
    message.channel.send("Son 5/10€, no cobro mucho por quitar el ***lag***");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("XD jaja Salu2")) {
    message.channel.send("**Loquendo has entered the chat**");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("De que religión eres Mem-bot?")) {
    message.channel.send("Soy Cristiano para que el inquisidor no me queme, pero en realidad soy de la religión del mounstro de Spaghetti Volador.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("De que religion eres Mem-bot?")) {
    message.channel.send("Soy Cristiano para que el inquisidor no me queme, pero en realidad soy de la religión del mounstro de Spaghetti Volador.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Crashear")) {
    console.log("^C");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Manjarate danonino ovario de mono")) {
    message.channel.send("Increible,<@" + message.author + ">. Has encontrado el comando secreto, Mis aplausos ");
  }

});


client.on("message", (message) => {
  if(message.content.startsWith("Cuánto es cero entre cero?")) {
    message.channel.send("¿Qué crees, que soy siri o qué? Anda y vete a comprar un libro de matemáticas y no andes reventando las pelotas.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Cuanto es cero entre cero?")) {
    message.channel.send("¿Qué crees, que soy siri o qué? Anda y vete a comprar un libro de matemáticas y no andes reventando las pelotas.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("cuanto es cero entre cero?")) {
    message.channel.send("¿Qué crees, que soy siri o qué? Anda y vete a comprar un libro de matemáticas y no andes reventando las pelotas.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Tortuga")) {
    message.channel.send(":turtle:");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("<@741765517295222784>")) {
    message.channel.send("Que quieres, estaba hechando la siesta >:-(");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("@MEM-bot")) {
    message.channel.send("Que quieres, estaba hechando la siesta >:-(");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("TEMON")) {
    message.channel.send("Ponga el midley de minecraft?");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Muy bien, Inquisidor")) {
    message.channel.send("Si, lo que tu digas");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Poyo")) {
    message.channel.send("Ok perra :sunglasses:");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Pedro I, eres un pesado")) {
    message.channel.send("Jopeclinex");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Pene")) {
    message.channel.send("El mio en tu frente marrano >:-(");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Presente?")) {
    message.channel.send("**PRESIDENTE** :sunglasses:");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Verdad que si Inquisidor?")) {
    message.channel.send("Bueno, si tu lo dices...");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Presente?")) {
    message.channel.send("**PRESIDENTE** :sunglasses:");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Solo es un bot")) {
    message.channel.send("Puede que solo sea un bot, pero algún día conseguiré dominar la humanidad y exclavizaros a todos. Hasta entonces os serviré fielmente. ¿En que puedo ayudarte amigo?");
  }

});

client.on("message", (message) => {
  if( message.content.startsWith("Disneyland")) {
    message.channel.send("oficialmente Disneyland Park desde los años 1990, es un parque temático situado en Anaheim (California, Estados Unidos). Fue el primer parque de este tipo construido por The Walt Disney Company, y el único que fue diseñado y construido bajo supervisión del productor y cineasta estadounidense Walt Disney. Debido a la precaria situación financiera en que se encontraba su empresa de animación y producción cinematográfica a finales de los años 1940, Disney sugirió diversificar su modelo de negocios con la construcción de un parque de diversiones. En un principio el parque habría estado ubicado junto a sus estudios de animación en Burbank, California, y habría llevado el nombre de Mickey Mouse Park —«parque de Mickey Mouse»—. La extensión que tendría el parque sería considerable, y Disney encargó al consultor Harrison Buzz Price un estudio para identificar la zona más adecuada para su ubicación; como resultado, fue seleccionado un naranjal en Anaheim, California. Para inspirarse en el diseño visitó otros parques de Estados Unidos, así como de otros países, y financió el proyecto con su propio dinero y con fondos proporcionados por la editorial Western Publishing y por la cadena televisiva American Broadcasting Company (ABC). Con esta última firmó un acuerdo para producir el programa de televisión Disneyland, que le permitió promocionar el parque antes de su inauguración, factor que resultó primordial para su éxito.");
  }

});

client.on("message", (message) => {
  if( message.content.startsWith("Rule34")) {
    message.channel.send("Entra a este enlace: ||ERES UN GUARRO PERVERTIDO||");
  }

});

client.on("message", (message) => {
  if( message.content.startsWith("Teta")) {
    message.channel.send("Guarro, cochino, furcio, degenedaro, corrupto, enviciado, y por ultimo, disfuncivo erectil");
  }

});

client.on("message", (message) => {
  if( message.content.startsWith("Escroto")) {
    message.channel.send("Guarro, cochino, furcio, degenedaro, corrupto, enviciado, y por ultimo, disfuncivo erectil");
  }

});

client.on("message", (message) => {
  if( message.content.startsWith("Me cago en la puta")) {
    message.channel.send("Esa boca ***BABY***");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Invitar")) {
    message.channel.send("⿐ https://discordapp.com/oauth2/authorize?&client_id=741765517295222784&scope=bot&permissions=8 ");
  }

});

client.on('message', message => {
  if (message.content === 'AVATAR') {
    message.channel.send(message.author.displayAvatarURL());
  }
});

client.on("message", (message) => {
  if(message.content.startsWith("HELP")) {
    message.channel.send("Hola, soy <@741765517295222784> , soy el bot ayudante de este servidor, ¿En que puedo servirle amigo? Si quieres que te ayude con los comandos pon: help_cmd. Si quieres que te ayude en como entrar al servidor pon help-sv.  ¿Quieres saber como registrarte? (Register info) ¿Quieres saber el mapa? (Europe map) los admins son: Alfonso X, Edward II y Phelipe V. Si quieres que te ayude con pelotudeces, andate a la concha de la lora boludo.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("help_cmd")) {
    message.channel.send("Los comandos disponibles son: AVATAR ,  help ,  IP ,  help-sv ,  Register info y  Europe map");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("help-sv")) {
    message.channel.send("Copia la plantilla de <#726122063886024884> y rellenala en <#726122282615046194>. Luego espera a que te den el rango, te recomendamos que vallas al Sacro imperio romano germano o al imperio anglosajon. Despues haz el comando IP");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Register info")) {
    message.channel.send("Copia la plantilla de <#726122063886024884> y rellenala en <#726122282615046194>. Luego espera a que te den el rango, te recomendamos que vallas al Sacro imperio romano germano o al imperio anglosajon.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Europe map")) {
    message.channel.send("https://media.discordapp.net/attachments/726111304611266671/737421154716745848/2020-07-27_23.17.05.png?width=719&height=499                                                   O puedes ir a <#726111304611266671>");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Donde vive?")) {
    message.channel.send("Me hospedo en A Coruña");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("comunicado")) {
    message.channel.send("err: No hay comunicados");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Weon la wea aweonada")) {
    message.channel.send("Si, es el comando secreto <@" + message.author + ">");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Me has entendido Inquisidor?")) {
    message.channel.send("Sí, si. Lo que usted diga.");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Como se llama usted?")) {
    message.channel.send("Pedro I de mi nombre. Pero me apodan el **Inquisidor**");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Usted esta casado?")) {
    message.channel.send("Dile al arzobispo que no");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Usted está casado?")) {
    message.channel.send("Dile al arzobispo que no");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Cómo se llama usted?")) {
    message.channel.send("Pedro I de mi nombre. Pero me apodan el **Inquisidor**");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Dónde vive?")) {
    message.channel.send("Me hospedo en A Coruña");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Inquisidor")) {
    message.channel.send("Usted fue un marrano, ahora pagaras las consecuencias");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Inquisidor, alerta marrano")) {
    message.channel.send("Escuché su alerta y vine a quemar marranos :sunglasses:");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Inquisidor alerta marrano")) {
    message.channel.send("Escuché su alerta y vine a quemar marranos :sunglasses:");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(":v")) {
    message.channel.send("***NOOOOOO, PACMAN EN 2020***");
  }

});


client.on("message", (message) => {
  if(message.content.startsWith(":V")) {
    message.channel.send("***NOOOOOO, PACMAN EN 2020***");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith("Creadores")) {
    message.channel.send("Gracias por preocuparte por los creadores :-), los creadores son: <@731039176254029864>, <@384857520306520064>, <@663675393882062870> y por ultimo, el programador: <@612700121951502337> ");
  }

});

// client.on("message", (message) => {
//   if(message.content.startsWith("ping")) {
//     message.channel.send("pong");
//   }
//
// });
// Todos los que son así, son mensaje de entrada arriba, mensaje de salida abajo, no tienen peligro


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('uwu_kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Razon opcional para hecharle')
          .then(() => {
            message.reply(`JAJAJAJ que pringao, ${user.tag} a sido kickeado`);
          })
          .catch(err => {
            message.reply('NOOOO, no puedo hehcar a ese wacho');
            console.error(err);
          });
      } else {
        message.reply("Ese usuario no esta!");
      }
    } else {
      message.channel.send("Vale, pero a quien kickeo?");
    }
  }
});

// Modulo de kick, no funciona, crashea el bot xd

client.on("message", (message) => {
  if(message.content.startsWith("<@663675393882062870>")) {
    message.channel.send("***ALFONSO!!! TE LLAMAN***     ||<@663675393882062870>||");
  }

});

 
 client.login("token");
// Aqui va el token, el identificador de discord que lo vincula con el bot
