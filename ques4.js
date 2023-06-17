{
    console.log(myVar); // Output: undefined
    console.log(myLet); // ReferenceError: myLet is not defined
    console.log(myConst); // ReferenceError: myConst is not defined
  
    var myVar = "Hello, var!";
    let myLet = "Hello, let!";
    const myConst = "Hello, const!";
  
    console.log(myVar); // Output: Hello, var!
    console.log(myLet); // Output: Hello, let!
    console.log(myConst); // Output: Hello, const!
  }
  