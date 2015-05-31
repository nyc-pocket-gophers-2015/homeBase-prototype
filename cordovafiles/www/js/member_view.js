function MemberRowView(member){
  this.member = member;
  this.template = _.template($("#members-row-template").html());
  this.$el = $("<div></div>");
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
