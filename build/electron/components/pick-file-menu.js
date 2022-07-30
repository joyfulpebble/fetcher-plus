"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
function pickFile() {
    var popup = new electron_1.BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        modal: true
    });
    popup.on('show', function () {
        popup.loadURL('http://localhost:3000/pick-file');
        popup.focus();
        popup.on('blur', function () {
            popup.close();
        });
    });
    popup.show();
}
exports.default = pickFile;
//# sourceMappingURL=pick-file-menu.js.map