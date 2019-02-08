window.Controller = function(options){
  var init = options.init;
  
  let object = {
    view:null,
    model:null,
    init:function(view,model){
      this.view = view;
      this.model =model;
      this.model.init();
      init.call(this,view,model); //this init is options.init; object.init calls options.init
      this.bindEvents.call(this);
    },
  }
  
  for(let key in options){
    if(key !== 'init'){
      object[key] = options[key] //copy the keys in options to object
    }
  } 

  return object
}