//1.
/*const repeatedFunction = () => {
    console.log('Repeated function executed!');

};
const intervalID = setInterval(repeatedFunction,1000);//Executes every 1 sec.*/


//2.
//in case you want to stop after some time

//function to be executed at interval

function repeatedFunction() {
    console.log('Executing repeated function..');

}
// set an interval (execute repeatedFunction every 1000 milisconds)

const intervalId = setInterval(repeatedFunction,1000);

//after some time (e.g , 5000 miliseconds), stop the interval 

setTimeout(() => {
    clearInterval(intervalId);//stop the interval
    console.log('Interval stopped.');

}, 5000);