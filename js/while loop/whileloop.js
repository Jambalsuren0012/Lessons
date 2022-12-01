// 1. 10 хүртэлх натурал тоог хэвлэх программ бич

let count = 0;
while (count <= 10) {
    console.log(count);
    count +=1
}
// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
 
let countodd = 0;
while (countodd <= 10) {
    if (countodd % 2 === 0)
    {
console.log(countodd);
}

countodd += 1;}
// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
 




// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
let a= parseInt(prompt("Та дурын тоо оруулна уу"))

if(a === 2 ){
    console.log(`${a} бол анхны тоо мөн.`);
 }else{
    let i = 2;
    while (i < a ){
        if (a % i === 0){
            isprime = false;
            break;
        }
        i++;
    }
    if (isprime) {
        console.log(`${a} бол анхны тоо мөн`);
    }else{
        console.log(`${a} бол анхны тоо биш`);
    }
}