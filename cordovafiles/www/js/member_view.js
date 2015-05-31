function MemberRowView(member){
  this.member = member;
  console.log(this.member)
  this.$el = $("<div></div>");
  this.template = Handlebars.compile($("#member-template").html());
}

MemberRowView.prototype.render = function(){
  this.$el.html(this.template(this.templateData()));

  return this.$el;
};

MemberRowView.prototype.templateData = function() {
  return {
    name: this.member.name,
    assignedTasks: this.member.assignedTasks,
    completedTasks: this.member.completedTasks
  };
};
