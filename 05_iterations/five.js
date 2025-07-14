// For each loop
/*
Used only with arrays to run a function once for each element.
Syntax:
item: current element
index (optional): index of current element
array (optional): the entire array
*/

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(lang){
    // console.log(lang)   
})

coding.forEach((item) => {
      console.log(item)
})

function printMe(lang){
    console.log(lang)
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(`${item.languageName}:- ${item.languageFileName}`)
})
