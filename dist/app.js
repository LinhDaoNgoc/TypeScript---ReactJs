"use strict";
// export{}
//tsc --init 
//target: "es2018"
// baseUrl: './src'
//outDir: './dist'
//gox cau lenh : tsc --watch
const a = 20;
const b = 20;
const name = "dao ngoc linh";
const age = 20;
const status = true;
const info = [{ id: a }, { id: b }];
const myArr = ["a", "b", "c"];
const numberArr = [1, 2, 3, 4, 5];
const objectArr = [{ id: 1 }, { id: 2 }];
console.log(`Name:${name} Age:${age} Status:${status} MyArr:${myArr}`);
function sum(numA, numB) {
    return numA + numB;
}
sum(a, b);
//tsc --watch duong_dan_file
