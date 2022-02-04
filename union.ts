
type Combineable = number | string;
type ConversionScripter = 'as-number' | 'as-text';



function combine(input1:Combineable ,input2:Combineable , resultConverstion: ConversionScripter ){
  let result;
   if (typeof input1 === 'number' && typeof    input2 === 'number' || resultConverstion ==='as-number'){

    result = +input1 + +input2;
} else {
    result = input1.toString() + input2.toString();
}
// } if (resultConverstion ==='as-number'){
//   return +result;
// }else{
//   return result.toString()
// }
    return result;

}
const combinedAges = combine(30,26 ,'as-number');
const combinedStringAges = combine('30','26' ,'as-number');

const combinedNames = combine('Max','Anna','as-text');
console.log(combinedAges);
console.log(combinedNames);
console.log(combinedStringAges);

