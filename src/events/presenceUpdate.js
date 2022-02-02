module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {
        let banChannel = client.channels.cache.get("560340160819232788");

        if (!newPresence.activities) return false;
        console.log(newPresence.activities)

        newPresence.activities.forEach(activity => {
            if(activity.name === "League of Legends") {
                newPresence.member.ban({ days: 7, reason: "Playing League of Legends" });
                banChannel.send(`${newPresence.member.user.tag} has been banned for playing League of Legends.`);
            }
        });
    }
}
