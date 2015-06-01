function Family(familyParams){
  this.surname = familyParams.familyName;
  this.members = familyParams.members;
  this.unassignedTasks = familyParams.unassignedTasks;
}

Family.getFamily = function(){
  return $.get('http://10.0.0.53:3000/families.json');
}

Family.getTaskPage = function(event){
    event.preventDefault();
    Family.getFamily().done(function(family){
      userFamily = new Family(family)
      var taskFamilyListView = new TaskFamilyListView(userFamily);
      var taskFamilyListHtml = taskFamilyListView.render();
      homeBaseApp.$container.html(taskFamilyListHtml);
    });
};

Family.getMainPage = function(event){
    event.preventDefault();
    Family.getFamily().done(function(family){
      userFamily = new Family(family)
      var mainFamilyListView = new MainFamilyListView(userFamily);
      var mainFamilyListHtml = mainFamilyListView.render();
      homeBaseApp.$container.html(mainFamilyListHtml);
    });
}

Family.setListeners = function(){
  $("#task-button").on('click', this.getTaskPage);
  $("#home-button").on('click', this.getMainPage);
};
