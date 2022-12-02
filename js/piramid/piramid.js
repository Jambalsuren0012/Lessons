function createPyramid(rows)
{
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
}

createPyramid(20) // өндөр