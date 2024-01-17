const {commands, clash, formatp} = require("../lib/");
const config = require("../config.js");
const os = require("os");
const now = require("performance-now");

clash({pattern: "menu", fromMe: false, desc: "Show all bot commands.", type: "info",},
async ({msg}) => {
const speed = now() - now();
let [date, time] = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}).split(",");
let menu = `     *[${config.BOT_NAME.toUpperCase()}]*

*➛𝘜𝘴𝘦𝘳:${msg.pushName}*
*➛𝘖𝘸𝘯𝘦𝘳:${config.OWNER_NAME.toUpperCase()}*
*➛𝘙𝘢𝘮:${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}*
*➛𝘔𝘰𝘥𝘦:${config.WORK_TYPE.toUpperCase()}*\n`
let cmnd = [];
let cmd;
let category = [];
commands.map((clash) => {
if (clash.pattern) {
cmd = clash.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
}
if (!clash.dontAddCommandList && cmd !== undefined) {
let type;
if (!clash.type) {
type = "misc";
} else {
type = clash.type.toLowerCase();
}
cmnd.push({cmd, type: type});
if (!category.includes(type)) category.push(type);
}
});
cmnd.sort();
category.sort().forEach((cmmd) => {
menu += `\n*[${cmmd.toLowerCase()}]*`;
let comad = cmnd.filter(({ type }) => type == cmmd);
comad.forEach(({cmd}, num) => {
menu += `\n*↣${(num += 1)}:${cmd.trim()}*`
});
menu += `\n`;
});
return await msg.tinyreply(menu);
});
