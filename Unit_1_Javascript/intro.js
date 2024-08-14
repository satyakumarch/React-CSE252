
// var name="satya kumar";
// console.log(name);

// var age="42";
// console.log(age);

// let place="kapilvastu";
// console.log(place);

// let climate="winter";
// console.log(climate);

// function display(username,userage){
//     return 'my insparation name is'+'\n'+username+'\n'+'his age is '+userage;
// }
// console.log(display(name,age));

// function display(username,userage){
//     return 'my inspration palce is '+place+'\n'+'what palce temp was '+climate;
// }
// console.log(display(climate));

// let coursename="react";
// let coursecode="INT252";
// function cse(course,coursecode){
//     return 'the course '+'\n '+coursename+'\n'+'coursecode '+coursecode;
// }
// console.log(cse(coursename,coursecode));


///////////////Global Scope///////////////////

// var number=50;
// function addition(){
//     var sum=number*10;
//     console.log(sum);
//     console.log(number);
// }
// addition();
// console.log(number);

/////////////////////Local Scopt///////////////////////////////
// function multiply(){
//     var number=50;
//     console.log(number);

//     var number=100;
//     console.log(number);


//     var number=200;
//     var square=number*number;
//     console.log(square);
// }
// multiply();


///////////////block scope /////////////////
function varscope(){
    let x=1;
    if(true){
        let x=2;
        console.log(x);

    }
    console.log(x);
}
varscope();

console.log("let");

function varscope1(){
    var x=1;
    if(true){
        var x=2;
        console.log(x);

    }
    console.log(x);
}
varscope1();
console.log("var");

function varscope2(){
    const x=1;
    if(true){
        const x=2;
        console.log(x);

    }
    console.log(x);
}
varscope2();
console.log("const")
