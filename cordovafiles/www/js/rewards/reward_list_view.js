function RewardListView(family){
  this.family = family;
  this.template = Handlebars.compile($("#reward-list-template").html());
  this.$el = $("<div></div>");
}

RewardListView.prototype.render = function(){
  this.$el.html(this.template());
  (this.family.members).forEach(function(member){
    (member.rewards).forEach(function(reward){
      var currentReward = new Reward(reward)
      var singleRewardView = new RewardView(currentReward);
      this.$el.find("#rewards").append(singleRewardView.render());
    }, this);
  }, this);

  return this.$el;
};
