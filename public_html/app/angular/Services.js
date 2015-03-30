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
}).factory("postTweetService", function($http, $q){
    return{
        postTweet:function(){
            return $http.get("http://localhost:23761/Kwetter_Server/api/kwetter/tweets")
            .then(function(response){
                if(typeof response.data === "object"){
                    return response.data;
                } else {
                    //no data
                    return $q.reject(response.data);
                }
            }, function(response){
                //something went wrong
                return $q.reject(response.data);
            });
        }
    };
});