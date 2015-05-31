function Family(familyParams){
  this.surname = familyParams.familyName;
  this.members = familyParams.members;
  this.unassignedTasks = familyParams.unassignedTasks;
}

Family.getFamily = function(){
  return $.get('http://localhost:3000/families.json');
}

