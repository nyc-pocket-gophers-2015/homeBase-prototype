function MemberView(member){
  this.member = member;
  console.log(this.member)
  this.$el = $("<div></div>");
  this.template = Handlebars.compile($("#member-template").html());
}

MemberView.prototype.render = function(){
  this.$el.html(this.template(this.memberTemplateData()));

  return this.$el;
};

MemberView.prototype.memberTemplateData = function() {
  return {
    name: this.member.name,
    assignedTasks: this.member.assignedTasks,
    completedTasks: this.member.completedTasks
  };
};
