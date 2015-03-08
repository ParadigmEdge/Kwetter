/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
  var app = angular.module('App', []);
    
    app.config(['$routeProvider',
    function($routeProvider) {
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
        this.addTweet = function(tweet){
            var wholeTweet = tweet;
            var tags = [];
            var mentions = [];
            while(wholeTweet.indexOf("#")>-1){
                var start = wholeTweet.indexOf("#");
                var end = wholeTweet.IndexOf(" ", start);
                var tag = wholeTweet.substring(start+1, end);
                wholeTweet.replace("#"+tag,"");
                tags.push(tag);
            }
            while(wholeTweet.indexOf("@")>-1){
                var start = wholeTweet.indexOf("@");
                
                var end1 = wholeTweet.IndexOf(" ", start);
                var end2 = wholeTweet.IndexOf("#", start);
                var end3 = wholeTweet.IndexOf("@", start);
                
                var end;
               
                var mention = wholeTweet.substring(start+1, end);
                wholeTweet.replace("@"+wholeTweet,"");
                mentions.push(mention);
            }
            //TODO: split on tags and mentions
            var newTweet = {
                tweetId: (this.users[this.currentUser].tweets.length) + 1,
                userId: this.currentUser,
                tweetDate: new Date(),
                tweetContent: tweet,
                tweetTags: [],
                tweetMentions: [],
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
            };
            this.users[this.currentUser].addTweet(newTweet);
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
            tweetDate: new Date(),
            tweetContent: "specna arms makes decent stuff, check it out!",
            tweetTags: [],
            tweetMentions: ["Link", "Ba"],
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
            tweetDate: new Date(),
            tweetContent: "tweety tweeter tweeting tweet",
            tweetTags: ["tweet"],
            tweetMentions: ["Link"],
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
            tweetDate: new Date(),
            tweetContent: "specna arms makes decent stuff.",
            tweetTags: ["AEG","specna arms"],
            tweetMentions: ["Link"],
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
            tweetDate: new Date(),
            tweetContent: "Still broke",
            tweetTags: ["nocash","broke"],
            tweetMentions: ["Link"],
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
            tweetDate: new Date(),
            tweetContent: "wasted...",
            tweetTags: ["sick", "wasted"],
            tweetMentions: ["Ba"],
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
            tweetDate: new Date(),
            tweetContent: "Let's party!",
            tweetTags: ["yolo"],
            tweetMentions: ["Ba"],
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
            tweetDate: new Date(),
            tweetContent: "Was fun at the cinema let's do it again.",
            tweetTags: ["Pathé", "movies"],
            tweetMentions: ["Yongyi"],
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
            tweetDate: new Date(),
            tweetContent: "Got owned in pool..",
            tweetTags: ["pool"],
            tweetMentions: ["Yongyi"],
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
    
    var testTrends = ["JEA", "DPI", "Specna arms", "Banana", "Chappie"];
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