const number = "4.923861916590753e-7";
let ejemp = "0.00000"
console.log(ejemp.split("-"));
function format (num){
  const exp = num.split("-")[1];
  let value = num.split(".")[0];
  let ceros = new Array(parseInt(exp - 1)).fill("0").join("");
   ceros[0] = 1;
   return "0." +ceros + value;
}
console.log(format(number));


