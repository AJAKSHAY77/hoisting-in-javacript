{ 
    console.log(x); // refrence error
    let x = "hello";
    console.log(x); // temporal dead zone using declaring x using let and accessing x before it is initialize call tdz
}
