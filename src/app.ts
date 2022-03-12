// // export {}
// type Product = {
//   id: number;
//   name: string;
//   status?: boolean; // required
// };

// // tsc --init
// // target: "es2018"
// // baseUrl: './src'
// // ourDir: './dist'
// // gõ câu lệnh : tsc --watch
// const a: number = 10;
// const b: number = 20;
// const c: string | number = 20; // union
// const Name: string = "Đào Ngọc Linh";
// const age: number = 20;
// const Status: boolean = true;
// // const info: object = {};
// const info: { id: number; name: string } = { id: 1, name: Name };
// const stringArr: string[] = ["a", "b", "c", "d"];
// const numberArr: number[] = [1, 2, 3, 4, 5];
// const objectArr: object[] = [{ id: 1 }, { id: 2 }];

// function sum(numA: number, numB: number): number {
//   return numA + numB;
// }

// console.log(
//   `Name: ${Name}  Age: ${age} Status: ${Status} Info: ${info.name} stringArr: ${stringArr[0]} numberArr: ${numberArr[0]}}`
// );
// // tsc --watch ten_file

export {};

function show<C, D>(a: C, b: D): [C, D] {
  return [a, b];
}

function getProduct() {}

show(10, 30);
show("Dao", "Linh");
