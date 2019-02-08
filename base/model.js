window.Model = function(options){
  let resourceName = options.resourceName
  return {
    init:function(){
      var APP_ID = 'IKjhPRA3flRCxi6Otma5TdNf-gzGzoHsz';
      var APP_KEY = 'WoAAgiCgOg8T9h74DwsC1Aj2';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch:function(){
      var query = new AV.Query(resourceName);
      return query.find(); //returns a promise object
    },
    save:function(object){
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object)
    }
  }
}