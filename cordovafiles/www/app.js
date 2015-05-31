var homeBaseApp = {

  start: function(){
    this.$container = $("#content");

    this.allMembers();
  },

  displayHtml: function(element){
    this.$container.html(element);
  },

  allMembers: function(){
    Family.getFamily().done(function(family){
      userFamily = new Family(family)
      var familyListView = new FamilyListView(userFamily);
      var familyListHtml = familyListView.render();
      this.displayHtml(familyListHtml);
    }.bind(this));
  }
}

$(document).ready(function(){
  homeBaseApp.start();
  Reward.setListeners();
  Family.setListeners();
})


// var homeBaseApp = {

//   start: function(){
//     this.$container = $("#content");

//     this.allMembers();
//   },

//   displayHtml: function(element){
//     this.$container.html(element);
//   },

//   allMembers: function(){
//     Reward.getMemberRewards().done(function(members){
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

