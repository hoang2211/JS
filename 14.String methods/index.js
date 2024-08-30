let userName = "ZoekLisz  ";

userName=userName.trim();
//toUpperCase() |toLowerCase() | repeat(so lan muon lap lai)
console.log(userName);
console.log(userName.charAt(0));
console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("z"));
console.log(userName.length);

let result = userName.startsWith(" ");
//endsWith("")|includes("")
//boolean check String 
if(result){
    console.log("Your username can't begin with ' ' ")
}else{
    console.log(userName);
}

let phoneNum ="123-456-7890";

phoneNum = phoneNum.replaceAll("-","/");
phoneNum = phoneNum.padStart(15,"0");
//Doi vs padEnd them string vao vi tri cuoi cung cua String
console.log(phoneNum);
