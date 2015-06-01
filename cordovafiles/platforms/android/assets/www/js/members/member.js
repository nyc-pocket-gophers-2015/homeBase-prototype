function Member(memberParams){
  this.role = memberParams.role;
  this.name = memberParams.name;
  this.badges = memberParams.badges
  this.taskPoints = memberParams.task_points || 0;
  this.color = memberParams.color;
  this.imgUrl = memberParams.imgUrl;
  this.pendingRewards = memberParams.pendingRewards;
  this.assignedTasks = memberParams.assignedTasks;
  this.completedTasks = memberParams.completedTasks;
  this.events = memberParams.events;
}





