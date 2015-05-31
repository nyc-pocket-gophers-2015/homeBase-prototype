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
      var familyListView = new FamilyListView(family);
      var familyListHtml = familyListView.render();
      this.displayHtml(familyListHtml);
    }.bind(this));
  }
}

$(document).ready(function(){
  homeBaseApp.start();
})

