//Date(year,month,day,hour,minute,second,ms)

// const date = new Date(2024,0,1,2,3,4,5);
//                     //"2024 - 01= 02T12:00:00Z"
//                     //1700000000000000000000 no se tinh la milisecond
// const year = date.getFullYear();
// const month= date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const dayOfWeek = date.getDay();
const date = new Date();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);


console.log(date);


