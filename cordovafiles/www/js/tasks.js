var TasksListView = function(){

  var tasks;

  this.initialize = function(){
    this.$el = $('<div/>');
    this.render();
  };

  this.setTasks =  function(list){
    tasks = list;
    this.render();
  };

  this.render = function(){
    this.$el.html(this.template(tasks));
    return this;
  };

  this.initialize();

};


