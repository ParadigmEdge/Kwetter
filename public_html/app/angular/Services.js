angular.module("kwetterApp.services",[]).factory("User", function($resource){
    return $resource('http://localhost:23761/Kwetter_Server/api/kwetter/users/:id',{id:'@id'},{
        update: {method: 'PUT'}
    });
}).factory("Tweet", function($resource){
    return $resource('http://localhost:23761/Kwetter_Server/api/kwetter/tweets/:id',{id:'@id'},{
        update: {method: 'PUT'}
    });
});