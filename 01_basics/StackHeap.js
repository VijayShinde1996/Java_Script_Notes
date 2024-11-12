console.log()
 // Stack Memory
 let a = "Hello"
let b = a
 b = "Bye"
 console.log("Stack memory a: ", a);
 console.log("Stack memory b: ", b);

 let c = [1,"Hello1"]
 let d = c

 d = [2,"Bye1"]
 console.log("Heap memory c: ", c);
 console.log("Heap memory d: ", d);
 