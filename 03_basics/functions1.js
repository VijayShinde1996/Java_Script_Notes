

function functionName(){
console.log("Hello Function!");
console.log("Hello Function!!");
console.log("Hello Function!!!");
}

// functionName
// functionName()

// function addTwoNumbers(a,b){
// addition = a+b
// console.log(addition);
// }

// addTwoNumbers(55,"56")
// addTwoNumbers("55",59)
// addTwoNumbers(null,59)

// const result = addTwoNumbers(55,"56")

// console.log(result);

// function subTwoNumbers(a,b){
//     sub = a+b
//     console.log("Vijay1")
//     return sub;
//     console.log("Vijay2");
    
//     }

// subTwoNumbers(56,55)

// const store = subTwoNumbers(222,11)
// console.log(store);

// function loginUserMessage(username) {
//     return `${username} is just logged in`
// }

// loginUserMessage("Vijay Shinde");  // return function will not give yu the results in this way
// console.log(loginUserMessage("Vijay Shinde"));

// const result = loginUserMessage("Vijay Shinde");
// console.log(result);

// function loginUserMessage(username) {
//     if(username) {return `${username} is just logged! in`}
//     else {return `Invalid User!`}
    
// }

// console.log(loginUserMessage("Vijay Shinde"));
// console.log(loginUserMessage(""));

// function AddEven(a) {
//     if (a % 2 ==0) {return `The Square of ${a} is: ${a**2}`}
//     else {return `The Cube of ${a} is: ${a**3}`}

// }

// console.log(AddEven(8));
// console.log(AddEven(5));

// function RestOperator(...a) {
//     return a
// }

// console.log(RestOperator(1,2,3,4,5,6));

// function RestOperator(a,b,c, ...d) {
//     return `This is a:${a}, b:${b}, c:${c}, d:${d}.`
// }

// console.log(RestOperator(1,2,3,4,5,6,7,8,9,10));

const a = {name:"Vijay Shinde", age:29}

function UserDetails(anyObject){
    console.log(`User Name is: ${a["name"]} and his Age is: ${a["age"]}`)
}

UserDetails(a)