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
    console.log(`Outer loop: ${i}`)
    for (let j = 1; j <=5 ; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
        // console.log(i + '*' + j + ' = ' + i*j );
    }
    
}