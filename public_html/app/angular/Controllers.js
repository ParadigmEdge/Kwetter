angular.module("kwetterApp.controllers",[]).controller('mainController',function($scope, $stateParams, $state, $resource, User, Tweet){
    
    $scope.allUsers=User.query();
    $scope.allTweets=Tweet.query();
    $scope.selectedUser=User.get({id:"Hans"});
    $scope.selectedUserTweets=Tweet.query({id:"Hans"});
    $scope.currentUser=User.get({id:"Hans"});;
    
    $scope.selectedTab = 3;   // main page tweets tab
    $scope.selectedUserName = "Hans";  // id of the selected page, assumption: community pages are also users.
    $scope.currentUserName = "Hans";   // fake logged in user, does not work if redirected from other page but only mock anyways
    $scope.selectedTimelineTab = 1; // personal timeline tab / mentions tab. refactor to own controller?
    
    console.log($scope.selectedUser);
    
    this.setSelectedUser = function(userName){
        $scope.selectedUser=User.get({id:userName});
        $scope.selectedUserTweets=Tweet.query({id:userName});
        $scope.selectedUserName = userName;
    };
    this.setCurrentUser = function(userName){
        $scope.currentUser=User.get({id:userName});
        $scope.currentUserName = userName;
    };
    this.setTab = function(newvalue){
        $scope.selectedTab = newvalue;
    };
    this.isSet = function(tabName){
        return($scope.selectedTab === tabName);
    };
    this.setTimelineTab = function(newvalue){
        this.selectedTimelineTab = newvalue;
    };
    this.timelineTabIsSet = function(tabName){
        return(this.selectedTimelineTab === tabName);
    };
}).controller('dataTestController',function($scope, User, Tweet){
    $scope.allUsers=User.query();
    $scope.allTweets=Tweet.query();
    $scope.selectedUser=User.get({id:"Hans"});
    $scope.selectedUserTweets=Tweet.query({id:"Hans"});
    //HOW TO GET TAGS AND MENTIONS FROM XML OBJECT? (=resource by itself?)
    
    console.log($scope.selectedUserTweets);
    // can't go deeper -> $scope.selectedUserTweets.tags = undefined
}).controller('timelineController',function(){
    
}).controller('tweetController',function(){
    this.newTweetContent = "";
    this.tweet = {};

    this.addTweet = function(user){  
        var tweetContent = this.newTweetContent;
        var tags = [];
        var mentions = [];

        var tagslistarr = this.newTweetContent.split(' ');
        for (var i = 0; i < tagslistarr.length; i++) { 
            if(tagslistarr[i].indexOf('#') === 0){
              var pattern = tagslistarr[i],
              re = new RegExp(pattern, "g");
              tweetContent = tweetContent.replace(re, "");

              tags.push(tagslistarr[i]);
            }
            if(tagslistarr[i].indexOf('@') === 0){
              var pattern = tagslistarr[i],
              re = new RegExp(pattern, "g");
              tweetContent = tweetContent.replace(re, "");

              mentions.push(tagslistarr[i]);  
            }
        }    

        this.tweet.tweetId = (user.tweets.length) +1;
        this.tweet.userId = user.id;
        this.tweet.tweetDate = new Date();
        this.tweet.tweetContent = tweetContent;
        this.tweet.tweetTags = tags;
        this.tweet.tweetMentions = mentions;
        this.tweet.getDate = function(){
            var date = this.tweetDate;
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            var yyyy = date.getFullYear();
            var HH = date.getHours();
            var MM = date.getMinutes();

            if(dd<10) {dd='0'+dd;} 
            if(mm<10) {mm='0'+mm;} 
            date = mm+'/'+dd+'/'+yyyy+' '+HH+':'+MM;
            return date;
        };

        user.tweets.push(this.tweet);
        allTweets.push(this.tweet); //hack, pushes to pos 0 in array. (need to sue sorting method)
        this.tweet = {};
    };
});

var newDate = function(){
    var date;

    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    var HH = date.getHours();
    var MM = date.getMinutes();

    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    } 

    date = mm+'/'+dd+'/'+yyyy;
    return date;
};