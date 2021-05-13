const { Client, Collection } = require("discord.js");
const cron = require("cron");
const client = new Client();

let xurMessage = new cron.CronJob('00 10 12 * * 5', () => {
    var ramenShop = client.guilds.cache.get("511289361178820618");
    var resetChannel = ramenShop.channels.cache.get("548999830048079875");
    resetChannel.send("https://wherethefuckisxur.com");
}, null, true, 'America/Chicago');
xurMessage.start();

let unregisteredMessage = new cron.CronJob('00 00 15 * * 0-6', () => {
    var ramenShop = client.guilds.cache.get("511289361178820618");
    var announcementChannel = ramenShop.channels.cache.get("511922224727457804");
    let unregisteredRole = ramenShop.roles.cache.get("776988950929473596");
    announcementChannel.send(`<@${unregisteredRole.id}>, please make sure you head over to #commands and type \`d!register\`. \nCharlemange will DM you with a link to link your Destiny and Discord accounts together! \nIf you have already registered with Charlemange, your accounts may have been desynced and might require you to register again. This can happen from time to time, but all your latest Destiny information will be fetched. \nOnce you have successfully registered with Charlemange, you will receive the \`Registered Members\` role.`);
}, null, true, 'America/Chicago');
unregisteredMessage.start();

["commands", "aliases"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

client.login(process.env.token);
