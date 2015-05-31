function Reward(rewardParams){
  this.name = rewardParams.name;
  this.cost = rewardParams.cost;
  this.category = rewardParams.category;
}

Reward.getMemberRewards = function(){
  return $.get('http://localhost:3000/rewards.json');
}

Reward.getMemberRewardsPage = function(event){
    event.preventDefault();
    Reward.getMemberRewards().done(function(family){
      userFamily = new Family(family)
      var rewardListView = new RewardListView(userFamily);
      var rewardListHtml = rewardListView.render();
      homeBaseApp.displayHtml(rewardListHtml);
    });
};

Reward.setListeners = function(){
  $("#reward-button").on('click', this.getMemberRewardsPage);
};
