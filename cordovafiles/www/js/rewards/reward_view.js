function RewardView(reward){
  this.reward = reward;
  this.$el = $("<div></div>");
  this.template = Handlebars.compile($("#reward-template").html());
}

RewardView.prototype.render = function(){
  this.$el.html(this.template(this.rewardTemplateData()));

  return this.$el;
};

RewardView.prototype.rewardTemplateData = function() {
  return {
    name: this.reward.name,
    category: this.reward.category,
    cost: this.reward.cost
  };
};
