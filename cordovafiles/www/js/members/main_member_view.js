function MainMemberView(member){
  this.member = member;
  this.$el = $("<div></div>");
  this.template = Handlebars.compile($("#main-member-template").html());
}

MainMemberView.prototype.render = function(){
  this.$el.html(this.template(this.mainMemberTemplateData()));

  return this.$el;
};

MainMemberView.prototype.mainMemberTemplateData = function() {
  return {
    name: this.member.name,
    role: this.member.role,
    badges: this.member.badges,
    taskPoints: this.member.taskPoints,
    pendingRewards: this.member.pendingRewards,
  };
};
