//synchronous = Executes line by line consecutively in a squentail manner
//              Code that waits for an operation to complete

// asynchoronous = Allow multiple operations to be performed concurrently w/out waiting
//                 Doesn't block the execution flow and allows the program to continue
//                 (I/O operations, network requests, fethcing data)
//                 Handled with: Callback, Promises, Async/Await

function func1(callback){
setTimeout(()=> {console.log("task 1");callback()},3000);
}
function func2(){
console.log("task 2");
console.log("task 3");
console.log("task 4");
}

func1(func2);   