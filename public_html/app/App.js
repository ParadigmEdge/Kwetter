/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
  var app = angular.module('App', ['ngRoute']);
    
    app.config(['$routeProvider',
    function($routeProvider) {
        console.log("route provider used");
        $routeProvider
        .when('/', {
        templateUrl: 'index.html',
        controller: 'App'
        })
        .when('/login', {
        templateUrl: 'login.html',
        controller: 'App'
        })
        .when('/main', {
        templateUrl: 'index.html',
        controller: 'App'
        })
        .when('/myView', {
        templateUrl: 'myView.html',
        controller: 'App'
        })
        .otherwise({
        redirectTo: 'app/components/shared/notfound.html',
        controller: 'App'
        });
    }]);

    app.controller('App', [function(){
        //mockdata
        this.users = [yongyi,link,ba];
        this.mentions = testTweets3;
        this.trends = testTrends;
//        this.timeline = allTweets.reverse();
        this.timeline = allTweets;
        this.selectedTab = 3;   // main page tweets tab
        this.selectedUser = 0;  // id of the selected page, assumption: community pages are also users.
        this.currentUser = 0;   // fake logged in user, does not work if redirected from other page but only mock anyways
        this.selectedTimelineTab = 1; // personal timeline tab / mentions tab
        this.setSelectedUser = function(userName){

            this.selectedUser = userName;
        };
        this.setCurrentUser = function(userName){
            this.currentUser = userName;
        };
        this.setTab = function(newvalue){
            this.selectedTab = newvalue;
        };
        this.isSet = function(tabName){
            return(this.selectedTab === tabName);
        };
        this.setTimelineTab = function(newvalue){
            this.selectedTimelineTab = newvalue;
        };
        this.timelineTabIsSet = function(tabName){
            return(this.selectedTimelineTab === tabName);
        };
        
    }]);
    
    app.controller('timelineController', [function(){
        this.getLatestTweet = function(tweets){
            console.log(tweets.length);
            var allTweets = [];
            allTweets = tweets;
            allTweets.sort(function(a,b){
                return a-b;
            });
            return allTweets[allTweets.length - 1];
        };
    }]);
    
    app.controller('tweetController', [function(){
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
//            allTweets.unshift(this.tweet); //hack, pushes to pos 0 in array. (need to sue sorting method)
            
            this.tweet = {};
        };
    }]);
    
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
    
    var testTweets = [
        {
            tweetId: "0",
            userId: "0",
            tweetDate: new Date("July 7, 777 07:07:07"),
            tweetContent: "specna arms makes decent stuff, check it out!",
            tweetTags: [],
            tweetMentions: ["@Link", "@Ba"],
            getDate: function(){
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
            }
        },
        {
            tweetId: "1",
            userId: "0",
            tweetDate: new Date("April 17, 2000 11:13:00"),
            tweetContent: "tweety tweeter tweeting tweet",
            tweetTags: ["#tweet"],
            tweetMentions: ["@Link"],
            getDate: function(){
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
            }
        },
        {
            tweetId: "2",
            userId: "0",
            tweetDate: new Date("December 5, 2009 11:23:09"),
            tweetContent: "specna arms makes decent stuff.",
            tweetTags: ["#AEG","#specna arms"],
            tweetMentions: ["@Link"],
            getDate: function(){
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
            }
        },
        {
            tweetId: "3",
            userId: "0",
            tweetDate: new Date("January 1, 2014 05:13:00"),
            tweetContent: "Still broke",
            tweetTags: ["#nocash","#broke"],
            tweetMentions: ["@Link"],
            getDate: function(){
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
            }
        }
    ];
    var testTweets2 = [
        {
            tweetId: "4",
            userId: "1",
            tweetDate: new Date("March 18, 2015 08:23:15"),
            tweetContent: "wasted...",
            tweetTags: ["#sick", "#wasted"],
            tweetMentions: ["@Ba"],
            getDate: function(){
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
            }
        },
        {
            tweetId: "5",
            userId: "1",
            tweetDate: new Date("October 13, 2008 02:13:00"),
            tweetContent: "Let's party!",
            tweetTags: ["#yolo"],
            tweetMentions: ["@Ba"],
            getDate: function(){
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
            }
        }
    ];
    var testTweets3 = [
        {
            tweetId: "6",
            userId: "1",
            tweetDate: new Date("October 13, 1979 11:43:10"),
            tweetContent: "Was fun at the cinema let's do it again.",
            tweetTags: ["#Pathé", "#movies"],
            tweetMentions: ["@Yongyi"],
            getDate: function(){
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
            }
        },
        {
            tweetId: "7",
            userId: "1",
            tweetDate: new Date("October 13, 2005 05:18:04"),
            tweetContent: "Got owned in pool..",
            tweetTags: ["#pool"],
            tweetMentions: ["@Yongyi"],
            getDate: function(){
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
            }
        }
    ];
    
    //TODO: trends, get them from all tweets, order by most occuring
    var testTrends = ["JEA", "DPI", "Specna arms", "Banana", "Chappie"];
    //TODO: fix this...this is just...no.
    var allTweets = testTweets.concat(testTweets2).concat(testTweets3);
    
    var yongyi = {
        id:0,
        name:"Yongyi",
        lastname:"Jin",
        location:"eindhoven",
        web:"ryjin.me",
        webURL:"http://www.ryjin.me",
        bio:"software engineer student",
        avatar_thumb:"assets/img/avatar_yongyi.jpg",
        tweets: testTweets,
        following:[],
        followers:[],
        addTweet : function(tweet){
            this.tweets.push(tweet);
        }
    };
    var link = {
        id:1,
        name:"Link",
        lastname:"Notfound",
        location:"Treehouse",
        web:"link.me",
        webURL:"http://www.google.nl",
        bio:"savior",
        avatar_thumb:"assets/img/avatar_random.jpg",
        tweets:testTweets2,
        following:[],
        followers:[],
        addTweet : function(tweet){
            this.tweets.push(tweet);
        }
    };
    var ba = {
        id:2,
        name:"Ba",
        lastname:"Naan",
        location:"veldhoven",
        web:"Ba.me",
        webURL:"http://www.google.nl",
        bio:"software engineer student",
        avatar_thumb:"assets/img/avatar_ba.jpg",
        tweets:[],
        following:[],
        followers:[],
        addTweet : function(tweet){
            this.tweets.push(tweet);
        }
    };
    
    yongyi.following.push(link, ba);
    yongyi.followers.push(link, ba);
    link.following.push(yongyi, ba);
    link.followers.push(yongyi, ba);
    ba.following.push(yongyi, link);
    ba.followers.push(yongyi, link);
})();