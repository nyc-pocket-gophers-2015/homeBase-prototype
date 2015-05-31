function RewardListView(rewards){
  this.rewards = rewards;
  this.template = Handlebars.compile($("#reward-list-template").html());
  this.$el = $("<div></div>");
}

RewardListView.prototype.render = function(){
  this.$el.html(this.template())
  this.rewards.forEach(function(reward){
    var currentReward = new Reward(reward)
    var singleRewardView = new RewardView(currentReward);
    this.$el.find("#rewards").append(singleRewardView.render());
  }, this);

  return this.$el;
};
