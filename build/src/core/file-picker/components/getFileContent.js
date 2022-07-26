"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var getFileContent = function (path) {
    var fileContent = (0, fs_1.readFileSync)(path, 'utf-8');
    return fileContent;
};
exports.default = getFileContent;
//# sourceMappingURL=getFileContent.js.map