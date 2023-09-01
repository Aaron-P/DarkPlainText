(async function () {
    "use strict";

    messenger.messageDisplayScripts.register({
        js: [
            { file: "src/js/message-content.js" },
        ]
    });
}());