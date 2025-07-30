let height = undefined;
let result;

let heightMessage = "Height is not defined";

result = height ?? heightMessage;


console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
