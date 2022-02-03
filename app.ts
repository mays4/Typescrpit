function add(n1:number,n2:number, showResult:boolean,phrase:string){
  // console.log(typeof n1)
  // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
  //   throw new Error("not number")

  // }
  const result = n1 + n2;
  if(showResult){
    console.log( phrase + result)
  } else{

    return result;
  }

}

const nubmer1 = 5 ;
const nubmer2 = 2.8;
const printResult = true;
const resultPhrase = 'result is :'
const result = add(nubmer1 , nubmer2, printResult , resultPhrase);
// console.log(result);

