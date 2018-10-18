console.log('Starting app');

//it`s actually the time you`re gonna wait
setTimeout(function () {
    console.log('Inside of callback');
} , 2000 ); //2000 msec to wait

console.log('Finishing app');