function add(n1, n2, showResult, phrase) {
    // console.log(typeof n1)
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //   throw new Error("not number")
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var nubmer1 = 5;
var nubmer2 = 2.8;
var printResult = true;
var resultPhrase = 'result is :';
var result = add(nubmer1, nubmer2, printResult, resultPhrase);
// console.log(result);
