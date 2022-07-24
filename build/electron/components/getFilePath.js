"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var fs = require("fs");
var getFilePath = function (path, mainWindow) {
    var filePath = [];
    var files = electron_1.dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'],
        filters: [
            { name: 'JSON fules', extensions: ['json'] }
        ]
    })
        .then(function (result) {
        filePath = result.filePaths;
        path === null || path === void 0 ? void 0 : path.push(filePath[0]);
        console.log(path);
        var fileContent = fs.readFileSync(filePath[0]).toString();
        console.log(fileContent);
    }).catch(function (err) {
        console.log(err);
    });
    if (!files) {
        alert("You don't pick a file!");
    }
    return path;
};
exports.default = getFilePath;
//# sourceMappingURL=getFilePath.js.map