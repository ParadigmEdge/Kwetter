angular.module("kwetterApp.services",[]).factory("User", function($resource){
    return $resource('http://localhost:23761/Kwetter_Server/api/kwetter/users/:id',{id:'@id'},{
        update: {method: 'PUT'}
    });
}).factory("Tweet", function($resource){
    return $resource('http://localhost:23761/Kwetter_Server/api/kwetter/users/:id/tweets',{id:'@id'},{
        update: {method: 'PUT'}
    });
});