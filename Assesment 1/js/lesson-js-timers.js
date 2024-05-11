//1. Set Timeouts

let timeout=setTimeout( ()=> {
    console.log('Hello World');
},6000)


clearTimeout(timeout);


//2. Set Interval

setInterval(()=>{
 console.log('Hello World');
},1000)

let greet = () => {
  console.log("Hellow");
};

let interval = setInterval(greet,1000)


