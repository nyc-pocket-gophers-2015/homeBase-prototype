Router = {

  getFamilyMembers: function(){
    return $.get("http://localhost:3000/families.json");
  },

  getMemberRewards: function(){
    return $.get("http://localhost:3000/rewards.json")
  },
}
