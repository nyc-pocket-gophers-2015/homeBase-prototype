function FamilyListView(family){
  this.members = family;
  this.template = _.template($("#family-list-template").html());
  this.$el = $("<div></div>");
}

FamilyListView.prototype.render = function(){
  this.$el.html(this.template());
  (this.members.members).forEach(function(member){
    var memberView = new MemberRowView(member);
    this.$el.find("#members").append(memberView.render());
  }, this);

  return this.$el;
};
