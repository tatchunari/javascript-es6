function isUndefined(height) {
    const checkedHeight = height ?? "not define";
    return `Height is ${checkedHeight}`
}

let height = undefined;
let result = isUndefined(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
