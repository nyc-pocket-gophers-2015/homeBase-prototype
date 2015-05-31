function TaskFamilyListView(family){
  this.family = family;
  this.template = Handlebars.compile($("#task-list-template").html());
  this.$el = $("<div></div>");
}

TaskFamilyListView.prototype.render = function(){
  this.$el.html(this.template(this.taskFamilyTemplateData()));
  (this.family.members).forEach(function(member){
    var currentMember = new Member(member)
    var singleTaskMemberView = new TaskMemberView(currentMember);
    this.$el.find("#members").append(singleTaskMemberView.render());
  }, this);

  return this.$el;
};

TaskFamilyListView.prototype.taskFamilyTemplateData = function() {
  return {
    date: new Date().toDateString(),
    unassignedTasks: this.family.unassignedTasks
  };
};
