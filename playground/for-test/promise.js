//tutrial to JavaScript 'promises'
var somePromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Hey, it woked!');
        resolve();
        reject('Unable to fulfill promise!');
    }, 2500)
});

somePromise.then(function(message){         //'then' is a Promise method which provides
    console.log('Success: ' + message);     //callback functions for both success cases and error cases
},function(errorMessage){
    console.log('Error: ' , errorMessage);
});    
