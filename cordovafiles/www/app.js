// var homeBaseApp = {

//   start: function(){
//     this.$container = $("#content");

//     this.allMembers();
//   },

//   displayHtml: function(element){
//     this.$container.html(element);
//   },

//   allMembers: function(){
//     Family.getFamily().done(function(family){
//       userFamily = new Family(family)
//       var familyListView = new FamilyListView(userFamily);
//       var familyListHtml = familyListView.render();
//       this.displayHtml(familyListHtml);
//     }.bind(this));
//   }
// }

// $(document).ready(function(){
//   homeBaseApp.start();
// })


var homeBaseApp = {

  start: function(){
    this.$container = $("#content");

    this.allRewards();
  },

  displayHtml: function(element){
    this.$container.html(element);
  },

  allRewards: function(){
    Reward.getMemberRewards().done(function(family){
      console.log(family)
      var rewardListView = new RewardListView(family);
      var rewardListHtml = rewardListView.render();
      this.displayHtml(rewardListHtml);
    }.bind(this));
  }
}

$(document).ready(function(){
  homeBaseApp.start();
})

