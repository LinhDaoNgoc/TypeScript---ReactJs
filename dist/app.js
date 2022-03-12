"use strict";
// export {};
Object.defineProperty(exports, "__esModule", { value: true });
const product = [
    { id: 1, name: "productA" },
    { id: 2, name: "productB" },
    { id: 3, name: "productC" },
];
function show(product) {
    console.log(product);
    const result = product.map((item) => `<div>${item.name}</div>`);
}
show(product);
//# sourceMappingURL=app.js.map