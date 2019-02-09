!function(){
  var duration = 40;
  $('.actions').on('click','button',function(q){
    let $button = $(q.currentTarget);
    let speed = $button.attr('data-speed');
    $button.addClass('active')
      .siblings('.active').removeClass('active');
    switch(speed){
      case 'slow':
        duration = 80
        break
      case 'normal':
        duration = 40
        break
      case 'fast':
        duration = 10
        break
    }
    })
  
  function writeCode(prefix,code,fn){
    let container = document.getElementById('code');
    let styleTag = document.getElementById('styleTag');
    let n=0;
    setTimeout(function inc(){
      n += 1;
      container.innerHTML = Prism.highlight(code.substring(0,n),Prism.languages.css);
      styleTag.innerHTML = code.substring(0,n);
      container.scrollTop = container.scrollHeight;
      if(n < code.length ){
        setTimeout(inc,duration);
      }else{
        fn && fn.call();
      }
    }, duration);
  } 
  let code = `
/* We want to draw a Miffy! */

.preview{
  background:#1a3a73;
  width:50%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.miffy-wrapper{
  height: 324px;
  width:190px;
  margin:auto;
  position: relative;
}

.miffy-wrapper > *{
  background: white;
  border:3px solid black;
}

/* Let's create Miffy's ears first */

.miffy-wrapper > .ears{
  height: 100px;
  width:50px;
  position: absolute;
  border-bottom: 3px solid white;
}

.miffy-wrapper > .ears.left{
  border-radius: 60px 60px 30px 30px / 120px 120px 80px 80px;
  right:50%;
  margin-right: 10px;
  transform: rotate(-15deg);
}


.miffy-wrapper > .ears.right{
  border-radius: 60px 60px 30px 30px / 120px 120px 80px 80px;
  left:50%;
  margin-left: 10px;
  transform: rotate(6deg);
}

/* Then we move on to its head. */

.miffy-wrapper > .head{
  width:155px;
  height:127px;
  border-radius: 65px 65px 78px 78px / 70px;
  position: absolute;
  left:50%;
  transform: translateX(-78px);
  top:83px;
}

/* Its lovely eyes. */

.miffy-wrapper > .eyes{
  border:4px solid black;
  width:6px;
  height:6px;
  border-radius:50%;
  top:155px;
  position: absolute;
}

.miffy-wrapper > .eyes.left{
  left:28%;
}

.miffy-wrapper > .eyes.right{
  right:28%;
}

/* Oooops! Don't forget its lips. XD */

.miffy-wrapper > .lips{
  position: absolute;
  border-width: 2px;
  width:18px;
  border-radius:30%;
  top:184px;
  left:45%;
}

.miffy-wrapper > .lips.left{
  transform:rotate(30deg);
}

.miffy-wrapper > .lips.right{
  transform:rotate(-30deg);
}

/* It needs clothes. */

.miffy-wrapper > .body{
  position: absolute;
  width:143px;
  height:85px;
  background:#ec6726;
  border-radius: 10px 10px 80px 80px / 20px 20px 30px 30px;
  top:190px;
  left:50%;
  transform: translateX(-71px);
  border: 4px solid black;
}

.miffy-wrapper > .body::before{
  content:'';
  display:block;
  width:45px;
  height:20px;
  background:#ec6726;
  top:-1px;
  left:-20px;
  border: 4px solid black;
  border-bottom:transparent;
  transform:rotate(-67deg);
  border-radius: 10px 40px 5px 5px / 8px 15px 10px 10px;
  position: absolute;
}

.miffy-wrapper > .body::after{
  content: '';
  display: block;
  width:45px;
  height:20px;
  background: #ec6726;
  top:-2px;
  right:-19px;
  border:4px solid black;
  border-bottom: transparent;
  transform: rotate(45deg);
  border-radius: 10px 40px 5px 5px / 8px 15px 10px 10px;
  position: absolute;
}

/* Hands and feet are at the end. */

.miffy-wrapper > .hands{
  width:21px;
  height:20px;
  position: absolute;
  background: white;
}

.miffy-wrapper > .hands.left{
  border-radius:5px 5px 5px 15px;
  transform:rotate(21deg);
  top: 219px;
  left: 12px;
}

.miffy-wrapper > .hands.right{
  border-radius:5px 5px 5px 15px;
  transform:rotate(-113deg);
  top: 216px;
  right: 11px;
}

.miffy-wrapper > .feet{
  width:40px;
  height:25px;
  position: absolute;
}

.miffy-wrapper > .feet.left{
  border-radius:18px 10px 10px 15px / 15px 8px 10px 10px;
  top: 266px;
  left: 55px;
}

.miffy-wrapper > .feet.right{
  border-radius:10px 18px 15px 10px / 8px 15px 10px 10px;
  top: 267px;
  right: 55px;
  transform: rotate(3deg);
}

/* Miffy's here!
* Thaaaaanks for watching.*/
  `
  writeCode('',code);

}.call()