function MainFamilyListView(family){
  this.family = family;
  this.template = Handlebars.compile($("#main-list-template").html());
  this.$el = $("<div></div>");
}

MainFamilyListView.prototype.render = function(){
  this.$el.html(this.template(this.mainFamilyTemplateData()));
  (this.family.members).forEach(function(member){
    console.log(member)
    var currentMember = new Member(member)
    console.log(currentMember)
    var singleMainMemberView = new MainMemberView(currentMember);
    this.$el.find("#members").append(singleMainMemberView.render());
  }, this);

  return this.$el;
};

MainFamilyListView.prototype.mainFamilyTemplateData = function(){
  return {
    surname: this.family.surname
  };
}

