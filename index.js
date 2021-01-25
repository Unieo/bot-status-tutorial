
// When the bot is ready.
client.on("ready", () => {
    // Logging that the bot is online
    console.log("Bot is online!");
    // This is the activity/status settings...
    client.user.setActivity("Bot message here!" 
    {
        type: "PLAYING", // Can be STREAMING, WATCHING, etc.
    });
});
