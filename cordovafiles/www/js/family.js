function Family(familyParams){
  this.surname = familyParams.familyName;
  this.members = familyParams.members;
}

Family.getFamily = function(){
  return $.get('http://localhost:3000/families.json');
}

