const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = async (client, message) => {
    let presences = [
        "Running through Titan baricades since 1989",
        "It's real ape hours",
        `${client.users.size} Ramen Shop members`,
        "Bubble Titans are scary Titans",
        "Join the Ramen Shop!",
        "011011100111010101110100",
        "Read the rules!",
        "Hunter main, big brain",
        "Invite your friends!",
        "Titan main, tiny brain",
        "Can we get an async for each function?",
    ]
    setInterval(() => {
        const presence = Math.floor(Math.random() * (presences.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presences[presence]}`}, status: "dnd" });
    }, 60000)
    console.log(`${client.user.username} is online! \nThe Ramen Shop has ${client.users.size} users!`);
}