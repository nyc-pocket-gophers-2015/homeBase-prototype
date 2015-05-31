function MemberRowView(member){
  this.member = member;
  this.$el = $("<div></div>");
  this.template = Handlebars.compile($("#members-row-template").html());
}

MemberRowView.prototype.render = function(){
  this.$el.html(this.template(this.templateData()));

  return this.$el;
};

MemberRowView.prototype.templateData = function() {
  return {
    title: this.member.name,
    points: this.member.points
  };
};
