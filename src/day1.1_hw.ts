// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: enum / any

let e = [3]
// A: number / array

let f;
// A: unknown /any

let g = []
// A: any/ array



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: releaseYear optional datatype missing. Can be resolved by :
    // #1. assigning releaseYear variable after line 32. e.g.  releaseYear : 2009;
    // #2. setting the releaseYear as optional parameter in line 30. e.g. releaseYear?: number,

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Two issues in this code snippet:
//  #1. should define data type of prices  Array; let prices : number[] = [100, 200, 300];
//  #2. prices[0] cannot be string variable. datatype String do not match to the array data type.

function myFunc(a: number, b: number): number {}
// A: #1 : This function should return a number-type variable. return information is missing.