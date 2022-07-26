"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var fs_1 = require("fs");
function getFileContent(path) {
    console.log(path);
    var result = (0, fs_1.readFileSync)(path, 'utf-8');
    console.log(result);
}
var MenuAssemblyFunction = function (mainWindow) {
    var menuAssembly = electron_1.Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open File',
                    accelerator: 'Ctrl+O',
                    click: function () {
                        getFileContent('C:/Users/danma/Desktop/.dev/.web/JSON/.editor/tsconfig.json' /*getFilePath(mainWindow)*/);
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