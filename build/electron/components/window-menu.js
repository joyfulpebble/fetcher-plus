"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var getFilePath_1 = require("../../src/core/file-picker/components/getFilePath");
var MenuAssemblyFunction = function (mainWindow) {
    var menuAssembly = electron_1.Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open File',
                    accelerator: 'Ctrl+O',
                    click: function () {
                        (0, getFilePath_1.default)(mainWindow);
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