const fs = require('fs');
const path = require('path');

module.exports = {
    name: "fork",
    description: "replit ko,labyuuu",
    prefixRequired: false,
    adminOnly: false,
    async execute(api, event, args) {
        const { threadID, messageID } = event;
        const filePath = path.join(__dirname, 'pict.png');

        if (!fs.existsSync(filePath)) {
            return api.sendMessage(global.convertToGothic("Yoko nga,gag* kaba?"), threadID, messageID);
        }

        try {
            await api.sendMessage({
                body: global.convertToGothic("fork ka dito."),
                attachment: fs.createReadStream(filePath)
            }, threadID, messageID);
        } catch (error) {
            console.error(error);
            await api.sendMessage(global.convertToGothic("An error occurred."), threadID, messageID);
        }
    }
};