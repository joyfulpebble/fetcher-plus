"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
// import pickFile from "./pick-file-menu";
var MenuAssemblyFunction = function () {
    var menuAssembly = electron_1.Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open File',
                    accelerator: 'Ctrl+O',
                    click: function () {
                        // pickFile()
                    }
                },
                {
                    label: 'Exit',
                    click: function () {
                        electron_1.app.quit();
                    }
                }
            ]
        }
    ]);
    return menuAssembly;
};
exports.default = MenuAssemblyFunction;
//# sourceMappingURL=window-menu.js.map