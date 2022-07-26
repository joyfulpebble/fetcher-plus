"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var getFilePath = function (mainWindow) {
    var options = {
        filters: [
            { name: 'JSON fules', extensions: ['json'] }
        ]
    };
    var files = electron_1.dialog.showOpenDialogSync(mainWindow, options);
    return files[0];
};
exports.default = getFilePath;
//# sourceMappingURL=getFilePath.js.map