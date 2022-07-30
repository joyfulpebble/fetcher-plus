"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var pick_file_menu_1 = require("./pick-file-menu");
var MenuAssemblyFunction = function () {
    var menuAssembly = electron_1.Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open File',
                    accelerator: 'Ctrl+O',
                    click: function () {
                        (0, pick_file_menu_1.default)();
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