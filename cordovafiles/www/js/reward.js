function Reward(rewardParams){
  this.name = rewardParams.name;
  this.cost = rewardParams.cost;
  this.category = rewardParams.category;
}

Reward.getMemberRewards = function(){
  return $.get('http://localhost:3000/rewards.json');
}
