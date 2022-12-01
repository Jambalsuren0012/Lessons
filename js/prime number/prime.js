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