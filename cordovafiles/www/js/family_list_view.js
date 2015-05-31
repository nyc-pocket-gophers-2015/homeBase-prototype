function FamilyListView(family){
  this.family = family;
  this.template = Handlebars.compile($("#family-list-template").html());
  this.$el = $("<div></div>");
}

FamilyListView.prototype.render = function(){
  this.$el.html(this.template(this.familyTemplateData()));
  (this.family.members).forEach(function(member){
    var currentMember = new Member(member)
    var singleTaskMemberView = new TaskMemberView(currentMember);
    this.$el.find("#members").append(singleTaskMemberView.render());
  }, this);

  return this.$el;
};

FamilyListView.prototype.familyTemplateData = function() {
  return {
    date: new Date().toDateString(),
    unassignedTasks: this.family.unassignedTasks
  };
};
