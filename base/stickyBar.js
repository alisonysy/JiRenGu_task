!function(){
  view = View('#stickyBar')

  controller = {
    view:null,
    init:function(view){
      this.view = view;
      this.bindEvents();
    },
    bindEvents:function(){
			window.addEventListener('scroll',(x)=>{
				if (window.scrollY>0){
					this.activate();
				}else{
					this.deactivate();
				}
			})
    },
    activate:function(){
      this.view.classList.add('stickyBar');
    },
    deactivate:function(){
      this.view.classList.remove('stickyBar');
    }
  }

  controller.init(view);
}.call()

