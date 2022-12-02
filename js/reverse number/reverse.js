let num = parseInt(  prompt("Тоо оруулна уу"))
let temp = num;
let revNum = 0 ;
let unit = 0;
while (num !==0 ){
    unit = num % 10;
    revNum = revNum * 10 + unit;
    num = Math.floor(num / 10);
}
console.log(`Таны оруулсан тоо: ", ${temp}`);
console.log("таны оруулсан тооны урвуу нь", revNum);