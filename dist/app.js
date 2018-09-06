"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = require("./foo");
Object.assign(global, { foo: foo_1.default });
const bar_1 = require("./bar");
console.log(`hello world! -- ${foo_1.default}`);
bar_1.show();
//# sourceMappingURL=app.js.map