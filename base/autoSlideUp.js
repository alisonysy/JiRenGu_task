!function(){

  let specialTags = document.querySelectorAll('[data-x]')
  for (let i=0;i<specialTags.length;i++){
    specialTags[i].classList.add('offset')
  }
  scrollHelp();
  window.addEventListener('scroll',(x)=>{
    scrollHelp();
  })
  
  //offset animation and topNavBar activity animation
  function scrollHelp(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i=0;i<specialTags.length;i++){
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        minIndex = i;
      }
    }
    specialTags[minIndex].classList.remove('offset');
    for (let i=0;i<specialTags.length;i++){
      specialTags[i].classList.remove('active')
    }
    specialTags[minIndex].classList.add('active')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+id+'"]') //how to name css selectors
    let li = a.parentNode
    let broAndI = li.parentNode.children
    for(let i=0;i<broAndI.length;i++){
      broAndI[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
  
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for (let i = 0; i<liTags.length;i++){
    liTags[i].onmouseenter = function(x){
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
      x.currentTarget.classList.remove('active')
    }
  }
  
}.call()
