function FamilyListView(family){
  this.family = family;
  this.template = Handlebars.compile($("#family-list-template").html());
  this.$el = $("<div></div>");
}

FamilyListView.prototype.render = function(){
  this.$el.html(this.template(this.familyTemplateData()));
  (this.family.members).forEach(function(member){
    var currentMember = new Member(member)
    var singleMemberView = new MemberView(currentMember);
    this.$el.find("#members").append(singleMemberView.render());
  }, this);

  return this.$el;
};

FamilyListView.prototype.familyTemplateData = function() {
  return {
    date: new Date().toDateString(),
    familyName: this.family.surname,
    unassignedTasks: this.family.unassignedTasks
  };
};
