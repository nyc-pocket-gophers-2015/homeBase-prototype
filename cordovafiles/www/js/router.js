Router = {

  getFamilyMembers: function(){
    return $.get("http://localhost:3000/families.json");
  },

  getFamilyRewards: function(){
    return $.get("http://localhost:3000/rewards.json")
  },

  get
}
