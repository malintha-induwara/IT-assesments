// for (let i = 1; i <= 10; i++) {
//   setTimeout(()=>{
//     console.log(i);
//   },i * 2000);
// }


let count =0;

let intervalId=setInterval(() => {
    console.log(count++);
    if(count==10){
        clearInterval(intervalId);
    }
}, 1000);