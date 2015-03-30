angular.module("kwetterApp.controllers",[]).controller('mainController',function($scope, $rootScope, $stateParams, $state, $resource, User, Tweet, Mention){
    
    $scope.allUsers=User.query();
    $rootScope.allTweets=Tweet.query(); //usage of rootScope = same as making it a global variable, do it sparingly and only for data 
    
    $scope.allTweetsWithMention=Mention.get({id:"Hans"});
    $scope.trends=["Most trending", "Very trending", "Little trending"]; //TODO
    
    $scope.selectedUser=User.get({id:"Hans"});
    $scope.selectedUserTweets=Tweet.query({id:"Hans"});
    $scope.currentUser=User.get({id:"Hans"});
    
    $scope.selectedTab = 3;   // main page tweets tab
    $scope.selectedUserName = "Hans";  // id of the selected page, assumption: community pages are also users.
    $scope.currentUserName = "Hans";   // fake logged in user, does not work if redirected from other page but only mock anyways
    $scope.selectedTimelineTab = 1; // personal timeline tab / mentions tab. refactor to own controller?
    
    $scope.setSelectedUser = function(userName){
        $scope.selectedUser=User.get({id:userName});
        $scope.selectedUserTweets=Tweet.query({id:userName});
        $scope.selectedUserName = userName;
    };
    $scope.setCurrentUser = function(userName){
        $scope.currentUser=User.get({id:userName});
        $scope.currentUserName = userName;
    };
    $scope.setTab = function(newvalue){
        $scope.selectedTab = newvalue;
    };
    $scope.isSet = function(tabName){
        return($scope.selectedTab === tabName);
    };
    $scope.setTimelineTab = function(newvalue){
        $scope.selectedTimelineTab = newvalue;
    };
    $scope.timelineTabIsSet = function(tabName){
        return($scope.selectedTimelineTab === tabName);
    };
}).controller('dataTestController',function($scope,$rootScope, User, Tweet){
    $scope.allUsers=User.query();
    $scope.allTweets=Tweet.query();
    $scope.selectedUser=User.get({id:"Hans"});
    $scope.selectedUserTweets=Tweet.query({id:"Hans"});
}).controller('tweetController',function($scope,$rootScope, Tweet){
    $scope.newTweetContent = "";
    
    $scope.addTweet = function(){
        if($scope.newTweetContent !== ""){
            Tweet.save({id:$scope.currentUserName},$scope.newTweetContent)
            .$promise.then(function(){
                $scope.refresh();
            });
        }
    };
    
    $scope.refresh = function(){
        $scope.newTweetContent = "";
        $rootScope.allTweets = Tweet.query();
    };
}).controller('timelineController',function(){

});

//NOT USED
//var newDate = function(){
//    var date;
//
//    var date = new Date();
//    var dd = date.getDate();
//    var mm = date.getMonth()+1; //January is 0!
//    var yyyy = date.getFullYear();
//    var HH = date.getHours();
//    var MM = date.getMinutes();
//
//    if(dd<10) {
//        dd='0'+dd;
//    } 
//
//    if(mm<10) {
//        mm='0'+mm;
//    } 
//
//    date = mm+'/'+dd+'/'+yyyy;
//    return date;
//};