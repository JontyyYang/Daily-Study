"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createFactoryDemo(args) {
    var _a;
    var obj = {
        totalMessage: args.name + ((_a = args.age) !== null && _a !== void 0 ? _a : "demo"),
        runDemo: () => {
            return 1;
        },
    };
    return obj;
}
const factoryDemo1 = createFactoryDemo({
    name: 'jontyy',
});
const factoryDemo2 = createFactoryDemo({
    name: "jinda",
    age: 18
});
console.log(factoryDemo1);
console.log(factoryDemo2);
console.log(factoryDemo1.runDemo());
