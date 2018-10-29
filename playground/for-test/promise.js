//tutrial to JavaScript 'promise'
var asyncAdd = function(a, b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }
            else{
                reject('Error : Aruments must be numbers!');
            }
        }, 1500);
    });
}

asyncAdd(5, 7).then(function(res){
    console.log('Results: ', res)
    return asyncAdd(res, 33);
}).then(function(res){
    console.log('Should be 45', res);
}).catch(function(errorMessage){
    console.log(errorMessage);
});

/*
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
});    */
