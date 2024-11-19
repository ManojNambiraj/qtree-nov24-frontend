// Functionalities:

    // 1. Built-in functions

    // alert("hi")
    // console.log("hello");
 
    // 2. user defined functions // DRY ---> Don't repeat your code

        // a) normal function

        // function sum(a, b){                // function definition
        //     return a + b
        // }
        
        // console.log(sum(2, 50));
        // console.log(sum(5, 110));
        // console.log(sum(6, 70));
        // console.log(sum(8, 5));

        // b) Ananymous function

        // let demo = function(x) {
        //     return x * 2
        // }
        
        // console.log(demo(10));

        // c) Arrow function

        // let foo = (x, y, a) => console.log(x * y, a);
        
        
        // foo(100, 500000, "siva")
        
        // d) IIFE---> (Immediatly invoked function expression)

        // (() => {
        //     console.log("hello");
        // })();

        // (() => {
        //     console.log("ravi");
        // })();


function display(result) {
    console.log(result);
}


function sum(x, y, display) {
    let ans = x + y;
    
    display(ans)
}

sum(10, 5, display)

// https://miro.medium.com/v2/1*V5syja2casc0gCuu9zKV5g.png