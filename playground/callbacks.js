var getUser = function(id, callback){
    var user = {
        id: id
        ,name: 'Erfan'
    };

    setTimeout(function(){
        callback(user);
    } , 3000);
};

getUser(31, function(userObject){
    console.log(userObject);
});