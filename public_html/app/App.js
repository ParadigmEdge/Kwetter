/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
  var app = angular.module('App', []);
    app.controller('App', [function(){
        //mockdata
        this.users = [yongyi,random,ba];
        this.selectedTab = 3; //tweets tab
        this.selectedUser = 1; //id of the selected page, assumption: community pages are also users.
        this.currentUser = null; //loged in user
        this.setSelectedUser = function(userName){
            this.currentUser = userName;
        };
        this.setTab = function(newvalue){
            this.selectedTab = newvalue;
        };
        this.isSet = function(tabName){
            return(this.selectedTab === tabName);
        };
    }]);

    var testTweets = [
        {
            tweetId: "1",
            tweetDate: "1:04",
            tweetContent: "wasted...",
            tweetTags: ["yolo"],
            tweetMentions: ["scumbag"]
        },
        {
            tweetId: "2",
            tweetDate: "0:55",
            tweetContent: "360 no scope barrel roll ladder jump!",
            tweetTags: ["sick","360trickshot"],
            tweetMentions: ["scumbag"]
        }
    ];
    var testTweets2 = [
        {
            tweetId: "3",
            tweetDate: "1:04",
            tweetContent: "wasted...",
            tweetTags: ["yolo"],
            tweetMentions: ["scumbag"]
        },
        {
            tweetId: "4",
            tweetDate: "0:55",
            tweetContent: "360 no scope barrel roll ladder jump!",
            tweetTags: ["sick","360trickshot"],
            tweetMentions: ["scumbag"]
        }
    ];

    var yongyi = {
        id:1,
        name:"Yongyi",
        lastname:"Jin",
        location:"eindhoven",
        web:"ryjin.me",
        webURL:"http://www.ryjin.me",
        bio:"software engineer student",
        avatar_thumb:"assets/img/avatar_yongyi.jpg",
        tweets: testTweets,
        following:[randomio, ba],
        followers:["Randomio","Ba"] };
    var random = {
        id:2,
        name:"Link",
        lastname:"Notfound",
        location:"Treehouse",
        web:"link.me",
        webURL:"http://www.google.nl",
        bio:"savior",
        avatar_thumb:"assets/img/avatar_randomio.jpg",
        tweets:testTweets2,
        following:["Randomio","Ba"],
        followers:["Randomio","Ba"]};
    var ba = {
        id:3,
        name:"Ba",
        lastname:"Naan",
        location:"veldhoven",
        web:"Ba.me",
        webURL:"http://www.google.nl",
        bio:"software engineer student",
        avatar_thumb:"assets/img/avatar_ba.jpg",
        tweets:[],
        following:[],
        followers:[]};
})();