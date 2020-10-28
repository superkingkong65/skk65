const Discord = require("discord.js");
const prefix = "s!";
const bot = new Discord.Client();

bot.token = "NjI0Njk5NzEzNTAwNzQxNjU1.XYUy8g.wS97SwffWBZDQ3cpgvFBzDHNFNk";

bot.on("ready", () => {
  console.log("bot is working");
});
bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "badword")) {
    msg.channel.send("fuck off, you homozygous asshole.");
  }
});

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "help")) {
    msg.channel.send(
      "You can make me -badword -food -walrus -monika -yukari -bubblegum"
    );
  }
});

var mon1 = "./monika/monika1.jpg";
var mon2 = "./monika/monika2.png";
var mon3 = "./monika/monika3.jpg";
var mon4 = "./monika/monika4.jpg";

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "monika")) {
    var number = 4;
    var random = Math.floor(Math.random() * number) + 1;
    switch (random) {
      case 1:
        msg.channel.send({ files: [mon1] });
        break;
      case 2:
        msg.channel.send({ files: [mon2] });
        break;
      case 3:
        msg.channel.send({ files: [mon3] });
        break;
      case 4:
        msg.channel.send({ files: [mon4] });
        break;
      default:
    }
  }
});

var food1 = "./food/food1.png";
var food2 = "./food/food2.jpg";
var food3 = "./food/food3.jpg";
var food4 = "./food/food4.jpg";

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "food")) {
    var number = 4;
    var random = Math.floor(Math.random() * number) + 1;
    switch (random) {
      case 1:
        msg.channel.send({ files: [food1] });
        break;
      case 2:
        msg.channel.send({ files: [food2] });
        break;
      case 3:
        msg.channel.send({ files: [food3] });
        break;
      case 4:
        msg.channel.send({ files: [food4] });
        break;
      default:
    }
  }
});

var walrus1 = "./walrus/walrus1.jpg";
var walrus2 = "./walrus/walrus2.png";
var walrus3 = "./walrus/walrus3.jpg";
var walrus4 = "./walrus/walrus4.jpg";

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "walrus")) {
    var number = 4;
    var random = Math.floor(Math.random() * number) + 1;
    switch (random) {
      case 1:
        msg.channel.send({ files: [walrus1] });
        break;
      case 2:
        msg.channel.send({ files: [walrus2] });
        break;
      case 3:
        msg.channel.send({ files: [walrus3] });
        break;
      case 4:
        msg.channel.send({ files: [walrus4] });
        break;
      default:
    }
  }
});

var yukari1 = "./yukari/yukari1.gif";
var yukari2 = "./yukari/yukari2.gif";
var yukari3 = "./yukari/yukari3.jpg";
var yukari4 = "./yukari/yukari4.jpg";

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "yukari")) {
    var number = 4;
    var random = Math.floor(Math.random() * number) + 1;
    switch (random) {
      case 1:
        msg.channel.send({ files: [yukari1] });
        break;
      case 2:
        msg.channel.send({ files: [yukari2] });
        break;
      case 3:
        msg.channel.send({ files: [yukari3] });
        break;
      case 4:
        msg.channel.send({ files: [yukari4] });
        break;
      default:
    }
  }
});

var bubblegum1 = "./bubblegum/bubblegum1.png";
var bubblegum2 = "./bubblegum/bubblegum2.jpg";
var bubblegum3 = "./bubblegum/bubblegum3.jpg";
var bubblegum4 = "./bubblegum/bubblegum4.png";

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "bubblegum")) {
    var number = 4;
    var random = Math.floor(Math.random() * number) + 1;
    switch (random) {
      case 1:
        msg.channel.send({ files: [bubblegum1] });
        break;
      case 2:
        msg.channel.send({ files: [bubblegum2] });
        break;
      case 3:
        msg.channel.send({ files: [bubblegum3] });
        break;
      case 4:
        msg.channel.send({ files: [bubblegum4] });
        break;
      default:
    }
  }
});
