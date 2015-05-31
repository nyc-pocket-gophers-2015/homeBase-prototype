function Family(familyParams){
  this.surname = familyParams.familyName;
  this.members = familyParams.members;
  this.unassignedTasks = familyParams.unassignedTasks;
}

Family.getFamily = function(){
  return $.get('http://localhost:3000/families.json');
}

Family.getTaskPage = function(event){
    event.preventDefault();
    Family.getFamily().done(function(family){
      userFamily = new Family(family)
      var familyListView = new FamilyListView(userFamily);
      var familyListHtml = familyListView.render();
      homeBaseApp.$container.html(familyListHtml);
    });
};

Family.getMainPage = function(event){
    event.preventDefault();
    Family.getFamily().done(function(family){
      userFamily = new Family(family)
      var familyListView = new FamilyListView(userFamily);
      var familyListHtml = familyListView.render();
      homeBaseApp.$container.html(familyListHtml);
    });
}

Family.setListeners = function(){
  $("#task-button").on('click', this.getTaskPage);
  $("#home-button").on('click', this.getMainPage);
};
