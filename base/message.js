!function(){
  var view = View('section.message');

  var model =Model({resourceName:'Message'})

  var controller = Controller({
    messageList:null,
    myForm:null,
    init:function(view,model){
      this.messageList = view.querySelector('#messageList');
      this.myForm = view.querySelector('#postMessage');
      this.loadMessage();
    },
    loadMessage: function(){
      this.model.fetch()
      .then((messages)=>{
        let array = messages.map((i)=>{return i.attributes});
        array.forEach((item)=>{
          let li = document.createElement('li');
          li.innerText = `${item.name}: ${item.words}`;
          this.messageList.appendChild(li);
        })
      });
    },
    bindEvents:function(){
      this.myForm.addEventListener('submit',(q)=>{
        q.preventDefault();
        this.saveMessage();
      })
    },
    saveMessage:function(){
      let content = this.myForm.querySelector('input[name=content]').value;
      let name = this.myForm.querySelector('input[name=name]').value;
      if(content !== '' || name !== ''){
        this.model.save({'name':name,'words':content})
        .then((object)=> {
          let li = document.createElement('li');
          li.innerText = `${object.attributes.name}:${object.attributes.words}`;
          messageList.appendChild(li);
          this.myForm.querySelector('input[name=content]').value = '';
          this.myForm.querySelector('input[name=name]').value = '';
        },function (error){
          alert('failed to submit, please try later');
        })
      }
    }
  })

  /* original controller
    var controller = {
    view:null,
    model:null,
    messageList:null,
    myForm:null,
    init: function(view,model){
      this.view = view;
      this.model = model;
      this.messageList = view.querySelector('#messageList');
      this.myForm = view.querySelector('#postMessage');
      this.model.init();
      this.loadMessage();
      this.bindEvents();
    },
    loadMessage: function(){
      this.model.fetch()
      .then((messages)=>{
        let array = messages.map((i)=>{return i.attributes});
        array.forEach((item)=>{
          let li = document.createElement('li');
          li.innerText = `${item.name}: ${item.words}`;
          this.messageList.appendChild(li);
        })
      });
    },
    bindEvents:function(){
      let myForm = document.getElementById('postMessage');
      this.myForm.addEventListener('submit',(q)=>{
        q.preventDefault();
        this.saveMessage();
      })
    },
    saveMessage:function(){
      let content = this.myForm.querySelector('input[name=content]').value;
      let name = this.myForm.querySelector('input[name=name]').value;
      if(content !== '' || name !== ''){
        this.model.save({'name':name,'words':content})
        .then((object)=> {
          let li = document.createElement('li');
          li.innerText = `${object.attributes.name}:${object.attributes.words}`;
          //let messageList = document.querySelector('#messageList');
          messageList.appendChild(li);
          this.myForm.querySelector('input[name=content]').value = '';
          this.myForm.querySelector('input[name=name]').value = '';
        },function (error){
          alert('failed to submit, please try later');
        })
      }
    }*/
  
  controller.init(view,model);
}.call()
