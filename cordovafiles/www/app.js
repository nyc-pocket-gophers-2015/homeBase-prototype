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
})

