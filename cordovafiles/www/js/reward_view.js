function RewardView(reward){
  this.reward = reward;
  this.$el = $("<div></div>");
  this.template = Handlebars.compile($("#reward-template").html());
}

Reward.View.prototype.render = function(){
  this.$el.html(this.template(this.rewardTemplateData()));

  return this.$el;
};

Reward.View.prototype.rewardTemplateData = function() {
  return {
    name: this.reward.name,
    forMember: this.forMember,
    category: this.reward.category,
    cost: this.reward.cost
  };
};
