angular.module("kwetterApp.services",[]).factory("User", function($resource){
    return $resource('http://localhost:23761/Kwetter_Server/api/kwetter/users/:id',{id:'@id'},{
        get:{method:'GET'}
        //update: {method: 'PUT'}
    });
}).factory("Tweet", function($resource){
    return $resource('http://localhost:23761/Kwetter_Server/api/kwetter/tweets/:id', {id:'@id'},{
        get: {method:'GET', isArray:true},
        update: {method: 'PUT'},
        post: {method:'POST'}
    });
}).factory("Mention", function($resource){
    return $resource('http://localhost:23761/Kwetter_Server/api/kwetter/tweets/mention/:id',{id:'@id'},{
        get:{method:'GET', isArray:true}
    });
});