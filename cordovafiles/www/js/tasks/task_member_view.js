function TaskMemberView(member){
  this.member = member;
  this.$el = $("<div></div>");
  this.template = Handlebars.compile($("#task-member-template").html());
}

TaskMemberView.prototype.render = function(){
  this.$el.html(this.template(this.taskMemberTemplateData()));

  return this.$el;
};

TaskMemberView.prototype.taskMemberTemplateData = function() {
  return {
    name: this.member.name,
    assignedTasks: this.member.assignedTasks,
    completedTasks: this.member.completedTasks
  };
};
