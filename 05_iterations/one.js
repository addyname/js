// for

for (let i = 1; i <= 7; i++) {
    const element = i;
    const name = "Adnan";
    if (element == 3) {
       // console.log(`My name is ${name}.`)
    }
  //  console.log(element)
}

for (let i = 1; i <=5 ; i++) {
    // console.log(`Outer loop: ${i}`)
    for (let j = 1; j <=5 ; j++) {
        // console.log(`${i} * ${j} = ${i * j}`)
        // console.log(i + '*' + j + ' = ' + i*j );
    }
    
}

let myArray = ["Adnan", "Seemab", "Monis", "Nikhat", "Ravi"]
for (let a = 0; a < myArray.length; a++) {
    const number = myArray[a]
    // console.log(number)
}

// Break and Continue

for (let b = 1; b <= 10; b++) {
    if (b == 7) {
        // console.log("Stop on number 7.")
        break;
    }
    // console.log(`Value is ${b}.`)
}

for (let c = 1; c <= 10; c++) {
    if (c == 7) {
        console.log("Stop on number 7.")
        continue;
    }
    console.log(`Value is ${c}.`)
}