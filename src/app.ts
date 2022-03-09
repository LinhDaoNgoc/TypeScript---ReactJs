// export{}

type Product = {
    id: number;
    name: string;
    status: boolean;
}

//tsc --init 
//target: "es2018"
// baseUrl: './src'
//outDir: './dist'
//gox cau lenh : tsc --watch


const a:number = 20;
const b:number = 20;
const name: string | number = "dao ngoc linh";
const age:number = 20;
const status: boolean = true;
const info:  Product[] = [{id: a}, {id: b}]
const myArr: string[] = ["a", "b", "c"];
const numberArr: number[] = [1,2,3,4,5];
const objectArr: Product[] = [{id: 1}, {id: 2}]

console.log(`Name:${name} Age:${age} Status:${status} MyArr:${myArr}`);


function sum(numA: number, numB: number): number{
    return numA + numB
}
sum(a,b);
 //tsc --watch duong_dan_file