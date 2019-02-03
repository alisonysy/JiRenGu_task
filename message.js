!function(){
  var view = document.querySelector('section.message');

  var model ={
    init:function(){
      var APP_ID = 'IKjhPRA3flRCxi6Otma5TdNf-gzGzoHsz';
      var APP_KEY = 'WoAAgiCgOg8T9h74DwsC1Aj2';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    //get the data
    fetch: function(){
      var query = new AV.Query('Message');
      return query.find(); //returns a promise object

    },
    //create data
    save:function(name,content){
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({ // it returns a promise obj
        name:name,
        words:content
      })
    }
  }

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
        console.log(array);
        array.forEach((item)=>{
          let li = document.createElement('li');
          li.innerText = `${item.name}:${item.words}`;
          this.messageList.appendChild(li);
        })
      });
    },
    bindEvents:function(){
      //let myForm = document.getElementById('postMessage');
      this.myForm.addEventListener('submit',(q)=>{
        q.preventDefault();
        this.saveMessage();
      })
    },
    saveMessage:function(){
      let content = this.myForm.querySelector('input[name=content]').value;
      let name = this.myForm.querySelector('input[name=name]').value;
      this.model.save(name,content)
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
  };
  controller.init(view,model);
}.call()
