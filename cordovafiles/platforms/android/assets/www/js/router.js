Router = {

  getFamilyMembers: function(){
    return $.get("http://10.0.0.53:3000/families.json");
  },

  getMemberRewards: function(){
    return $.get("http://10.0.0.53:3000/rewards.json")
  },
}
